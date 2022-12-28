import * as React from "react";
import { Link } from "react-router-dom";
import styled, { css, ThemeContext } from "styled-components";
import { colors, forDesktop, fonts } from "../styles/colors";
import { SVGLogo } from "./SVGLogo";
import { TextAnimation } from "../styles/animations";
import { Ruler } from "./Commom";
import { AppThemeContextType } from "../context/AppContext";

const NavbarBody = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: fit-content;
  height: fit-content;
  transition: all 1s ease-in-out;
`;

const NavbarBrand = styled.div`
  animation: fadeIn 1s;
  padding: 10px;
  margin: 0 1rem;

  path {
    fill: $dark1;
    box-shadow: 0 0 1000px
      ${(props: any) => {
        console.log(props);
        if (props.theme.isDarkMode) {
          return colors.dark1;
        } else {
          return colors.light1;
        }
      }};
    //animation: ${TextAnimation} 1.5s;
  }

  svg {
    width: 40rem;
    height: auto;

    ${forDesktop(
      css`
        width: 40rem;
      `
    )}
  }

  //Transitions
  &:hover {
    border-radius: 10px;
  }
`;

const NavbarMenu = styled.div`
  transition: all 0.3s ease-in-out;
  margin: auto 0;
  width: 100%;
  height: fit-content;

  ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      padding: 10px;
      width: 100%;
      text-align: center;
      margin: 1px 0;
      font-family: ${fonts.fontText};
      font-size: 1.8rem;

      ${forDesktop(
        css`
          font-size: 2rem;
        `
      )}

      a,
      button {
        color: ${(props: any) =>
          props.theme.isDarkMode ? colors.dark1 : colors.light1};
        text-decoration: none;
        // make look like a button
        border-radius: 5px;
        transition: all 0.2s ease-in-out;
        font-weight: bold;

        &:hover,
        &:focus {
          background-color: ${(props: any) =>
            props.theme.isDarkMode ? colors.dark1 : colors.light1};
          color: ${(props: any) =>
            props.theme.isDarkMode ? colors.light1 : colors.dark1} !important;
        }

        &:active {
          background-color: ${(props: any) =>
            props.theme.isDarkMode ? colors.dark1 : colors.light1};
          color: $light4 !important;
        }

        &:visited {
          color: ${(props: any) =>
            props.theme.isDarkMode ? colors.dark1 : colors.light1};
        }
      }
      button {
        border: none;
        background-color: transparent;
        cursor: pointer;
      }
    }
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const themeContext = React.useContext(ThemeContext) as AppThemeContextType;
  const clickClose = () => setIsOpen(!isOpen);
  React.useEffect(() => {
    document.body.style.overflowX = "hidden";
  }, [isOpen]);

  return (
    <>
      <NavbarBody>
        <NavbarBrand>
          <SVGLogo
            color={((isDarkMode) =>
              isDarkMode ? colors.dark1 : colors.light1)(
              themeContext.isDarkMode
            )}
          />
        </NavbarBrand>
        <NavbarMenu>
          <ul>
            <li>
              <Link onClick={clickClose} to="/">
                {" "}
                Sobre{" "}
              </Link>
            </li>
            <li>
              <Link onClick={clickClose} to="/Projetos">
                {" "}
                Projetos{" "}
              </Link>
            </li>
            <li>
              <Link onClick={clickClose} to="/Experiencia">
                {" "}
                Experiencia{" "}
              </Link>
            </li>
            <li>
              <Link onClick={clickClose} to="/Formacao">
                {" "}
                Formação{" "}
              </Link>
            </li>
            <li>
              <Link onClick={clickClose} to="/Contato">
                {" "}
                Contato{" "}
              </Link>
            </li>
            <li>
              <Link onClick={clickClose} to="/ShoutOuts">
                {" "}
                ShoutOuts{" "}
              </Link>
            </li>
            <li>
              <Link onClick={clickClose} to="/Curriculo">
                {" "}
                Currículo{" "}
              </Link>
            </li>
            <li>
              <button
                onClick={() => {
                  themeContext.setIsDarkMode(!themeContext.isDarkMode);
                }}
              >
                {themeContext.isDarkMode ? "Light Mode" : "Dark Mode"}
              </button>
            </li>
          </ul>
        </NavbarMenu>
      </NavbarBody>
      <Ruler />
    </>
  );
};

export default Navbar;
