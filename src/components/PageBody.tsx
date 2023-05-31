import * as React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";

//import CanvasBG from "./CanvasBG";
const CanvasBG = React.lazy(() => import("./CanvasBG"));

const CentreOuterCSS = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PageBody = (props: { children: React.ReactNode }) => {
  return (
    <>
      <React.Suspense fallback={<div></div>}>
        <CanvasBG />
      </React.Suspense>
      <CentreOuterCSS>
        <Navbar />
        {props.children}
      </CentreOuterCSS>
    </>
  );
};

export default PageBody;
