import * as React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

import PageBody from "./components/PageBody";
import ContatoPage from "./pages/ContatoPage";
import CurriculoPage from "./pages/CurriculoPage";
import CurriculoPrintPage from "./pages/CurriculoPrintPage";
import ExperienciaPage from "./pages/ExperienciaPage";
import FormaçãoPage from "./pages/FormaçãoPage";
import { Loading } from "./pages/Loading";
import ProjetosPage from "./pages/ProjetosPage";
import ResumoPage from "./pages/ResumoPage";
import ShoutOuts from "./pages/ShoutOuts";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Loading />
              <PageBody>
                <ResumoPage />
                <ContatoPage />
                <ExperienciaPage />
                <FormaçãoPage />
                <ProjetosPage />
                <ShoutOuts />
                <CurriculoPage />
              </PageBody>
            </>
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
  );
};

export default App;
