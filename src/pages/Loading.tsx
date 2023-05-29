import * as React from "react";
import styled from "styled-components";
import { useAppContext } from "../context/AppContext";
import { Header } from "../components/Commom";

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

export const Loading = () => {
  const { hasLoaded } = useAppContext();
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
        display: hasLoaded ? "none" : "block",
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
        Loading...
      </h1>
      <LoadingAnimation />
      <img
        src="./imgs/textures/texture1.gif"
        alt="logo"
        style={{
          width: "50%",
          height: "auto",
          aspectRatio: "1/1",
          margin: "0 auto",
          display: "block",
          position: "relative",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      />
    </div>
  );
};
