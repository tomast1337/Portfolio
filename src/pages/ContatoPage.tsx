import * as React from "react";
import style from "./ContatoPage.module.scss";

interface Contato {
    name: string;
    url: string;
    icon: string;
}

const ContatoElement = (props: React.PropsWithChildren<Contato>) => {
    const contato: Contato = props.contato;
    return (
    <>
        <a href={contato.url} target="_blank" rel="noopener noreferrer">
            <img src={contato.icon} alt={contato.name} />
        </a>
    </>);
}

const ContatoPage = () => {
    const links: Contato[] = [
        {
            name: "Github",
            url: "https://github.com/tomast1337",
            icon: "https://img.icons8.com/color/48/000000/github.png"

        },
        {
            name: "Linkedin",
            url: "https://www.linkedin.com/in/nicolas-vycas/",
            icon: "https://img.icons8.com/color/48/000000/linkedin.png"
        }
    ];

    React.useEffect(() => {
        document.title = "Contato - Nicolas Vycas Nery";
    });

    return (
        <div className={style.page}>
            <h1>Contato</h1>
            <ul>
                {links.map((link, index) => {
                    return (
                        <li key={index}>
                            <ContatoElement contato={link} />
                        </li>
                    );
                })}
            </ul>

        </div>
    );
}

export default ContatoPage;