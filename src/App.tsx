import * as React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import {
  ContatoPage,
  CurriculoPage,
  CurriculoPrintPage,
  ExperienciaPage,
  FormaçãoPage,
  ProjetosPage,
  ResumoPage,
  ShoutOuts,
} from "./pages";

import PageBody from "./components/PageBody";
import { AppProvider } from "./context/AppContext";

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
              </PageBody>
            }
          />
          <Route
            path="/Contato"
            element={
              <PageBody>
                <ContatoPage />
              </PageBody>
            }
          />
          <Route
            path="/Experiencia"
            element={
              <PageBody>
                <ExperienciaPage />
              </PageBody>
            }
          />
          <Route
            path="/Formacao"
            element={
              <PageBody>
                <FormaçãoPage />
              </PageBody>
            }
          />
          <Route
            path="/Projetos"
            element={
              <PageBody>
                <ProjetosPage />
              </PageBody>
            }
          />
          <Route
            path="/ShoutOuts"
            element={
              <PageBody>
                <ShoutOuts />
              </PageBody>
            }
          />
          <Route
            path="/Curriculo"
            element={
              <PageBody>
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
