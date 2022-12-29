import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled, { css, ThemeContext } from "styled-components";
import { colors, forDesktop, fonts } from "../styles/colors";
import { SVGLogo } from "./SVGLogo";
import { SmallBounce, TextAnimation } from "../styles/animations";
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
    width: 25rem;
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
      text-align: center;
      font-family: ${fonts.fontText};
      font-size: 1.8rem;
    }
  }
`;

const MenuButton = (props: { onClick: () => void; text: string }) => {
  const animationDuration = "500";

  const Button = styled.button`
    color: ${(props: any) =>
      props.theme.isDarkMode ? colors.dark1 : colors.light1};
    text-decoration: none;
    // make look like a button
    border-radius: 5px;
    transition: all 0.2s ease-in-out;
    font-weight: bold;

    border: none;
    background-color: transparent;
    cursor: pointer;

    &:hover {
      background-color: ${(props: any) =>
        props.theme.isDarkMode ? colors.dark1 : colors.light1};
      color: ${(props: any) =>
        props.theme.isDarkMode ? colors.light1 : colors.dark1} !important;
    }

    &:active {
      animation: ${SmallBounce} ${animationDuration}sec ease-in-out;
    }

    font-size: 1.5rem;
    text-decoration: underline;

    ${forDesktop(
      css`
        font-size: 1.5rem;
      `
    )}
  `;
  return (
    <Button
      onClick={async () => {
        props.onClick();
      }}
    >
      {props.text}
    </Button>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const themeContext = React.useContext(ThemeContext) as AppThemeContextType;
  const clickClose = () => setIsOpen(!isOpen);
  React.useEffect(() => {
    document.body.style.overflowX = "hidden";
  }, [isOpen]);

  const navigate = useNavigate();

  const to = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

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
              <MenuButton onClick={() => to("/")} text="Sobre" />
            </li>
            <li>
              <MenuButton onClick={() => to("/Projetos")} text="Projetos" />
            </li>
            <li>
              <MenuButton
                onClick={() => to("/Experiencia")}
                text="Experiencia"
              />
            </li>
            <li>
              <MenuButton onClick={() => to("/Formacao")} text="Formação" />
            </li>
          </ul>
          <ul>
            <li>
              <MenuButton onClick={() => to("/Contato")} text="Contato" />
            </li>
            <li>
              <MenuButton onClick={() => to("/ShoutOuts")} text="ShoutOuts" />
            </li>
            <li>
              <MenuButton onClick={() => to("/Curriculo")} text="Currículo" />
            </li>
            <li>
              <MenuButton
                onClick={() =>
                  themeContext.setIsDarkMode(!themeContext.isDarkMode)
                }
                text={themeContext.isDarkMode ? "Modo Escuro" : "Modo Claro"}
              />
            </li>
          </ul>
        </NavbarMenu>
      </NavbarBody>
      <Ruler />
    </>
  );
};

export default Navbar;
