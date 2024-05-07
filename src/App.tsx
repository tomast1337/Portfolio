import * as React from "react";

import EducationPage from "./pages/EducationPage";
import ExperiencePage from "./pages/ExperiencePage";
import SummaryPage from "./pages/SummaryPage";

import { Settings } from "play.core/src/modules/types";
import { run } from "play.core/src/run";
import { useEffect, useRef } from "react";
import { program } from "./rendering/program";

const settings: Settings = {
  element: null,
  cols: 0,
  rows: 0,
  once: false,
  fps: 60,
  renderer: "text",
  allowSelect: false,
  restoreState: true,
  backgroundColor: "#000000",
};

function App(): React.ReactElement {
  const canvas = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (canvas.current) {
      run(program, {
        ...settings,
        element: canvas.current,
      });
    }
  }, []);

  const [showPage, setShowPage] = React.useState(true);

  return (
    <>
      <div
        ref={canvas}
        style={{
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
          whiteSpace: "pre",
          zIndex: -1,
          // stick to viewport
          position: "fixed",
          top: 0,
          left: 0,
        }}
      />
      <div>
        <button
          style={{
            position: "fixed",
            top: 0,
            right: 0,
            padding: "10px",
            color: "white",
            backgroundColor: showPage ? "black" : "red",
            border: "none",
            cursor: "pointer",
          }}
          onClick={() => setShowPage(!showPage)}
        >
          {showPage ? "Hide" : "Show"} Page
        </button>
      </div>
      <div
        style={{
          top: 0,
          left: 0,
          padding: "10px",
          color: "white",
          overflowX: "hidden",
          maxWidth: "100%",
          display: showPage ? "block" : "none",
        }}
      >
        <SummaryPage />
        <EducationPage />
        <ExperiencePage />
      </div>
    </>
  );
}

export default App;
