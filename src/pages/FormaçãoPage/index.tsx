import * as React from "react";
import {
  Header,
  Page,
  SubHeader,
  UnOrderedList,
} from "../../components/Commom";

const FormaçãoPage = () => {
  React.useEffect(() => {
    document.title = "Formação - Nicolas Vycas Nery";
  });
  return (
    <Page>
      <Header>Formação</Header>
      <SubHeader float="left">Ensino Superior</SubHeader>
      <UnOrderedList>
        <li>
          <strong>Em andamento</strong>
        </li>
        <li>(Bacharelado em Ciência da Computação) no CEFET/RJ</li>
        <li>Centro Federal de Educação Tecnológica</li>
        <li>
          <strong>(2020 – 2023)</strong>
        </li>
      </UnOrderedList>

      <SubHeader float="left">Ensino Médio Técnico</SubHeader>
      <UnOrderedList>
        <li>
          <strong>Completo</strong>
        </li>
        <li>(ensino técnico em informática) na FAETEC</li>
        <li>Escola Técnica Estatual República</li>
        <li>
          {" "}
          <strong>(2016 – 2018)</strong>
        </li>
      </UnOrderedList>
    </Page>
  );
};

export default FormaçãoPage;
