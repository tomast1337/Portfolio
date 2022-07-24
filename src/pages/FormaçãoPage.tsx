import * as React from "react";
import FormaçãoStyle from "./FormaçãoPage.module.scss";

const FormaçãoPage = () => {
    return (
        <div className={FormaçãoStyle.page}>
            <h1>Formação</h1>
            <h2>Ensino Superior</h2>
            <p className={FormaçãoStyle.bold}>Em andamento</p>
            <p>(Bacharelado em Ciência da Computação) no CEFET/RJ</p>
            <p>Centro Federal de Educação Tecnológica</p>
            <p className={FormaçãoStyle.bold}>(2020 – 2024)</p>

            <h2> Médio Técnico</h2>
            <p className={FormaçãoStyle.bold}>Completo</p>
            <p>(ensino técnico em informática) na FAETEC</p>
            <p>Escola Técnica Estatual República</p>
            <p className={FormaçãoStyle.bold}> (2016 – 2018)</p>
        </div>
    );
}

export default FormaçãoPage;