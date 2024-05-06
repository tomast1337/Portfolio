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
  fps: 30,
  renderer: "text",
  allowSelect: false,
  restoreState: false,
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

  return (
    <>
      <div
        ref={canvas}
        style={{
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
          zIndex: -1,
          // stick to viewport
          position: "fixed",
          top: 0,
          left: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          padding: "10px",
          color: "white",
        }}
      >
        <SummaryPage />
        <ExperiencePage />
        <EducationPage />
      </div>
    </>
  );
}

export default App;
