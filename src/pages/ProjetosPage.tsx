import * as React from "react";
import style from "./ProjetosPage.module.scss";

const ProjetosPage = () => {
    const projetos: { nome: string, descricao: string, imagem: string,link: any}[] = [
            {
                nome: "Projeto 1",
                descricao: "Descrição do projeto 1",
                imagem: "https://picsum.photos/300/300",
                link: "https://www.google.com"
            },
            {
                nome: "Projeto 2",
                descricao: "Descrição do projeto 1",
                imagem: "https://picsum.photos/200/200",
                link: "https://www.google.com"
            },
            {
                nome: "Projeto 2",
                descricao: "Descrição do projeto 1",
                imagem: "https://picsum.photos/100/100",
                link: "https://www.google.com"
            },
            {
                nome: "Projeto 2",
                descricao: "Descrição do projeto 1",
                imagem: "https://picsum.photos/500/500",
                link: undefined,
            },
            {
                nome: "Projeto 2",
                descricao: "Descrição do projeto 1",
                imagem: "https://picsum.photos/600/600",
                link: "https://www.google.com"
            },
            {
                nome: "Projeto 2",
                descricao: "Descrição do projeto 1",
                imagem: "https://picsum.photos/700/700",
                link: "https://www.google.com"
            }
        ]
    return (
        <>
            <div className={style.page}>
                <h1>Projetos</h1>
                <div className={style.projetos}>
                    {projetos.map(projeto => (
                        <div className={style.projeto}>
                            <img src={projeto.imagem} alt={projeto.nome} />
                            <div className={style.projetoInfo}>
                                <h2>{projeto.nome}</h2>
                                <p>{projeto.descricao}</p>
                                {
                                    projeto.link &&
                                    <a href={projeto.link}>Acessar</a>
                                }
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );

}

export default ProjetosPage;