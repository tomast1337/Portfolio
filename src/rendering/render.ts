import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";

import {
  AmbientLight,
  BackSide,
  Color,
  DirectionalLight,
  Fog,
  Group,
  Mesh,
  MeshBasicMaterial,
  MeshPhongMaterial,
  NearestFilter,
  PCFSoftShadowMap,
  PerspectiveCamera,
  Scene,
  SphereGeometry,
  TextureLoader,
  WebGLRenderer,
} from "three";

export default class Render {
  private scene: Scene;
  private camera: PerspectiveCamera;
  private renderer: WebGLRenderer;
  private canvas: HTMLCanvasElement;

  private mainGroup: Group;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.scene = new Scene();
    this.camera = new PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.renderer = new WebGLRenderer({ canvas: this.canvas });

    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = PCFSoftShadowMap;

    this.onWindowResize();
    this.registerEventListeners();
    this.mainGroup = new Group();
  }

  public async loadScene(
    updateLoadPercent: (min: number, max: number, current: number) => void
  ) {
    this.scene.background = new Color("0x45b3e0");

    const t = await new TextureLoader().loadAsync(
      "./imgs/textures/skydome.png"
    );
    // add a blue sphere sky dome
    const geometry = new SphereGeometry(5, 16, 16);
    const material = new MeshBasicMaterial({
      map: t,
      side: BackSide,
    });
    const sphere = new Mesh(geometry, material);
    this.scene.add(sphere);

    // add sunlight
    const light = new DirectionalLight(0xffda99, 1);
    light.position.set(0, 1, 1);
    light.castShadow = true;
    light.shadow.mapSize.width = 1024;
    light.shadow.mapSize.height = 1024;
    light.shadow.camera.near = 0.5;
    light.shadow.camera.far = 500;
    light.shadow.bias = -0.001;


    this.scene.add(light);

    // global light
    const ambientLight = new AmbientLight(0x45b3e0, 0.5);
    this.scene.add(ambientLight);

    // add fog
    this.scene.fog = new Fog(0xfce6bd, 0.1, 10);

    const loader = new FBXLoader();
    loader.load(
      "./models/sao_paulo.fbx",
      (object: Group) => {
        this.mainGroup = object;
        object.position.set(0, 0, 0);
        object.scale.set(0.02, 0.02, 0.02);
        object.traverse((child) => {
          if (child instanceof Mesh) {
            // remove the texture filter to avoid blurring
            const material = child.material as MeshPhongMaterial;
            material.map!.minFilter = NearestFilter;
            material.map!.magFilter = NearestFilter;
            material.map!.anisotropy = 0;
            material.fog = true;
            // add a shadow
            child.castShadow = true;
            child.receiveShadow = true;

            // add a wireframe
            //const wireframe = new WireframeGeometry(child.geometry);
            //const line = new LineSegments(wireframe);
            //child.add(line);
          }
        });
        // add the object to the scene
        this.scene.add(object);
        // remove the texture filter to avoid blurring
      },
      (event: ProgressEvent) => {
        //console.log(`Loading: ${event.loaded} / ${event.total}`);
        updateLoadPercent(0, event.total, event.loaded);
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
      const now = Date.now();
      const scale =
        Math.random() * 0.01 +
        Math.sin(5 + now / 100) * 0.1 +
        Math.sin(3 + now / 1000) * 1 +
        Math.sin(4 + now / 10000) * 0;
      this.setMainGroupScaleZ(Math.abs(scale));
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
