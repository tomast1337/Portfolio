import * as React from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import {
  CenteredImage,
  Header,
  Paragraph,
  Page,
} from "../../components/Commom";

const ResumoPage = () => {
  React.useEffect(() => {
    document.title = "Resumo - Nicolas Vycas Nery";
  });

  return (
    <Page>
      <Header>Resumo</Header>
      <CenteredImage src="/imgs/eu.jpeg" alt="Eu" />
      <Paragraph>
        Sou Nicolas, sou programador há 8 anos e estudo formalmente o
        desenvolvimento de software desde 2016. Estudei TI no ensino médio
        técnico da FAETEC, com foco em desenvolvimento de software Java,
        linguagem na qual tenho mais prática e experiência. Atualmente, estou
        cursando Ciência da Computação no CEFET/RJ.
      </Paragraph>
      <Paragraph>
        Tenho interesse em desenvolvimento fullstack. Não existe uma stack ou um
        negócio desinteressante, o que importa é a solução que vou entregar para
        o problema.
      </Paragraph>
      <Paragraph>
        Sou entusiasta de tecnologias FOSS e usuário de Arch Linux desde 2019.
        Também uso Linux desde 2016.
      </Paragraph>
      <Paragraph>
        Atualmente, sou estagiário no{" "}
        <strong>Tribunal de contas da União</strong> na área de Cientista de
        Dados, onde trabalho com Python, PowerBI, SQL e outras tecnologias.
        Também sou desenvolvedor fullstack meio período na{" "}
        <a href="https://www.linkedin.com/company/betabit-dev/">BetaBit</a>,
        onde trabalho com React, NestJS, NodeJS, Typescript, PostgreSQL, AWS e
        outras tecnologias.
      </Paragraph>
      <Paragraph>
        Sou fluente em inglês e estou atualmente estudando holandês.
      </Paragraph>
      <Paragraph>
        Caso queira entrar em contato comigo, minha preferência é pelo{" "}
        <a href="https://www.linkedin.com/in/nicolas-vycas/">LinkedIn</a>.
      </Paragraph>
    </Page>
  );
};

export default ResumoPage;
