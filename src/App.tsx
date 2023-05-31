import * as React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

import PageBody from "./components/PageBody";
import Loading from "./pages/Loading";
import ShoutOuts from "./pages/ShoutOuts";
import SummaryPage from "./pages/SummaryPage";
import ContactPage from "./pages/ContactPage";
import ExperiencePage from "./pages/ExperiencePage";
import EducationPage from "./pages/EducationPage";
import ProjectsPage from "./pages/ProjectsPage";
import ResumePrintPage from "./pages/ResumePrintPage";
import ResumePage from "./pages/ResumePage";

const App = () => {
  React.useEffect(() => {
    document.title = "Nicolas's Portfolio";
  });
  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Loading />
              <PageBody>
                <SummaryPage />
                <ContactPage />
                <ExperiencePage />
                <EducationPage />
                <ProjectsPage />
                <ResumePage />
                <ShoutOuts />
              </PageBody>
            </>
          }
        />
        <Route path="/Curriculo-print" element={<ResumePrintPage />} />
        <Route
          path="*"
          element={
            <PageBody>
              <h1
                style={{
                  textAlign: "center",
                  marginTop: "20vh",
                  fontSize: "5rem",
                }}
              >
                404
              </h1>
            </PageBody>
          }
        />
      </Routes>
    </HashRouter>
  );
};

export default App;
