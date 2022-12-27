import styled, { css } from "styled-components";
import { colors, fonts, forDesktop } from "../styles/colors";

type CommonProps = {
  isDarkMode: boolean;
};

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.h1`
  font-size: 3.5rem;
  text-align: center;
  color: ${(props: CommonProps) =>
    props.isDarkMode ? colors.dark1 : colors.light1};
  font-family: ${fonts.fontTitle};
`;

export const SubHeader = styled.h2`
  font-size: 2em;
  font-weight: bold;
  text-decoration: underline;
  padding-left: 1em;
  color: ${(props: CommonProps) =>
    props.isDarkMode ? colors.dark1 : colors.light1};
  font-family: ${fonts.fontText};
`;

export const Paragraph = styled.p`
  font-size: 2em;
  text-align: justify;
  text-justify: inter-word;
  padding-left: 1em;
  padding-right: 1em;
  color: ${(props: CommonProps) =>
    props.isDarkMode ? colors.dark1 : colors.light1};
  font-family: ${fonts.fontText};
  ${forDesktop(
    css`
      font-size: 2rem;
    `
  )}
`;

// images
export const CenteredImage = styled.img`
  float: left;
  width: 50%;
  max-width: 30em;
  height: auto;
  margin: 0 2rem;
  border-radius: 10px;
`;
