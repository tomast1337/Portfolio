import * as React from "react";

type AppContextType = {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
};

const AppContext = React.createContext({} as AppContextType);

const AppProvider = (props: { children: React.ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <AppContext.Provider value={{ isDarkMode: isDarkMode, toggleDarkMode }}>
      {props.children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
