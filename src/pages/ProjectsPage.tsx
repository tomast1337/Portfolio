import * as React from "react";
import styled from "styled-components";
import {
  Card,
  CardContainer,
  CardLeft,
  CardRight,
  CustomImage,
  Header,
  Page,
  Ruler,
} from "../components/Commom";
import { colors, fonts } from "../styles/colors";
type Projeto = {
  nome: string;
  descricao: React.ReactElement<any, any>;
  imagem: string;
  link: string;
};

const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    font-size: 2rem;
    font-weight: 600;
    margin: 0.25rem 0;
    display: block;
  }

  a {
    text-decoration: none;
    font-size: 3rem;
    font-weight: 300;
    transition: 0.2s;
    font-family: ${fonts.fontBarcode};
    color: ${colors.dark1};
    &:hover {
      color: ${colors.dark2};
    }
    &:active {
      color: ${colors.dark4};
    }
  }

  font-size: 0.8rem;
  p {
    font-weight: 400;
    margin: 0.5rem 0;
  }

  span {
    color: ${colors.dark4};
  }
`;

const ProjetoCard = (props: { projeto: Projeto }) => {
  const projeto: Projeto = props.projeto;
  return (
    <Card>
      <CardLeft>
        <CustomImage
          style={{
            width: "200px",
            height: "100%",
          }}
          src={projeto.imagem}
          alt={projeto.nome}
        />
      </CardLeft>
      <CardRight>
        <Description>
          <h2>{projeto.nome}</h2>
          {projeto.descricao}
          <a href={projeto.link}>{"Ver Projeto"}</a>
        </Description>
      </CardRight>
    </Card>
  );
};

export default () => {
  const projetos: Projeto[] = [
    {
      nome: "Minecraft data structure visualization",
      descricao: (
        <p>
          A <span>Spigot</span> plugin in <span>Java</span> that generates data
          structure visualizations inside the game.
        </p>
      ),
      imagem: "/imgs/Minecraft Visualização Estrutura de Dados.png",
      link: "https://github.com/tomast1337/Minecraft-Visualizacao-Estrutura-de-Dados",
    },
    {
      nome: "WebScrapper Rio Vagas",
      descricao: (
        <p>
          An <span>WebScrapper</span> made with <span>Python</span> and{" "}
          <span>Selenium</span> that searches for jobs and sends resumes on the
          Rio Vagas website.
        </p>
      ),
      imagem: "/imgs/python+selenium.webp",
      link: "https://github.com/tomast1337/Rio-Vagas-Bot",
    },
    {
      nome: "CSGO Sticker Finder",
      descricao: (
        <p>
          An <span>ReactJs</span> app made with <span>Typescript</span> and
          processed data with <span>Python</span>, <span>Pandas</span> and{" "}
          <span>SciPy</span> that allows you to search CS:GO stickers by color.
        </p>
      ),
      imagem:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXQ9QVcJY8gulReQ0HdUuqkw9aDAhJ8KhNbv7SiFANhxP33fTxQ69n4x4SJxaPxMO2GkjoD7JIo3LmYpon23wTirkU4MjvxLdCXdw47YQnZqE_-n7kIntsXFw/260fx260f",
      link: "https://sticker-picker.vercel.app/",
    },
    {
      nome: "More Sponges Minecraft mod",
      descricao: (
        <p>
          Minecraft mod in mede with <span>Java</span> that adds more sponges to
          the game.
        </p>
      ),
      imagem: "/imgs/moresponges.png",
      link: "https://github.com/tomast1337/More-Sponges-Mod",
    },
    {
      nome: "This project",
      descricao: (
        <p>
          This portfolio website made with <span>ReactJs</span> and{" "}
          <span>TypeScript</span>.
        </p>
      ),
      imagem: "/imgs/Este projeto.png",
      link: "https://github.com/tomast1337/Portf-lio",
    },
    {
      //nome: "Pizzaria On",
      nome: "",
      descricao: (
        <p>
          Fullstack project made with <span>ReactJs+Redux</span>,{" "}
          <span>Express</span> and <span>MongoDB</span> that implements a user
          created custom made pizza delivery website.
        </p>
      ),
      imagem: "/imgs/pizzaon.jpg",
      link: "https://github.com/dsm-cefet-rj/ti-2022-1-grupo_8",
    },
    /*{
      //nome: "Pizzaria Byte",
      nome:"",
      descricao: (
        <p>
          Projeto <span>Fullstack</span> remake da Pizzaria On, um site de
          delivery de pizza customizadas, em <span>Typescript</span> com varias
          melhorias com
          <span>ReactJs+Redux</span>, <span>Express</span> e{" "}
          <span>MongoDB</span>.
        </p>
      ),
      imagem: "/imgs/pizzaByte.webp",
      link: "https://github.com/tomast1337/Pizzaria-Byte",
    },*/
    {
      descricao: (
        <p>
          Final project of my technical high school in 2018. A clothing store
          control system, made with <span>Java</span>, <span>Java Swing</span>{" "}
          and <span>MySQL</span>.
        </p>
      ),
      nome: "Clothing Store Control System",
      imagem:
        "https://github.com/tomast1337/exercism/blob/main/java/2015-2018/projeto%20vanessa%20e%20nicolas/class%20der.png?raw=true",
      link: "https://github.com/tomast1337/exercism/tree/main/java/2015-2018/projeto%20vanessa%20e%20nicolas",
    },
    {
      nome: "Black Metal Logo Generator",
      descricao: (
        <p>
          <span>ReactJs</span> app that generates logos.
        </p>
      ),
      imagem:
        "https://github.com/tomast1337/black-metal-logo-generator/blob/main/images/3.png?raw=true",
      link: "https://github.com/tomast1337/black-metal-logo-generator",
    },
    {
      nome: "Periodic Table",
      descricao: (
        <p>
          I did the port of Cristhiane da Cruz's project to <span>ReactJs</span>{" "}
          with <span>Typescript</span> and <span>Scss</span>.
        </p>
      ),
      imagem:
        "https://user-images.githubusercontent.com/93226440/186889300-6e542fe0-1797-47d6-8e52-9115290d8684.png",
      link: "https://github.com/barroscruzc/tabelaPeriodica",
    },
  ];

  return (
    <>
      <Page>
        <Header>Personal Projects</Header>
        <CardContainer>
          {projetos
            .sort(() => Math.random() - 0.5)
            .map((projeto: Projeto, index: number) => {
              return <ProjetoCard projeto={projeto} key={index} />;
            })}
        </CardContainer>
      </Page>
    </>
  );
};
