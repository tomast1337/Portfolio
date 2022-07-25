import * as React from "react";
import ResumoStyle from "./ResumoPage.module.scss";

const ResumoPage = () => {

    React.useEffect(() => {
        document.title = "Resumo - Nicolas Vycas Nery";
    });

    return (
        <div className={ResumoStyle.page}>
            <h1>Resumo</h1>
            <img src="/src/imgs/eu.jpg" alt="Eu" />
            <p>
                Sou programador há 8 anos e estudo formalmente desde 2016. Estudei TI no ensino médio técnico da FAETEC com foco em desenvolvimento de software Java, linguagem na qual tenho mais prática e experiência. Atualmente estou cursando Ciência da Computação no CEFET/RJ.
            </p>
            <p>
                Meu objetivo atual é mudar da área do meu estágio atual em ciência de dados no TCU, para um estágio ou emprego desenvolvedor de software que era meu objetivo inicial a 8 anos.
            </p>
            <p>
                Estou disposto a trabalhar em qualquer região do Brasil, ser for remoto, e presencial na cidade do Rio de Janeiro, meu tempo para universidade é inegociável, mas estou sempre disponível quando não estou estudando.
            </p>
            <p>
                A cima a um botão "menu" onde se pode acessar outras paginas do meu portfólio, que tal começar pelos meus <a href="/Projetos">projetos</a>?
            </p>
        </div>
    )
}

export default ResumoPage;