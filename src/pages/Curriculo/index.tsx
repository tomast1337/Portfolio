import * as React from "react";
import style from "./Curriculo.module.scss";
import { Formacao, Experiencia, Curriculo } from "../../data/types";
import { useNavigate } from "react-router-dom";

export default () => {
    const laguages = ["pt", "en"];
    const [language, setLanguage] = React.useState(laguages[0]);

    const [Dados, setDados] = React.useState<Curriculo | null>(null);

    const navigate = useNavigate();

    const Print = () => {
        window.print();
    };
    React.useEffect(() => {
        if (language === "pt") {
            fetch("/data/curriculo-pt.json").then((data) => {
                data.json().then((data) => {
                    setDados(data);
                });
            }).catch(() => {
                navigate("/404");
            });
        } else {
            fetch("/data/curriculo-en.json").then((data) => {
                data.json().then((data) => {
                    setDados(data);
                });
            }).catch(() => {
                navigate("/404");
            });
        }
        document.title = language === "pt" ? "Currículo - Nicolas Vycas Nery" : "Curriculum - Nicolas Vycas Nery";
    }, [language]);
    return (
        <>
            <div className={style.controls}>
                <h1>{language === "pt" ?
                    "Currículo" :
                    "Curriculum"}</h1>
            </div>
            <div className={style.controls}>
                <button onClick={Print}>{language === "pt" ? "Imprimir" : "Print"}</button>
                {/* Langue Switch button */}
                <button onClick={() => {
                    setLanguage(language === laguages[0] ? laguages[1] : laguages[0]);
                }}>{language === "pt" ?
                    "Switch to English" :
                    "Mudar para Português"}</button>
                {/* Back button */}
                <button onClick={() => { navigate("/"); }}>{language === "pt" ? "Voltar" : "Back"}</button>
            </div>
            {Dados ?
                (<div className={style.curriculo}>
                    <div className={style.header}>
                        <h1>{Dados.Nome}</h1>
                        <h2>{Dados.Posição}</h2>
                        <h2>{Dados.Local}</h2>
                    </div>
                    <div className={style.content}>
                        <div className={style.section}>
                            <h2>{language === "pt" ? "Resumo" : "Summary"}</h2>
                            <p>{Dados.Resumo}</p>
                        </div>
                        <div className={style.section}>
                            <h2>{language === "pt" ? "Formação" : "Education"}</h2>
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
                            <h2>{language === "pt" ?
                                "Experiencia Profissional" :
                                "Professional Experience"}</h2>
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
                            <h2>{language === "pt" ? "Experiência Voluntária" : "Voluntary Experience"}</h2>
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
                            <h2>{language === "pt" ? "Idiomas" : "Languages"}</h2>
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
                            <h2>{language === "pt" ?
                                "Habilidades"
                                : "Skills"}</h2>
                            <h3>{language === "pt" ?
                                "Linguas mais usada no github"
                                : ""}</h3>
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
                            {language === "pt" ?
                                "Escrito em" :
                                "Written in"}
                            <span>
                                { }
                                {
                                    language === "pt" ?
                                        `${new Date().toLocaleDateString()} as ${new Date().toLocaleTimeString()}` :
                                        `${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}`
                                }
                            </span>
                        </p>
                    </div>
                </div>) : (null)}
        </>
    );
}

