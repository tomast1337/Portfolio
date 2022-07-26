import * as React from "react";
import styleExperiencia from "./ExperienciaPage.module.scss";

const ExperienciaPage = () => {

    React.useEffect(() => {
        document.title = "Experiencia - Nicolas Vycas Nery";
    });

    return (
        <>
            <div className={styleExperiencia.page}>
                <div>
                    <h1>Experiencia Profissional</h1>
                    <h3>Estagiário de Data Science no Tribunal de Contas da União:</h3>
                    <p>Prestando assistência em data mining e gestão de dados estruturados usando as seguintes ferramentas/tecnologias:</p>
                    <ul>
                        <li>Jupyter</li>
                        <li>Pandas</li>
                        <li>Matplotlib</li>
                        <li>Seaborn</li>
                        <li>Numpy</li>
                        <li>SQL</li>
                        <li>Excel</li>
                        <li>Power BI</li>
                    </ul>
                    <h3>Agosto de 2021 - Atual</h3>
                </div>
                <hr />
                <div>
                    <h1>Experiência Voluntária</h1>
                    <h3>Monitor da disciplina Estrutura de Dados Monitor no CEFET/RJ</h3>
                    <p>Prestando assistência nas linguagens C e C++, trabalhando com o professor para responder aos alunos questões e auxiliando no desenvolvimento dos seguintes tópicos:</p>
                    <ul>
                        <li>Estruturas lineares sequenciais (Array)</li>
                        <li>Algoritmos de ordenação</li>
                        <li>Variáveis composta heterogênea</li>
                        <li>Estruturas de dados não lineares, árvores</li>
                        <li>Busca binária</li>
                    </ul>
                    <h3>Março de 2022 - Atual</h3>
                </div>
            </div>
        </>
    );
}

export default ExperienciaPage;