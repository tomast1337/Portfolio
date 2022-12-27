import styled, { css } from "styled-components";
import { colors, forDesktop } from "../styles/colors";

type ContainerProps = {
  isDarkMode: boolean;
};

const Container = styled.div`
  background-color: rgba(
    ${(props: ContainerProps) =>
      props.isDarkMode ? colors.dark1 : colors.light1},
    0.2
  );
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);

  width: 90vw;
  height: fit-content;
  margin: auto auto;
  padding: 1em;
  min-height: 90vh;

  border: 5px solid
    ${(props: ContainerProps) =>
      props.isDarkMode ? colors.dark1 : colors.light1};
  outline: 5px solid
    ${(props: ContainerProps) =>
      props.isDarkMode ? colors.dark1 : colors.light1};

  border-radius: 50px;

  box-shadow: 0 0 20px
    ${(props: ContainerProps) =>
      props.isDarkMode ? colors.dark1 : colors.light1};

  transition: all 0.3s ease-in-out;
  animation: fadeIn 2s;

  ${forDesktop(
    css`
      width: 960px;
    `
  )}
`;

export default Container;
