import * as React from "react";
import styled, { css } from "styled-components";
import { colors, fonts, forDesktop } from "../styles/colors";

type CommonProps = {
  isDarkMode: boolean;
};

export const Page = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        backgroundImage: "rgba(0,0,0,0.5)",
        backgroundSize: "100%",
        backgroundRepeat: "repeat",
        backgroundPosition: "center",
        //backdropFilter: "blur(10px)",
        width: "100vw",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "0",
        marginBottom: "5em",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          width: "100%",
          margin: "0 auto",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export const Header = styled.h1`
  font-size: 2rem;
  text-align: left;
  text-decoration: underline;
  color: ${colors.light1};
  font-family: ${fonts.fontTitle};
  background-image: url("/imgs/textures/texture1.gif");
  background-size: 100%;
  background-repeat: repeat;
  background-position: center;
  width: fit-content;
  padding: 0.25em;
`;

export const SubHeader = styled.h2`
  font-size: 2em;
  text-align: left;
  font-weight: bold;
  text-decoration: underline;
  padding-left: 1em;
  color: ${colors.dark1};
  font-family: ${fonts.fontText};
  background-color: ${colors.light1};
  width: fit-content;
`;

export const SubSubHeader = styled.h3`
  font-size: 1.5em;
  text-align: left;
  font-weight: bold;
  text-decoration: underline;
  padding-left: 1em;
  color: ${colors.dark1};
  font-family: ${fonts.fontText};
  background-color: ${colors.light1};
  width: fit-content;
`;

export const Paragraph = styled.p`
  font-size: 0.9em;
  text-align: justify;
  text-justify: inter-word;
  padding: 0.5em;
  color: ${colors.dark1};
  background-color: ${colors.light1};
  font-family: ${fonts.fontText};
  ${forDesktop(
    css`
      font-size: 1rem;
    `
  )}

  a {
    color: ${colors.dark1};
    text-decoration: underline;
    font-weight: bold;
  }

  span {
    color: ${colors.light3};
    font-weight: 500;
  }
`;

// images
export const CenteredImage = styled.img`
  width: 10em;
  max-width: 30em;
  height: auto;
  margin: 0 2rem;
`;

type UnOrderedListProps = CommonProps & {
  fontSize?: string;
};

export const UnOrderedList = styled.ul`
  // no decoration
  list-style-type: none;
  width: fit-content;
  padding: 0.5em;
  background-color: ${colors.light1};
  color: ${colors.dark1};

  li {
    font-family: ${fonts.fontText};
    font-size: 0.9em;
  }
`;

export const Ruler = styled.hr`
  border-top: 0.5px solid ${colors.dark1};
  box-shadow: 1px 1px 1px 1px ${colors.dark1};
  margin: auto;
  width: 90%;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 0;
`;

export const Card = styled.div`
  width: 80%;
  height: 200px;
  margin: 1%;
  background-color: ${colors.dark1};
  border-radius: 10px;
  border: 5px solid ${colors.light1};
  outline: 5px solid ${colors.dark2};
  box-shadow: 2px 2px 4px 2px ${colors.light1};
  min-width: 300px;
  color: ${colors.light1};
  font-family: ${fonts.fontText};
  ${forDesktop(
    css`
      font-size: 2rem;
    `
  )}
`;

export const CardLeft = styled.div`
  width: 50%;
  height: 100%;
  float: left;
`;

export const CardRight = styled.div`
  width: 50%;
  height: 100%;
  float: right;
`;
