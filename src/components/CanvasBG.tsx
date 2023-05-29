import * as React from "react";
import * as THREE from "three";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { useAppContext } from "../context/AppContext";
class Render {
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private canvas: HTMLCanvasElement;

  private mainGroup: THREE.Group;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas });
    this.onWindowResize();
    this.registerEventListeners();
    this.mainGroup = new THREE.Group();
  }

  public async loadScene(
    setHasLoaded: React.Dispatch<React.SetStateAction<boolean>>
  ) {
    this.scene.background = new THREE.Color("0x45b3e0");

    //const axishelp = new THREE.AxesHelper(5);
    //this.scene.add(axishelp);

    // load the sky texture /imgs/textures/skydome.png
    const t = await new THREE.TextureLoader().loadAsync(
      "./imgs/textures/skydome.png"
    );
    // add a blue sphere sky dome
    const geometry = new THREE.SphereGeometry(5, 16, 16);
    const material = new THREE.MeshBasicMaterial({
      map: t,
      side: THREE.BackSide,
    });
    const sphere = new THREE.Mesh(geometry, material);
    this.scene.add(sphere);

    // add sunlight
    const light = new THREE.DirectionalLight(0xffda99, 1);
    light.position.set(0, 1, 1);
    this.scene.add(light);

    // global light
    const ambientLight = new THREE.AmbientLight(0x45b3e0, 0.5);
    this.scene.add(ambientLight);

    const loader = new FBXLoader();
    loader.load(
      "./models/sao_paulo.fbx",
      (object: THREE.Group) => {
        this.mainGroup = object;
        object.position.set(0, 0, 0);
        object.scale.set(0.02, 0.02, 0.02);
        //object.castShadow = true;
        //object.receiveShadow = true;
        //list the materials
        object.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            // remove the texture filter to avoid blurring
            const material = child.material as THREE.MeshPhongMaterial;
            material.map!.minFilter = THREE.LinearFilter;

            // add a shadow
            child.castShadow = true;
            child.receiveShadow = true;

            // add a wireframe
            //const wireframe = new THREE.WireframeGeometry(child.geometry);
            //const line = new THREE.LineSegments(wireframe);
            //child.add(line);
          }
          setTimeout(() => {
            setHasLoaded(true);
          }, 1000);
        });
        // add the object to the scene
        this.scene.add(object);
        // remove the texture filter to avoid blurring
      },
      (event: ProgressEvent) => {
        //console.log(`Loading: ${event.loaded} / ${event.total}`);
      },
      (event: ErrorEvent) => {
        //console.log(`Error: ${event.message}`);
      }
    );
  }

  private onWindowResize() {
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
  }

  private registerEventListeners() {
    window.addEventListener(
      "resize",
      () => {
        this.onWindowResize();
      },
      false
    );
  }

  public render() {
    const rotateCamera = () => {
      const now = Date.now();
      this.camera.position.x = Math.sin(now / 10000) * 2;
      this.camera.position.z = Math.cos(now / 10000) * 2;
      this.camera.position.y = 1;
      this.camera.lookAt(0, 0, Math.sin(now / 10000) * 2);
    };

    const audioUpdate = () => {
      // update the this.setMainGroupScaleZ() based on the audio
      //const bufferLength = analyser.frequencyBinCount;
      //const dataArray = new Uint8Array(bufferLength);
      //analyser.getByteFrequencyData(dataArray);
      //const lowEndAverage =
      //  dataArray.slice(0, 5).reduce((a, b) => a + b, 0) / 5;
      //const scale = lowEndAverage / 255;
      //this.setMainGroupScaleZ(scale);
      const now = Date.now();
      const scale =
        Math.random() * 0.01 +
        Math.sin(5 + now / 100) * 0.1 +
        Math.sin(3 + now / 1000) * 1 +
        Math.sin(4 + now / 10000) * 0;
      this.setMainGroupScaleZ(Math.abs(scale));
      //get curret time
    };

    const animate = () => {
      audioUpdate();
      rotateCamera();
      requestAnimationFrame(animate);
      this.renderer.render(this.scene, this.camera);
    };

    animate();
  }

  public setMainGroupScaleZ(scale: number) {
    const min = 0.04;
    const max = 0.06;
    scale = min + (max - min) * scale;
    this.mainGroup.scale.y = scale;
  }
}

const CanvasBG = () => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const { hasLoaded, setHasLoaded } = useAppContext();
  const [audio, setAudio] = React.useState<HTMLAudioElement | null>(null);
  const [render, setRender] = React.useState<Render | null>(null);

  const main = async () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const render = new Render(canvas);
    await render.loadScene(setHasLoaded);

    //const audio = new Audio("./audio/ambient.mp3");
    //audio.loop = true;

    // visualize the audio
    //const audioContext = new AudioContext();
    //const analyser = audioContext.createAnalyser();
    //const source = audioContext.createMediaElementSource(audio);

    //source.connect(analyser);
    //analyser.connect(audioContext.destination);

    // set the render
    setRender(render);
    render.render();

    //audio.play();

    // set the volume
    //audio.volume = 1;
  };

  React.useEffect(() => {
    //console.log("canvas mounted");
    main();
    return () => {
      // cleanup
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        style={{ position: "fixed", top: 0, left: 0, zIndex: -1 }}
      ></canvas>
    </>
  );
};

export default CanvasBG;
