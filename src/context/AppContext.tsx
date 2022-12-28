import * as React from "react";
import { ThemeProvider } from "styled-components";

export type AppThemeContextType = {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

const AppProvider = (props: { children: React.ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  return (
    <ThemeProvider theme={{ isDarkMode, setIsDarkMode } as AppThemeContextType}>
      {props.children}
    </ThemeProvider>
  );
};

export { AppProvider };
