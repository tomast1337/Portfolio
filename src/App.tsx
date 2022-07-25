import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContatoPage from "./pages/ContatoPage";
import ExperienciaPage from "./pages/ExperienciaPage";
import FormaçãoPage from "./pages/FormaçãoPage";
import ProjetosPage from "./pages/ProjetosPage";
import ResumoPage from "./pages/ResumoPage";
import Navbar from "./components/Navbar";
import style from "./App.module.scss";
import ShoutOuts from "./pages/ShoutOuts";


const PageBody = (props: any) => {
    return (
        <>
            <Navbar />
            <div className={style.container}>
                {props.children}
            </div>
        </>
    )
}

const App = () => {
    return (
        <BrowserRouter basename={ "/"}>
            <Routes>
                <Route path="/" element={
                    <PageBody>
                        <ResumoPage />
                    </PageBody>
                } />
                <Route path="/Contato" element={
                    <PageBody>
                        <ContatoPage />
                    </PageBody>
                } />
                <Route path="/Experiencia" element={
                    <PageBody>
                        <ExperienciaPage />
                    </PageBody>
                } />
                <Route path="/Formacao" element={
                    <PageBody>
                        <FormaçãoPage />
                    </PageBody>
                } />
                <Route path="/Projetos" element={
                    <PageBody>
                        <ProjetosPage />
                    </PageBody>
                } />
                <Route path="/ShoutOuts" element={
                    <PageBody>
                        <ShoutOuts />
                    </PageBody>
                } />
            </Routes>
        </BrowserRouter>

    )
}


export default App;