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

  return (
    <main>
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
      <div
        style={{
          zIndex: -2,
        }}
        className="bg"
      />

      <div
        style={{
          top: 0,
          left: 0,
          padding: "10px",
          color: "white",
          overflowX: "hidden",
          maxWidth: "100%",
        }}
      >
        <SummaryPage />
        <EducationPage />
        <ExperiencePage />
      </div>
    </main>
  );
}

export default App;
