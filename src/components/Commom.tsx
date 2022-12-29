import styled, { css } from "styled-components";
import { colors, fonts, forDesktop } from "../styles/colors";

type CommonProps = {
  isDarkMode: boolean;
};

type HeaderProps = CommonProps & {
  float?: string;
};

type PageProps = CommonProps & {
  display?: "flexColumn" | "flexRow" | "flexColumnReverse" | undefined;
};

const pageDisplays = {
  flexColumn: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,
  flexRow: css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  `,
  flexColumnReverse: css`
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
  `,
  normal: css`
    display: block;
  `,
};

export const Page = styled.div`
  ${(props: PageProps) => {
    if (props.display) {
      return pageDisplays[props.display];
    }
    return pageDisplays.normal;
  }}
`;

export const Header = styled.h1`
  font-size: 3rem;
  text-align: ${(props: any) => props.float || "center"};
  color: ${(props: any) =>
    props.theme.isDarkMode ? colors.dark1 : colors.light1};
  font-family: ${fonts.fontTitle};
`;

export const SubHeader = styled.h2`
  font-size: 2em;
  text-align: ${(props: any) => props.float || "center"};
  font-weight: bold;
  text-decoration: underline;
  padding-left: 1em;
  color: ${(props: any) =>
    props.theme.isDarkMode ? colors.dark1 : colors.light1};
  font-family: ${fonts.fontText};
`;

export const SubSubHeader = styled.h3`
  font-size: 1.5em;
  text-align: ${(props: any) => props.float || "center"};
  font-weight: bold;
  text-decoration: underline;
  padding-left: 1em;
  color: ${(props: any) =>
    props.theme.isDarkMode ? colors.dark1 : colors.light1};
  font-family: ${fonts.fontText};
`;

export const Paragraph = styled.p`
  font-size: .9em;
  text-align: justify;
  text-justify: inter-word;
  padding-left: 1em;
  padding-right: 1em;
  color: ${(props: CommonProps) =>
    props.theme.isDarkMode ? colors.dark1 : colors.light1};
  font-family: ${fonts.fontText};
  ${forDesktop(
    css`
      font-size: 1rem;
    `
  )}

  a {
    color: ${(props: any) =>
      props.theme.isDarkMode ? colors.dark1 : colors.light1};
    text-decoration: underline;
    font-weight: bold;
  }

  span {
    color: ${(props: any) =>
      props.theme.isDarkMode ? colors.dark3 : colors.light3};
    font-weight: 500;
  }
`;

// images
export const CenteredImage = styled.img`
  float: left;
  width: 30%;
  max-width: 30em;
  height: auto;
  margin: 0 2rem;
  border-radius: 10px;
`;

type UnOrderedListProps = CommonProps & {
  fontSize?: string;
};

export const UnOrderedList = styled.ul`
  // no decoration
  list-style-type: none;

  li {
    font-size: ${(props: UnOrderedListProps) => props.fontSize || "2em"};
    padding-left: 10%;
    padding-right: 1.5em;
    color: ${(props: any) =>
      props.theme.isDarkMode ? colors.dark1 : colors.light1};

    font-family: ${fonts.fontText};
    ${forDesktop(
      css`
        font-size: 1.5rem;
      `
    )}
  }
`;

export const Ruler = styled.hr`
  border-top: .5px solid
    ${(props: any) => (props.theme.isDarkMode ? colors.dark1 : colors.light1)};
  box-shadow: 1px 1px 1px 1px
    ${(props: any) => (props.theme.isDarkMode ? colors.dark1 : colors.light1)};
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
  background-color: ${(props: any) =>
    props.theme.isDarkMode ? colors.light1 : colors.dark1};
  border-radius: 10px;
  border: 5px solid
    ${(props: any) => (props.theme.isDarkMode ? colors.dark1 : colors.light1)};
  outline: 5px solid
    ${(props: any) => (props.theme.isDarkMode ? colors.light1 : colors.dark1)};
  box-shadow: 2px 2px 4px 2px
    ${(props: any) => (props.theme.isDarkMode ? colors.light1 : colors.dark1)};
  min-width: 300px;
  color: ${(props: any) =>
    props.theme.isDarkMode ? colors.dark1 : colors.light1};
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
