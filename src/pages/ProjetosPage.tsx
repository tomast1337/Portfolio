import * as React from "react";
import style from "./ProjetosPage.module.scss";

type Projeto = {
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
            descricao: "Mod para Minecraft em java que adiciona mais esponjas ao jogo.",
            imagem: "/imgs/moresponges.png",
            link: "https://github.com/tomast1337/More-Sponges-Mod"
        },
        {
            nome: "Pizzaria On",
            descricao: "Projeto fullstack com ReactJs+Redux, Express e MongoDB que implementa um site de delivery de pizza customizadas.",
            imagem: "/imgs/pizzaon.jpg",
            link: "https://github.com/dsm-cefet-rj/ti-2022-1-grupo_8"
        },
        {
            nome: "Pizzaria Byte",
            descricao: "Projeto fullstack remake da Pizzaria On, um site de delivery de pizza customizadas, em typescript com varias melhorias com ReactJs+Redux, Express e MongoDB.",
            imagem: "/imgs/pizzaByte.webp",
            link: "https://github.com/tomast1337/Pizzaria-Byte"
        },
        {
            nome: "Bot Rio Vagas",
            descricao: "WebScrapper feito com Python e Selenium que busca vagas e envia currículos no site do Rio Vagas.",
            imagem: "/imgs/python+selenium.webp",
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
            descricao: "Plugin spigot em java que gera visualizações de estrutura de dados do jogo.",
            imagem: "/imgs/Minecraft Visualização Estrutura de Dados.png",
            link: "https://github.com/tomast1337/Minecraft-Visualizacao-Estrutura-de-Dados"
        },
        {
            descricao: "TCC do meu técnico em informática da FAETEC de 2018. Controle de uma loja de roupas, feito com java, java swing e MySQL.",
            nome: "Controle de loja de Roupas",
            imagem: "https://github.com/tomast1337/exercism/blob/main/java/2015-2018/projeto%20vanessa%20e%20nicolas/class%20der.png?raw=true",
            link: "https://github.com/tomast1337/exercism/tree/main/java/2015-2018/projeto%20vanessa%20e%20nicolas"
        },
        {
            nome: "Este projeto",
            descricao: "Site pessoal feito em React e TypeScript.",
            imagem: "/imgs/Este projeto.png",
            link: "https://github.com/tomast1337/Portf-lio"
        }
        /*
        {
            nome: "",
            descricao: "",
            imagem: "",
            link: ""
        },
        */
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