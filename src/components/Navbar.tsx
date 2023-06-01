import * as React from "react";
import styled, { css } from "styled-components";
import { colors, forDesktop } from "../styles/colors";
import { Ruler } from "./Commom";
import { SVGLogo } from "./SVGLogo";

const NavbarBody = styled.div`
  justify-content: left;
  align-items: right;
  height: fit-content;
  height: fit-content;
  transition: all 1s ease-in-out;
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
`;

const NavbarBrand = styled.div`
  path {
    fill: $dark1;
    box-shadow: 1px 1px 1px 1px ${colors.light1};
    backdrop-filter: invert(1) grayscale(1) contrast(5) brightness(1.2);
  }

  svg {
    width: 25rem;
    height: auto;

    ${forDesktop(
      css`
        width: 30rem;
      `
    )}
  }
`;

const Navbar = () => {
  return (
    <>
      <NavbarBody>
        <NavbarBrand>
          <SVGLogo />
        </NavbarBrand>
        <Ruler />
      </NavbarBody>
    </>
  );
};

export default Navbar;
