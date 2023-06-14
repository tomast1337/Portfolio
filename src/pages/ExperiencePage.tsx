import * as React from "react";
import {
  Header,
  Page,
  Paragraph,
  Ruler,
  SubHeader,
  SubSubHeader,
  UnOrderedList,
} from "../components/Commom";
export default () => {
  type Experiencia = {
    cargo: string;
    empresa: string;
    período: string;
    descrição: string;
    competências: string[];
  };

  const profissional = [
    {
      cargo:
        "Data Science Internship Python | Pandas | Matplotlib | Seaborn | Numpy | Excel",
      empresa: "Tribunal de Contas da União",
      período: "Aug 2021 - Present",
      descrição: `Data mining and management of structured data, using Microsoft Excel, Power Bi and Python.
      Assistance in the creation of Python programs / script using the following tools / technologies:`,
      competências: [
        "Jupyter",
        "Pandas",
        "Matplotlib",
        "Seaborn",
        "Numpy",
        "SQL",
        "Excel",
        "Power BI",
      ],
    },
    {
      cargo:
        "Full Stack Software Developer TypeScript | ReactJs | NextJs | NestJs",
      empresa: "Beta Bit Dev",
      período: "Nov 2022 - Apr 2023 · 6 mos",
      descrição: `As a part-time Full Stack Software Developer, I was responsible for developing web applications using the latest technologies, following agile methodology.

      On the frontend, I use React, Next.js, and Tailwindcss to create rich and intuitive interfaces, making web applications more attractive and user-friendly.
      
      On the backend, I use Nest.js, TypeORM, and PostgreSQL to create scalable and robust web applications. I also use Python and FastAPI to create RESTful APIs.
      
      Additionally, I use tools such as Git to version my code and Docker to create isolated development and production environments.`,
      competências: [
        "React",
        "Next.js",
        "Tailwindcss",
        "Nest.js",
        "TypeORM",
        "Python",
        "FastAPI",
        "PostgreSQL",
        "Git",
        "Docker",
        "Agile",
        "Firebase",
      ],
    },
    {
      cargo: "Undergraduate Research, Unity | Python | C#",
      empresa: "CEFET/RJ",
      período: "Nov 2022 - Present",
      descrição:
        "Assisting in the creation of a game with a focus on interface for visually impaired individuals using the following technologies:",
      competências: ["Unity", "Python", "C#"],
    },
  ] as Experiencia[];
  const voluntario = [
    {
      cargo: "Class Assistant - Data Structures Course C++ | C",
      empresa: "CEFET/RJ",
      período: "Mar 2022 - Oct 2022 · 8 mos",
      descrição:
        "I assisted the class in addressing student's doubts in the course. I use the C and C++ languages and provide assistance with the development of the following topics:",
      competências: [
        "Estruturas lineares sequenciais (Array)",
        "Algoritmos de ordenação",
        "Variáveis composta heterogênea",
        "Estruturas de dados não lineares, árvores",
        "Busca binária",
      ],
    },
    {
      cargo: "Trainee at Ramo Estudantil IEEE CEFET/RJ",
      empresa: "Ramo Estudantil IEEE CEFET/RJ",
      período: "Nov 2022 - Jan 2023 · 3 mos",
      descrição:
        "I built a bot for discord using the discord api that generates birthday date warnings for server members, using the following technologies:",
      competências: [
        "Python",
        "OpenAI gpt-3 api",
        "Google Tenor api",
        "Discord api",
      ],
    },
  ] as Experiencia[];

  const ExperienciaElem = (props: { experiencia: Experiencia }) => {
    return (
      <>
        <SubHeader>
          {props.experiencia.cargo} - {props.experiencia.empresa}
        </SubHeader>
        <Paragraph>{props.experiencia.descrição}</Paragraph>
        <UnOrderedList>
          {props.experiencia.competências.map((competência, index) => {
            return <li key={index}>{competência}</li>;
          })}
        </UnOrderedList>
        <SubHeader>{props.experiencia.período}</SubHeader>
        <Ruler />
      </>
    );
  };

  return (
    <>
      <Page>
        <section>
          <Header>Professional Experience </Header>
          {profissional.map((experiencia, index) => (
            <ExperienciaElem key={index} experiencia={experiencia} />
          ))}
        </section>
        <Ruler />
        <section>
          <Header>Volunteer Experience </Header>
          {voluntario.map((experiencia, index) => (
            <ExperienciaElem key={index} experiencia={experiencia} />
          ))}
        </section>
      </Page>
    </>
  );
};
