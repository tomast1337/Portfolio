import * as React from "react";
import { useAppContext } from "../context/AppContext";
import Render from "../rendering/render";
const CanvasBG = () => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const { hasLoaded, setHasLoaded, updateLoadPercent } = useAppContext();
  const [audio, setAudio] = React.useState<HTMLAudioElement | null>(null);
  const [render, setRender] = React.useState<Render | null>(null);
  const main = async () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const render = new Render(canvas);
    await render.loadScene(updateLoadPercent);

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
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: -1,
          filter: `saturate(2) brightness(1.2)`,
          imageRendering: "pixelated",
        }}
      ></canvas>
    </>
  );
};

export default CanvasBG;
