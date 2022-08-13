import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import style from "./Navbar.module.scss";

const Navbar = () => {

    const [isOpen, setIsOpen] = React.useState(false);

    const navigate = useNavigate();

    const clickClose = () => setIsOpen(!isOpen);

    React.useEffect(() => {
        document.body.style.overflowX = "hidden";
    }, [isOpen]);

    return (
        <>
            <div className={style.navbar}>
                <span className={style.navbar_brand}
                    onClick={
                        () => {
                            navigate("/");
                        }}
                >
                    <h3>Nicolas Vycas Nery</h3>
                    <h4>Desenvolvedor de software</h4>
                </span>
                <button
                    className={style.navbar_button}
                    onClick={clickClose}>
                    {isOpen ? "Sair" : "Menu"}
                </button>

            </div>
            <div className={style.navbarMenu}
            style={{
                transform: isOpen ?
                    "translateX(0)" : "translateX(125%)"
            }}
            // On hover
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            >

                <ul>
                    <li><Link onClick={clickClose} to="/"> Sobre </Link></li>
                    <li><Link onClick={clickClose} to="/Projetos"> Projetos </Link></li>
                    <li><Link onClick={clickClose} to="/Experiencia"> Experiencia </Link></li>
                    <li><Link onClick={clickClose} to="/Formacao"> Formação </Link></li>
                    <li><Link onClick={clickClose} to="/Contato"> Contato </Link></li>
                    <li><Link onClick={clickClose} to="/ShoutOuts"> ShoutOuts </Link></li>
                </ul>
            </div>
        </>
    );
}

export default Navbar;