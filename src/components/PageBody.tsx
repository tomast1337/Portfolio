import * as React from "react";
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import { AppContext } from "../context/AppContext";

const PageBody = (props: { children: React.ReactNode }) => {
  const darkMode = React.useContext(AppContext);
  React.useEffect(() => {
    document.body.style.backgroundImage = "url('/imgs/pageBgtest.jpg')";
  }, []);
  return (
    <>
      <Container idDarkMode={darkMode}>
        <Navbar />
        {props.children}
      </Container>
    </>
  );
};

export default PageBody;
