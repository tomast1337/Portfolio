import * as React from "react";
import style from "./ContatoPage.module.scss";

const ContatoPage = () => {
    const links: { name: string, url: string, icon: string }[] = [
        {
            name: "Github",
            url: "https://github.com/tomast1337",
            icon: "fab fa-github"

        },
        {
            name: "Linkedin",
            url: "https://www.linkedin.com/in/nicolas-vycas/",
            icon: "fab fa-linkedin"
        }
    ];

    return (
        <div className={style.container}>
            <h1>Contato</h1>
            <ul>
                {links.map((link, index) => {
                    return (
                        <li key={index}>
                            <a href={link.url} target="_blank" rel="noopener noreferrer">
                                <i className={link.icon}></i>
                                {link.name}
                            </a>
                        </li>
                    );
                })}
            </ul>

        </div>
    );
}

export default ContatoPage;