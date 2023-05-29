import * as React from "react";
import styled from "styled-components";
import { Header, Page } from "../../components/Commom";
import { Curriculo } from "../../components/Curriculo";
import English from "../../data/curriculoEN";
import Portuguese from "../../data/curriculoPT";
import { CurriculoType, LaguagesType } from "../../data/types";
import { colors } from "../../styles/colors";

const ControlsDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;

  @media print {
    display: none;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.5rem;
    color: ${(props: any) => {
      if (props.isDarkMode) {
        return colors.dark1;
      }
      return colors.light1;
    }};
    background: ${(props: any) => {
      if (props.isDarkMode) {
        return colors.dark3;
      }
      return colors.light3;
    }};
    .curriculo {
      background-color: white;
      padding: 1rem;
      width: 90%;
      height: 100%;
      margin: 0 auto;
      position: relative;
      border-radius: 1rem;
      transition: all 0.3s ease-in-out;

      @media print {
        padding: 0;
        border-radius: 0;
        width: 100%;
      }
      //desktop
      @media (min-width: 1024px) {
        width: 70%;
      }
    }

    .header {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 90%;
      margin: 0 auto;
      font-family: "Roboto", sans-serif;
      border-bottom: 1px solid $dark1;
      margin-bottom: 1rem;

      h1 {
        font-size: 3rem;
        margin-bottom: 0.5rem;
      }

      h2 {
        display: inline-block;
        font-size: 1.5rem;
        margin: 0 1rem 0 0;
      }
    }

    .content {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
      align-items: flex-start;
      align-content: flex-start;

      height: 100%;
      width: 90%;
      margin: 0 auto;

      @media print {
        height: auto;
      }

      .section {
        width: 42%;
        margin-bottom: 1rem;
        border-radius: 1rem;
        padding: 1rem;

        h2 {
          margin: 0;
          font-size: 2rem;
          font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
            sans-serif;
          border-bottom: 1px solid $dark1;
          width: 100%;
        }

        h3 {
          margin: 0.5rem 0;
          font-size: 1.12rem;
          font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
            sans-serif;
          width: 100%;
        }

        p {
          margin: 0 0 0.5rem 0;
          width: 90%;
          white-space: pre-line;
          font-size: 1.12rem;
          font-family: "Roboto", sans-serif;
        }

        a {
          color: black;
          text-decoration: none;
          font-size: 1.12rem;
          font-family: "Roboto", sans-serif;
          display: block;
          margin: 0.5rem 0;
        }
      }
    }

    .experiencia {
      h3 {
        margin: 0 0 0.5rem 0;
        font-size: 1rem;
        font-family: "Roboto", sans-serif;
        width: 100%;
      }

      p {
        margin: 0 0 0.5rem 0;
        font-size: 1rem;
        font-family: Arial, Helvetica, sans-serif;
        width: 100%;
      }
    }

    .formacao {
      h3 {
        margin: 0 0 0.5rem 0;
        font-size: 1.5rem;
        font-family: "Roboto", sans-serif;
        width: 100%;
      }

      p {
        margin: 0 0 0.5rem 0;
        font-size: 1rem;
        font-family: Arial, Helvetica, sans-serif;
        width: 100%;
      }
    }

    .footer {
      position: relative;
      bottom: 0;
      width: 100%;
      text-align: center;
      font-size: 0.8rem;
      border-top: 1px solid $dark1;
      padding: 0.5rem 0;

      p {
        font-family: "Roboto", sans-serif;
        color: $dark1;
      }

      span {
        font-family: "Roboto", sans-serif;
        color: $dark1;
        font-weight: bold;
        margin-left: 0.5rem;
      }
    }

    .icon {
      width: 1.5rem;
      height: auto;
      aspect-ratio: 1/1;
      margin-right: 0.5rem;
      display: inline-block;
    }
    &:hover {
      color: ${(props: any) => {
        if (props.isDarkMode) {
          return colors.dark4;
        }
        return colors.light4;
      }};
      background-color: ${(props: any) => {
        if (props.isDarkMode) {
          return colors.dark2;
        }
        return colors.light2;
      }};
    }

    transition: all 0.3s ease-in-out;
  }
  h1 {
    font-size: 1.5rem;
    color: ${(props: any) => {
      if (props.isDarkMode) {
        return colors.dark1;
      }
      return colors.light1;
    }};
    font-family: "Roboto", sans-serif;
    flex: 1;
    text-align: center;
  }
`;

export default () => {
  const [language, setLanguage] = React.useState<LaguagesType>("pt");

  const [Dados, setDados] = React.useState<CurriculoType>(
    Portuguese as CurriculoType
  );

  const Print = () => {
    if (language === "pt") {
      window.open("#/Curriculo-print?lang=pt", "_blank");
    } else {
      window.open("#/Curriculo-print?lang=en", "_blank");
    }
  };
  React.useEffect(() => {
    if (language === "pt") {
      setDados(Portuguese);
    } else {
      setDados(English);
    }
    document.title =
      language === "pt"
        ? "Currículo - Nicolas Vycas Nery"
        : "Curriculum - Nicolas Vycas Nery";
  }, [language]);
  return (
    <Page>
      <Header>
        {language === "pt" ? "Currículo" : "Curriculum"}
      </Header>
      <ControlsDiv>
        <button onClick={Print}>
          {language === "pt" ? "Imprimir" : "Print"}
        </button>
        {/* Langue Switch button */}
        <button
          onClick={() => {
            setLanguage(language === "pt" ? "en" : "pt");
          }}
        >
          {language === "pt" ? "Switch to English" : "Mudar para Português"}
        </button>
        {/* Back button */}
      </ControlsDiv>
      <Curriculo language={language} dados={Dados} />
    </Page>
  );
};
