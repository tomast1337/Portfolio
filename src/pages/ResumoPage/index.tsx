import * as React from "react";
import { Link } from "react-router-dom";
import ResumoStyle from "./ResumoPage.module.scss";

const ResumoPage = () => {

    React.useEffect(() => {
        document.title = "Resumo - Nicolas Vycas Nery";
    });

    return (
        <div className={ResumoStyle.page}>
            <h1>Resumo</h1>
            <img src="/imgs/eu.jpeg" alt="Eu" />
            <p>
                Sou Nicolas, e programador há 8 anos e estudo formalmente desde 2016. Estudei TI no ensino médio técnico da FAETEC com foco em desenvolvimento de software Java, linguagem na qual tenho mais prática e experiência. Atualmente estou cursando Ciência da Computação no CEFET/RJ.
            </p>
            <p>
                Tenho interesse em desenvolvimento fullstack, para min código é arte e meu principal interesse des dos 14 anos de idade. Não existe stack ou negocio desinteressante, o que importa é a solução que você vai entregar. Sou entusiasta de tecnologias FOSS e de código aberto, e usuário de Arch Linux desde 2019. 
            </p>
            <p>
                Meu objetivo atual é mudar da área do meu estágio atual em ciência de dados no TCU, para um estágio ou emprego desenvolvedor de software que era meu objetivo inicial a 8 anos.
            </p>
            <p>
                Atualmente tenho interesse em emprego e, ou estagio, aqui no Rio de Janeiro, mas se for remoto posso trabalhar para qualquer lugar.
            </p>
            <p>
                Meu tempo na faculdade é negociável e pode se ajustar a posição, me formo no segundo semestre de 2024.
            </p>
            <p>
                A cima a uma lista de links onde se pode acessar outras paginas do meu portfólio, que tal começar pelos meus <Link to="/Projetos">projetos</Link>?
            </p>
        </div>
    )
}

export default ResumoPage;