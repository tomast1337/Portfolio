import * as React from "react";
import {
  Header,
  Page,
  Paragraph,
  Ruler,
  SubSubHeader,
  UnOrderedList,
} from "../../components/Commom";
const ExperienciaPage = () => {
  React.useEffect(() => {
    document.title = "Experiencia - Nicolas Vycas Nery";
  });

  type Experiencia = {
    cargo: string;
    empresa: string;
    período: string;
    descrição: string;
    competências: string[];
  };

  const profissional = [
    {
      cargo: "Estagiário de Data Science",
      empresa: "Tribunal de Contas da União",
      período: "Agosto de 2021 - Atual",
      descrição:
        "Prestando assistência em data mining e gestão de dados estruturados usando as seguintes ferramentas/tecnologias:",
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
      cargo: "Desenvolvedor Full Stack meio período",
      empresa: "Beta Bit",
      período: "Novembro de 2022 - Abril de 2023",
      descrição:
        "Desenvolvimento de aplicações web usando as seguintes tecnologias:",
      competências: [
        "React",
        "NextJs",
        "Node",
        "NestJs",
        "Express",
        "TypeScript",
      ],
    },
    {
      cargo: "Iniciação Científica",
      empresa: "CEFET/RJ",
      período: "Novembro de 2022 - Atual",
      descrição:
        "Auxiliando na criação de um jogo com foco em interface para deficientes visuais usando as seguintes tecnologias:",
      competências: ["Unity", "Python", "C#"],
    },
  ] as Experiencia[];
  const voluntario = [
    {
      cargo: "Monitor da disciplina Estrutura de Dados Monitor",
      empresa: "CEFET/RJ",
      período: "Março de 2022 - Outubro de 2022",
      descrição:
        "Prestando assistência nas linguagens C e C++, trabalhando com o professor para responder aos alunos questões e auxiliando no desenvolvimento dos seguintes tópicos:",
      competências: [
        "Estruturas lineares sequenciais (Array)",
        "Algoritmos de ordenação",
        "Variáveis composta heterogênea",
        "Estruturas de dados não lineares, árvores",
        "Busca binária",
      ],
    },
    {
      cargo: "Trainee no Ramo Estudantil IEEE CEFET/RJ",
      empresa: "Ramo Estudantil IEEE CEFET/RJ",
      período: "Novembro de 2022 - Janeiro de 2023",
      descrição:
        "Construí um bot para o discord usando a api do discord que gera avisos de datas de aniversários de membros do servidor, usando as seguintes tecnologias:",
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
        <div>
          <SubSubHeader>
            {props.experiencia.cargo} - {props.experiencia.empresa}
          </SubSubHeader>
          <Paragraph>{props.experiencia.descrição}</Paragraph>
          <UnOrderedList>
            {props.experiencia.competências.map((competência, index) => {
              return <li key={index}>{competência}</li>;
            })}
          </UnOrderedList>
          <SubSubHeader>{props.experiencia.período}</SubSubHeader>
        </div>
      </>
    );
  };

  return (
    <>
      <Page>
        <div>
          <Header>Experiência Profissional</Header>
          {profissional.map((experiencia, index) => (
            <ExperienciaElem key={index} experiencia={experiencia} />
          ))}
        </div>
        <Ruler />
        <div>
          <Header>Experiência Voluntária</Header>
          {voluntario.map((experiencia, index) => (
            <ExperienciaElem key={index} experiencia={experiencia} />
          ))}
        </div>
      </Page>
    </>
  );
};

export default ExperienciaPage;
