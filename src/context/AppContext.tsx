import * as React from "react";
import { ThemeProvider } from "styled-components";
import { fontUrl } from "../styles/colors";

export type AppThemeContextType = {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

const AppProvider = (props: { children: React.ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  return (
    <ThemeProvider theme={{ isDarkMode, setIsDarkMode } as AppThemeContextType}>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href={fontUrl} rel="stylesheet" />
      {props.children}
    </ThemeProvider>
  );
};

export { AppProvider };
