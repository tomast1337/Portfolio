import * as React from "react";
import Container from "../components/Container";
import Navbar from "../components/Navbar";

const PageBody = (props: { children: React.ReactNode }) => {
  React.useEffect(() => {
    document.body.style.backgroundImage = "url('/imgs/pageBgtest.jpg')";
  }, []);
  return (
    <>
      <Container>
        <Navbar />
        {props.children}
      </Container>
    </>
  );
};

export default PageBody;
