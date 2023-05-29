import * as React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

import PageBody from "./components/PageBody";
import { AppProvider } from "./context/AppContext";
import ResumoPage from "./pages/ResumoPage";
import ContatoPage from "./pages/ContatoPage";
import ExperienciaPage from "./pages/ExperienciaPage";
import FormaçãoPage from "./pages/FormaçãoPage";
import ProjetosPage from "./pages/ProjetosPage";
import ShoutOuts from "./pages/ShoutOuts";
import CurriculoPage from "./pages/CurriculoPage";
import CurriculoPrintPage from "./pages/CurriculoPrintPage";

const App = () => {
  return (
    <AppProvider>
      <HashRouter>
        <Routes>
          <Route
            path="/"
            element={
              <PageBody>
                <ResumoPage />
                <ContatoPage />
                <ExperienciaPage />
                <FormaçãoPage />
                <ProjetosPage />
                <ShoutOuts />
                <CurriculoPage />
              </PageBody>
            }
          />
          <Route path="/Curriculo-print" element={<CurriculoPrintPage />} />
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
    </AppProvider>
  );
};

export default App;
