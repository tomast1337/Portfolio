import * as React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import {
    ContatoPage,
    ExperienciaPage,
    FormaçãoPage,
    ProjetosPage, ResumoPage, ShoutOuts, Curriculo
} from "./pages";

import Navbar from "./components/Navbar";
import styles from "./App.module.scss";

const Overlay = (props: any) => {
    return (
        <div className={styles.overlay}>

        </div>
    )
}

const PageBody = (props: any) => {
    return (
        <>
            <div className={styles.container}>
                <Navbar />
                {props.children}
            </div>
        </>
    )
}

const App = () => {
    return (

        <HashRouter>
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
                <Route path="/Curriculo" element={
                    <Curriculo />
                } />
                <Route path="*" element={
                    <PageBody>
                        <h1
                            style={{
                                textAlign: "center",
                                marginTop: "20vh",
                                fontSize: "5rem"
                            }}>
                            404
                        </h1>
                    </PageBody>
                } />
            </Routes>


        </HashRouter >

    )
}


export default App;