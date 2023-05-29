import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled, { css, ThemeContext } from "styled-components";
import { colors, forDesktop, fonts } from "../styles/colors";
import { SVGLogo } from "./SVGLogo";
import { SmallBounce, TextAnimation } from "../styles/animations";
import { Ruler } from "./Commom";
import { AppThemeContextType } from "../context/AppContext";

const NavbarBody = styled.div`
  justify-content: left;
  align-items: right;
  height: fit-content;
  height: fit-content;
  transition: all 1s ease-in-out;
`;

const NavbarBrand = styled.div`
  path {
    fill: $dark1;
    box-shadow: 1px 1px 1px 1px
      ${colors.dark1};
    animation: ${TextAnimation} 1.5s;
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
`;


const Navbar = () => {
  return (
    <>
      <NavbarBody>
        <NavbarBrand>
          <SVGLogo
            color={"#e07245"}
          />
        </NavbarBrand>
      </NavbarBody>
      <Ruler />
    </>
  );
};

export default Navbar;
