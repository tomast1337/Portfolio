import * as React from "react";
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import { ThemeContext } from "styled-components";
import styled, { css } from "styled-components";
import CanvasBG from "./CanvasBG";

const CentreOuterCSS = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;

const PageBody = (props: { children: React.ReactNode }) => {
  return (
    <>
      <CanvasBG />
      <CentreOuterCSS>
      <Navbar />
          {props.children}
      </CentreOuterCSS>
    </>
  );
};

export default PageBody;
