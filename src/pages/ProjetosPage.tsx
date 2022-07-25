import * as React from "react";
import style from "./ProjetosPage.module.scss";

interface Projeto {
    nome: string;
    descricao: string;
    imagem: string;
    link: string | null | undefined;
}

const ProjetoCard = (props: React.PropsWithChildren<Projeto>) => {
    const projeto: Projeto = props.projeto;
    return (
        <div className={style.projeto}>
            <div className={style.projetoImagem}>
                <img src={projeto.imagem} alt={projeto.nome} />
            </div>
            <div className={style.projetoInfo}>
                <h2>{projeto.nome}</h2>
                <p>{projeto.descricao}</p>
                {
                    projeto.link &&
                    <a href={projeto.link}>{"Ver Projeto"}</a>
                }
            </div>
        </div>
    );

}

const ProjetosPage = () => {
    const projetos: Projeto[] = [
        {
            nome: "More Sponges mod",
            descricao: "Mod para Minecraft que adiciona mais esponjas ao jogo.",
            imagem: "./src/imgs/moresponges.png",
            link: "https://www.google.com"
        },
        {
            nome: "Pizzaria On",
            descricao: "Projeto full stack que implementa um site de delivery de pizza customizadas.",
            imagem: "./src/imgs/pizzaon.jpg",
            link: "https://github.com/dsm-cefet-rj/ti-2022-1-grupo_8"
        },
        {
            nome: "Bot Rio Vagas",
            descricao: "WebScrapper feito com Python e Selenium que busca vagas e envia currículos no site do Rio Vagas.",
            imagem: "./src/imgs/python+selenium.webp",
            link: "https://github.com/tomast1337/Rio-Vagas-Bot"
        },
        {
            nome: "Black Metal Logo Generator",
            descricao: "Aplicação em React que gera logotipos.",
            imagem: "https://github.com/tomast1337/black-metal-logo-generator/blob/main/images/3.png?raw=true",
            link: "https://github.com/tomast1337/black-metal-logo-generator",
        },
        {
            nome: "Minecraft Visualização Estrutura de Dados",
            descricao: "Visualização de estrutura de dados do jogo Minecraft.",
            imagem: "./src/imgs/Minecraft Visualização Estrutura de Dados.png",
            link: "https://github.com/tomast1337/Minecraft-Visualizacao-Estrutura-de-Dados"
        },
        {
            nome: "Este projeto",
            descricao: "Site pessoal feito em React.",
            imagem: "./src/imgs/Este projeto.png",
            link: "https://github.com/tomast1337/Minecraft-Visualizacao-Estrutura-de-Dados"
        }
    ]
    React.useEffect(() => {
        document.title = "Projetos - Nicolas Vycas Nery";
    });
    return (
        <>
            <div className={style.page}>
                <h1>Projetos</h1>
                <div className={style.projetos}>
                    {projetos.sort(() => Math.random() - 0.5).map(projeto => (
                        <ProjetoCard projeto={projeto} />
                    ))}
                </div>
            </div>
        </>
    );

}

export default ProjetosPage;