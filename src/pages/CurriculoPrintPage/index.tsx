import * as React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Curriculo } from "../../components/Curriculo";
import { Page } from "../../components/Commom";
import { CurriculoType, LaguagesType } from "../../data/types";
import English from "../../data/curriculoEN";
import Portuguese from "../../data/curriculoPT";

export default () => {
  const [language, setLanguage] = React.useState<LaguagesType>("pt");

  const [Dados, setDados] = React.useState<CurriculoType>(
    Portuguese as CurriculoType
  );

  const getQueryParams = () => {
    const params = new URLSearchParams(window.location.href.split("?")[1]);
    const lang = params.get("lang");
    if (lang) {
      setLanguage(lang as LaguagesType);
      if (lang === "pt") {
        setDados(Portuguese);
      } else {
        setDados(English);
      }
    } else {
      setLanguage("pt");
      setDados(Portuguese);
    }
  };

  const setWindowTitle = () => {
    document.title =
      language === "pt"
        ? "Currículo - Nicolas Vycas Nery"
        : "Curriculum - Nicolas Vycas Nery";
  };

  React.useEffect(() => {
    getQueryParams();
    setWindowTitle();
  }, []);

  React.useEffect(() => {
    setWindowTitle();
  }, [language]);

  return (
    <Page>
      <Curriculo language={language} dados={Dados} />
    </Page>
  );
};