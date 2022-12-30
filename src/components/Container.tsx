import styled, { css } from "styled-components";
import { colors, forDesktop } from "../styles/colors";

const Container = styled.div`
  background-color: rgba(
    ${(props: any) => (props.theme.isDarkMode ? colors.dark1 : colors.light1)},
    0.5
  );
  backdrop-filter: blur(5px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);

  width: 90vw;
  min-height: 90vh;
  height: fit-content;

  margin: 5vh;

  border: 5px solid
    ${(props: any) => (props.theme.isDarkMode ? colors.dark1 : colors.light1)};
  outline: 5px solid
    ${(props: any) => (props.theme.isDarkMode ? colors.dark1 : colors.light1)};

  border-radius: 50px;

  box-shadow: 0 0 20px
    ${(props: any) => (props.theme.isDarkMode ? colors.dark1 : colors.light1)};

  transition: all 0.3s ease-in-out;
  animation: fadeIn 2s;

  ${forDesktop(
    css`
      width: 960px;
    `
  )}
`;

export default Container;
