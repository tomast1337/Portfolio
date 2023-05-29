import * as React from "react";
import { fontUrl } from "../styles/colors";

export type AppContextType = {
  hasLoaded: boolean;
  setHasLoaded: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AppContext = React.createContext<AppContextType>(
  {} as AppContextType
);

export const useAppContext = () => {
  const context = React.useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }

  return context;
};

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [hasLoaded, setHasLoaded] = React.useState(false);
  React.useEffect(() => {
    console.log("hasLoaded", hasLoaded);
    if (hasLoaded) {
        document.body.style.overflow = "auto";
    } else {
        document.body.style.overflow = "hidden";
    }
    }, [hasLoaded]);
  
  return (
    <AppContext.Provider
      value={{
        hasLoaded,
        setHasLoaded,
      }}
    >
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href={fontUrl} rel="stylesheet" />
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider };
