import * as React from "react";
import { CurriculoType, ExperienciaType, FormacaoType } from "../data/types";
import styled from "styled-components";
import { useAppContext } from "../context/AppContext";

const CurrículoBody = styled.div`
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
`;

const CurrículoHeader = styled.div`
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
`;

const CurrículoContent = styled.div`
  height: 100%;
  width: 90%;
  margin: 0 auto;

  @media print {
    height: auto;
  }
`;

const CurrículoSection = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-bottom: 1rem;
  border-radius: 1rem;
  padding: 1rem;

  h2 {
    margin: 0;
    font-size: 1rem;
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
    font-size: 0.8rem;
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
`;

const CurrículoExperiencia = styled.div`
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
`;

const CurrículoFormação = styled.div`
    h3 {
        margin: 0 0 0.5rem 0;div
        font-size: 1rem;
        font-family: Arial, Helvetica, sans-serif;
        width: 100%;
    }
`;

const CurrículoFooter = styled.div`
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
`;

const Icon = styled.img`
  width: 1.5rem;
  height: auto;
  aspect-ratio: 1/1;
  margin-right: 0.5rem;
  display: inline-block;
`;

export const Curriculo = ({
  dados,
  language,
}: {
  dados: CurriculoType;
  language: "pt" | "en";
}) => {
  return (
    <>
      <CurrículoBody>
        <CurrículoHeader>
          <h1>{dados.Nome}</h1>
          <h2>{dados.Posição}</h2>
          <h2>{dados.Local}</h2>
        </CurrículoHeader>
        <CurrículoContent>
          <CurrículoSection>
            <h2>{language === "pt" ? "Resumo" : "Summary"}</h2>
            <p>{dados.Resumo}</p>
          </CurrículoSection>
          <CurrículoSection>
            <h2>{language === "pt" ? "Formação" : "Education"}</h2>
            {dados["Formação"].map((item: FormacaoType, index: number) => {
              return (
                <CurrículoFormação key={index}>
                  <h3>{item["Tipo"]}</h3>
                  <h3>{item["Instituição"]}</h3>
                  <p>{item["Curso"]}</p>
                  <p>{item["Data"]}</p>
                </CurrículoFormação>
              );
            })}
          </CurrículoSection>
          <CurrículoSection>
            <h2>
              {language === "pt"
                ? "Experiencia Profissional"
                : "Professional Experience"}
            </h2>
            {dados["Experiencia Profissional"].map(
              (item: ExperienciaType, index: number) => {
                return (
                  <CurrículoExperiencia key={index}>
                    <h3>{item["Nome"]}</h3>
                    <h3>{item["Empresa"]}</h3>
                    <p>{item["Descrição"]}</p>
                    <p>
                      {item["Data Início"]} - {item["Data Fim"]}
                    </p>
                  </CurrículoExperiencia>
                );
              }
            )}
          </CurrículoSection>
          <CurrículoSection>
            <h2>
              {language === "pt"
                ? "Experiência Voluntária"
                : "Voluntary Experience"}
            </h2>
          </CurrículoSection>
          {dados["Experiência Voluntária"].map(
            (item: ExperienciaType, index: number) => {
              return (
                <CurrículoExperiencia key={index}>
                  <h3>{item["Nome"]}</h3>
                  <h3>{item["Empresa"]}</h3>
                  <p>{item["Descrição"]}</p>
                  <p>
                    {item["Data Início"]} - {item["Data Fim"]}
                  </p>
                </CurrículoExperiencia>
              );
            }
          )}

          <CurrículoSection>
            <h2>{language === "pt" ? "Idiomas" : "Languages"}</h2>
            {dados["Idiomas"].map((item: string, index: number) => {
              return <p key={index}>{item}</p>;
            })}
            <h2>Links</h2>
            <a href={"http://" + dados["GitHub"]}>
              <Icon src="/github.svg" alt="GitHub:" />
              {dados["GitHub"]}
            </a>

            <a href={"http://" + dados["LinkedIn"]}>
              <Icon src="/linkedin.svg" alt="LinkedIn:" />
              {dados["LinkedIn"]}
            </a>

            <a href={"http://" + dados["Portfolio"]}>
              <Icon src="/portfolio.svg" alt="Portfolio:" />
              {dados["Portfolio"]}
            </a>
          </CurrículoSection>
          <CurrículoSection>
            <h2>{language === "pt" ? "Habilidades" : "Skills"}</h2>
            <h3>{language === "pt" ? "Linguas mais usada no github" : ""}</h3>
            <div>
              <img
                width="30%"
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=tomast1337&layout=compact&theme=graywhite&langs_count=10&hide_border=true"
              />
            </div>
          </CurrículoSection>
          <CurrículoSection></CurrículoSection>

          <CurrículoSection></CurrículoSection>
        </CurrículoContent>
        <CurrículoFooter>
          <p>
            {language === "pt" ? "Escrito em" : "Written in"}
            <span>
              {}
              {language === "pt"
                ? `${new Date().toLocaleDateString()} as ${new Date().toLocaleTimeString()}`
                : `${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}`}
            </span>
          </p>
        </CurrículoFooter>
      </CurrículoBody>
    </>
  );
};
