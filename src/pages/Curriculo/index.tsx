import * as React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Curriculo as Currículo, Experiencia, Formacao } from "../../data/types";
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
        font-family: 'Roboto', sans-serif;
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
                font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
                border-bottom: 1px solid $dark1;
                width: 100%;
            }
    
            h3 {
                margin: .5rem 0;
                font-size: 1.12rem;
                font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
                width: 100%;
            }
    
            p {
                margin: 0 0 0.5rem 0;
                width: 90%;
                white-space: pre-line;
                font-size: 1.12rem;
                font-family: 'Roboto', sans-serif;
            }
    
            a {
                color: black;
                text-decoration: none;
                font-size: 1.12rem;
                font-family: 'Roboto', sans-serif;
                display: block;
                margin: 0.5rem 0;
            }
        }
    }
    
    .experiencia {
        h3 {
            margin: 0 0 0.5rem 0;
            font-size: 1rem;
            font-family: 'Roboto', sans-serif;
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
            font-family: 'Roboto', sans-serif;
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
            font-family: 'Roboto', sans-serif;
            color: $dark1;
        }
    
        span {
            font-family: 'Roboto', sans-serif;
            color: $dark1;
            font-weight: bold;
            margin-left: 0.5rem;
        }
    }
    
    .icon{
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

const Currículo = styled.div`
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
    font-family: 'Roboto', sans-serif;
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
`;

const CurrículoSection = styled.div`
    width: 42%;
    margin-bottom: 1rem;
    border-radius: 1rem;
    padding: 1rem;

    h2 {
        margin: 0;
        font-size: 2rem;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        border-bottom: 1px solid $dark1;
        width: 100%;
    }

    h3 {
        margin: .5rem 0;
        font-size: 1.12rem;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        width: 100%;
    }

    p {
        margin: 0 0 0.5rem 0;
        width: 90%;
        white-space: pre-line;
        font-size: 1.12rem;
        font-family: 'Roboto', sans-serif;
    }

    a {
        color: black;
        text-decoration: none;
        font-size: 1.12rem;
        font-family: 'Roboto', sans-serif;
        display: block;
        margin: 0.5rem 0;
    }
`;

const CurrículoExperiencia = styled.div`
    h3 {
        margin: 0 0 0.5rem 0;
        font-size: 1rem;
        font-family: 'Roboto', sans-serif;
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
`

const CurrículoFooter = styled.div`
    position: relative;
    bottom: 0;
    width: 100%;
    text-align: center;
    font-size: 0.8rem;
    border-top: 1px solid $dark1;
    padding: 0.5rem 0;

    p {
        font-family: 'Roboto', sans-serif;
        color: $dark1;
    }

    span {
        font-family: 'Roboto', sans-serif;
        color: $dark1;
        font-weight: bold;
        margin-left: 0.5rem;
    }
`

const Icon = styled.img`
    width: 1.5rem;
    height: auto;
    aspect-ratio: 1/1;
    margin-right: 0.5rem;
    display: inline-block;
`;


export default () => {
  const laguages = ["pt", "en"];
  const [language, setLanguage] = React.useState(laguages[0]);

  const [Dados, setDados] = React.useState<Currículo | null>(null);

  const navigate = useNavigate();

  const Print = () => {
    window.print();
  };
  React.useEffect(() => {
    if (language === "pt") {
      fetch("/data/curriculo-pt.json")
        .then((data) => {
          data.json().then((data) => {
            setDados(data);
          });
        })
        .catch(() => {
          navigate("/404");
        });
    } else {
      fetch("/data/curriculo-en.json")
        .then((data) => {
          data.json().then((data) => {
            setDados(data);
          });
        })
        .catch(() => {
          navigate("/404");
        });
    }
    document.title =
      language === "pt"
        ? "Currículo - Nicolas Vycas Nery"
        : "Curriculum - Nicolas Vycas Nery";
  }, [language]);
  return (
    <>
      <ControlsDiv>
        <h1>{language === "pt" ? "Currículo" : "Curriculum"}</h1>
      </ControlsDiv>
      <ControlsDiv>
        <button onClick={Print}>
          {language === "pt" ? "Imprimir" : "Print"}
        </button>
        {/* Langue Switch button */}
        <button
          onClick={() => {
            setLanguage(language === laguages[0] ? laguages[1] : laguages[0]);
          }}
        >
          {language === "pt" ? "Switch to English" : "Mudar para Português"}
        </button>
        {/* Back button */}
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          {language === "pt" ? "Voltar" : "Back"}
        </button>
      </ControlsDiv>
      {Dados ? (
        <Currículo>
          <CurrículoHeader>
            <h1>{Dados.Nome}</h1>
            <h2>{Dados.Posição}</h2>
            <h2>{Dados.Local}</h2>
          </CurrículoHeader>
          <CurrículoContent>
            <CurrículoSection>
              <h2>{language === "pt" ? "Resumo" : "Summary"}</h2>
              <p>{Dados.Resumo}</p>
            </CurrículoSection>
            <CurrículoSection>
              <h2>{language === "pt" ? "Formação" : "Education"}</h2>
              {Dados["Formação"].map((item: Formacao, index: number) => {
                return (
                  <CurrículoFormação>
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
              {Dados["Experiencia Profissional"].map(
                (item: Experiencia, index: number) => {
                  return (
                    <CurrículoExperiencia>
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
              {Dados["Experiência Voluntária"].map(
                (item: Experiencia, index: number) => {
                  return (
                    <CurrículoExperiencia>
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
              <h2>{language === "pt" ? "Idiomas" : "Languages"}</h2>
              {Dados["Idiomas"].map((item: string, index: number) => {
                return <p key={index}>{item}</p>;
              })}
              <h2>Links</h2>
              <a href={"http://" + Dados["GitHub"]}>
                <Icon src="/github.svg" alt="GitHub:"/>
                {Dados["GitHub"]}
              </a>

              <a href={"http://" + Dados["LinkedIn"]}>
                <Icon src="/linkedin.svg" alt="LinkedIn:" />
                {Dados["LinkedIn"]}
              </a>

              <a href={"http://" + Dados["Portfolio"]}>
                <Icon src="/portfolio.svg" alt="Portfolio:" />
                {Dados["Portfolio"]}
              </a>
            </CurrículoSection>
            <CurrículoSection>
              <h2>{language === "pt" ? "Habilidades" : "Skills"}</h2>
              <h3>{language === "pt" ? "Linguas mais usada no github" : ""}</h3>
              <div>
                <img
                  width="100%"
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
        </Currículo>
      ) : null}
    </>
  );
};
