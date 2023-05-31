import * as React from "react";
import styled from "styled-components";
import { useAppContext } from "../context/AppContext";
const LoadingAnimation = styled.div`
  width: 50px;
  height: auto;
  aspect-ratio: 1/1;
  border-radius: 50%;
  border: 5px solid #ccc;
  border-top-color: #45b3e0;
  animation: spin 1s infinite linear;
  margin: 0 auto;
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const Loading = () => {
  const { hasLoaded, loadPercent } = useAppContext();
  React.useEffect(() => {
    // scroll to top
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      style={{
        textAlign: "center",
        width: "100vw",
        height: "100vh",
        display: hasLoaded ? "none" : "flex",
        flexDirection: "column",
        justifyContent: "center",
        background: "#000",
        alignItems: "center",
        margin: "0 0",
        padding: "0 0",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 9999,
      }}
    >
      <h1
        style={{
          color: "#fff",
          fontSize: "1.5rem",
          fontWeight: 400,
          margin: "0 0 1rem 0",
          padding: "0 0",
          position: "relative",
          marginTop: "1rem",
        }}
      >
        Loading... {Math.round(loadPercent * 100)}%
      </h1>
      <LoadingAnimation />
    </div>
  );
};

export default Loading;