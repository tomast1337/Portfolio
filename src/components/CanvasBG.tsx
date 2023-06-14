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
    setRender(render);
    render.render();
  };

  React.useEffect(() => {
    main();
    return () => {
      //if (render) render.stop();
    };
  }, []);

  return (
    <>
      <div
        style={{
          clipPath: "url(#clip) !important",
        }}
      >
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
        />
      </div>
    </>
  );
};

export default CanvasBG;
