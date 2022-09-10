import * as React from "react";
import style from "./Curriculo.module.scss";
import { Formacao, Experiencia, Curriculo } from "../../data/types";
import dados from "../../data/Curriculo.json";
import { useNavigate } from "react-router-dom";

export default () => {
    const Dados = dados as Curriculo;
    
    const navigate = useNavigate();

    const Print = () => {
        window.print();
    };
    React.useEffect(() => {
        // set background color to white
        //document.body.style.backgroundColor = "white";
    }, []);
    return (
    <>
        <div className={style.controls}>
            <button onClick={Print}>Imprimir ou Salvar</button>
            <button onClick={() => {
                navigate("/");
            }}>Voltar</button>
        </div>
        <div className={style.curriculo}>
            <div className={style.header}>
                <h1>{Dados.Nome}</h1>
                <h2>{Dados.Posição}</h2>
                <h2>{Dados.Local}</h2>
            </div>
            <div className={style.content}>
                <div className={style.section}>
                    <h2>Resumo</h2>
                    <p>{Dados.Resumo}</p>
                </div>
                <div className={style.section}>
                    <h2>Formação</h2>
                    {Dados["Formação"].map((item: Formacao, index: number) => {
                        return (
                            <div key={index} className={style.formacao}>
                                <h3>{item["Tipo"]}</h3>
                                <h3>{item["Instituição"]}</h3>
                                <p>{item["Curso"]}</p>
                                <p>{item["Data"]}</p>
                            </div>
                        );
                    })}
                </div>
                <div className={style.section}>
                    <h2>Experiencia Profissional</h2>
                    {
                        Dados["Experiencia Profissional"].map((item: Experiencia, index: number) => {
                            return (
                                <div key={index} className={style.experiencia}>
                                    <h3>{item["Nome"]}</h3>
                                    <h3>{item["Empresa"]}</h3>
                                    <p>{item["Data Início"]} - {item["Data Fim"]}</p>
                                </div>
                            );
                        })
                    }
                </div>
                <div className={style.section}>
                    <h2>Experiência Voluntária</h2>
                    {
                        Dados["Experiência Voluntária"].map((item: Experiencia, index: number) => {
                            return (
                                <div key={index} className={style.experiencia}>
                                    <h3>{item["Nome"]}</h3>
                                    <h3>{item["Empresa"]}</h3>
                                    <p>{item["Data Início"]} - {item["Data Fim"]}</p>
                                </div>
                            );
                        })
                    }
                </div>
                <div className={style.section}>
                    <h2>Idiomas</h2>
                    {
                        Dados["Idiomas"].map((item: string, index: number) => {
                            return (
                                <p key={index}>{item}</p>
                            );
                        })
                    }
                </div>
                <div className={style.section}>
                    <h2>Contato</h2>
                    <p>{Dados["GitHub"]}</p>
                    <p>{Dados["LinkedIn"]}</p>
                    <p>{Dados["Portfolio"]}</p>
                </div>
            </div>
            <div className={style.footer}>
            </div>
        </div>
    </>
    );
}

