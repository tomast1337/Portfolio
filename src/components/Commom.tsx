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
  font-size: 3.5rem;
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
  font-size: 2em;
  text-align: justify;
  text-justify: inter-word;
  padding-left: 1em;
  padding-right: 1em;
  color: ${(props: CommonProps) =>
    props.theme.isDarkMode ? colors.dark1 : colors.light1};
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

type UnOrderedListProps = CommonProps & {
  fontSize?: string;
};

export const UnOrderedList = styled.ul`
  // no decoration
  list-style-type: none;

  li {
    font-size: ${(props: UnOrderedListProps) => props.fontSize || "2em"};
    padding-left: 10%;
    padding-right: 2em;
    color: ${(props: UnOrderedListProps) =>
      props.theme.isDarkMode ? colors.dark1 : colors.light1};

    font-family: ${fonts.fontText};
    ${forDesktop(
      css`
        font-size: 2rem;
      `
    )}
  }
`;

export const Ruler = styled.hr`
  border: 1px solid
    ${(props: CommonProps) =>
      props.theme.isDarkMode ? colors.dark1 : colors.light1};
  margin: 1em 0;
`;
