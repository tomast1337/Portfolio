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
        Sou Nicolas, sou programador há 8 anos, estudo formalmente
        desenvolvimento de software desde 2016. Estudei TI no ensino médio
        técnico da FAETEC com foco em desenvolvimento de software Java,
        linguagem na qual tenho mais prática e experiência. Atualmente estou
        cursando Ciência da Computação no CEFET/RJ.
      </p>
      <p>
        Tenho interesse em desenvolvimento fullstack. Não existe stack ou
        negocio desinteressante, o que importa é a solução que vou entregar para
        o problema.
      </p>
      <p>
        Sou entusiasta de tecnologias FOSS, e usuário de Arch
        Linux desde 2019, e Linux des de 2016.
      </p>
      <p>
        Atualmente sou estagiário no{" "}
        <strong>Tribunal de contas da União</strong> na area de Cientista de
        Dados, onde trabalho com Python, PowerBI, SQL e outras tecnologias. E
        sou desenvolvedor fullstack meio período na{" "}
        <a href="https://www.linkedin.com/company/betabit-dev/">BetaBit</a>,
        onde trabalho com React, NestJS, NodeJS, Typescript, PostgreSQL, AWS e
        outras tecnologias.
      </p>
      <p>
        A cima a uma lista de links onde se pode acessar outras paginas do meu
        portfólio, que tal começar pelos meus{" "}
        <Link to="/Projetos">projetos</Link>?
      </p>
      <p>
        Caso queira entrar em contato comigo, minha preferencia e que seja pelo{" "}
        <a href="https://www.linkedin.com/in/nicolas-vycas/">LinkedIn</a>.
      </p>
    </div>
  );
};

export default ResumoPage;
