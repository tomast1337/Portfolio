import * as React from "react";
import {
  CenteredImage,
  CustomImage,
  Header,
  Page,
  Paragraph,
} from "../components/Commom";

const ResumoPage = () => {
  React.useEffect(() => {
    document.title = "Resumo - Nicolas Vycas Nery";
  });

  return (
    <Page>
      <Header>Resumo</Header>
      <CustomImage 
      style={{
        //backdropFilter: "invert(1) grayscale(1) contrast(5) brightness(1.2)",
      }}
      src="/imgs/eu.jpeg" alt="Eu" />
      <Paragraph>
        Eu sou o Nicolas, um programador com 8 anos de estudos na área. Comecei
        a estudar formalmente desenvolvimento de software em 2016, enquanto
        frequentava o ensino médio técnico da <strong>FAETEC</strong>, onde me
        concentrei no desenvolvimento em Java. Desde então, continuo a
        desenvolver minhas habilidades e conhecimentos por meio de estudos
        autônomos e dos meus estudos atuais em Ciência da Computação no{" "}
        <strong>CEFET/RJ</strong>.
      </Paragraph>
      <Paragraph>
        Tenho um interesse especial no desenvolvimento fullstack, pois aprecio
        estar envolvido em todas as etapas de um projeto, desde o front-end até
        o back-end.
      </Paragraph>
      <Paragraph>
        Sou entusiasta de tecnologias FOSS e usuário de Arch Linux desde 2019.
        Também uso Linux desde 2016.
      </Paragraph>
      <Paragraph>
        No momento, ocupo o cargo de estagiário no{" "}
        <strong>Tribunal de Contas da União (TCU)</strong>, trabalhando na área
        de dados. Minhas responsabilidades envolvem a utilização de{" "}
        <strong>Python</strong>, <strong>PowerBI</strong>, <strong>SQL</strong>{" "}
        e outras tecnologias. No entanto, meu objetivo atual é fazer uma
        transição para uma função de desenvolvimento de software, que era minha
        ambição de carreira original há 8 anos.
      </Paragraph>
      <Paragraph>
        Além da minha experiência no TCU, atuei como desenvolvedor fullstack na{" "}
        <strong>
          <a href="https://www.linkedin.com/company/betabit-dev/">BetaBit</a>
        </strong>{" "}
        em meio período. Durante esse período, trabalhei com uma variedade de
        tecnologias, incluindo React,
        <strong>Python</strong>,<strong>NestJS</strong>,<strong>NodeJS</strong>,
        <strong>Typescript</strong>,<strong>PostgreSQL</strong>,
        <strong>AWS</strong>, entre outras.
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
