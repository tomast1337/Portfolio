import * as React from "react";
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import { ThemeContext } from "styled-components";

const PageBody = (props: { children: React.ReactNode }) => {
  const { isDarkMode } = React.useContext(ThemeContext) as AppThemeContextType;
  React.useEffect(() => {
    if (isDarkMode) {
      document.body.style.backgroundImage = "url('/imgs/WhiteBG.jpg')";
    } else {
      document.body.style.backgroundImage = "url('/imgs/BlackBG.jpg')";
    }
  }, [isDarkMode]);
  document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
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
