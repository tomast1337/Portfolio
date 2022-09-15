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
        document.title = "Currículo - " + Dados.Nome;
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
                                        <p>{item["Descrição"]}</p>
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
                                        <p>{item["Descrição"]}</p>
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
                        <h2>Links</h2>
                        <a href={"http://" + Dados["GitHub"]}>
                            <img
                            src="/github.svg"
                            alt="GitHub:"
                            className={style.icon}
                            />
                            {Dados["GitHub"]}
                        </a>

                        <a href={"http://" + Dados["LinkedIn"]}>
                            <img
                            src="/linkedin.svg"
                            alt="LinkedIn:"
                            />
                            {Dados["LinkedIn"]}
                        </a>


                        <a href={"http://" + Dados["Portfolio"]}>
                            <img
                            src="/portfolio.svg"
                            alt="Portfolio:"
                            />
                            {Dados["Portfolio"]}
                        </a>

                    </div>
                    <div className={style.section}>
                        <h2>Habilidades</h2>
                        <h3>Linguas mais usada no github</h3>
                        <div >
                            <img width="100%"
                                src="https://github-readme-stats.vercel.app/api/top-langs/?username=tomast1337&layout=compact&theme=graywhite&langs_count=10&hide_border=true" />
                        </div>
                    </div>
                    <div className={style.section}>

                    </div>

                    <div className={style.section}>

                    </div>
                </div>
                <div className={style.footer}>
                    <p>
                        Escrito em
                        <span>
                            {`${new Date().toLocaleDateString()} as ${new Date().toLocaleTimeString()}`}
                        </span>
                    </p>
                </div>
            </div>
        </>
    );
}

