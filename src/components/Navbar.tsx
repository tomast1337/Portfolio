import * as React from "react";
import { Link } from "react-router-dom";
import style from "./Navbar.module.scss";

const Navbar = () => {

    const [isOpen, setIsOpen] = React.useState(false);


    return (
        <>
            <div className={style.navbar}>
                <span className={style.navbar_brand}>
                    <h3>Nicolas Vycas Nery</h3>
                    <h4>Desenvolvedor de software</h4>
                </span>
                <button
                    className={style.navbar_button}
                    onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? "Sair" : "Menu"}
                </button>

            </div>
            <div className={style.navbarMenu}
                style={{
                    display: isOpen ? "flex" : "none"
                }}>
                <ul>
                    <li><Link to="/"> Sobre </Link></li>
                    <li><Link to="/Projetos"> Projetos </Link></li>
                    <li><Link to="/Experiencia"> Experiencia </Link></li>
                    <li><Link to="/Formacao"> Formação </Link></li>
                    <li><Link to="/Contato"> Contato </Link></li>
                    <li><Link to="/ShoutOuts"> ShoutOuts </Link></li>
                </ul>
            </div>
        </>
    );
}

export default Navbar;