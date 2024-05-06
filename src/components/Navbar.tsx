import * as React from "react";
import { colors } from "../styles/colors";
import { Ruler } from "./Commom";
import { SVGLogo } from "./SVGLogo";

const NavbarBody = (props: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    style={{
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "1rem",
      backgroundColor: `${colors.light1}`,
      backdropFilter: `invert(1) grayscale(1) contrast(5) brightness(1.2)`,
    }}
    {...props}
  />
);

const NavbarBrand = (props: React.HTMLAttributes<HTMLDivElement>) => (
  <div {...props} />
);

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
