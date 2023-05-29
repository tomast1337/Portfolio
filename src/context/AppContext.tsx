import * as React from "react";
import { fontUrl } from "../styles/colors";

export type AppContextType = {
  hasLoaded: boolean;
  setHasLoaded: React.Dispatch<React.SetStateAction<boolean>>;
  loadPercent: number;
  updateLoadPercent: (min: number, max: number, current: number) => void;
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
  const [loadPercent, setLoadPercent] = React.useState(0);
  React.useEffect(() => {
    console.log("hasLoaded", hasLoaded);
    if (hasLoaded) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
  }, [hasLoaded]);

  const updateLoadPercent = (min: number, max: number, current: number) => {
    const percent = (current - min) / (max - min);
    setLoadPercent(percent);
  };
  React.useEffect(() => {
    if (loadPercent >= 1) {
      setHasLoaded(true);
    }
  }, [loadPercent]);

  return (
    <AppContext.Provider
      value={{
        hasLoaded,
        setHasLoaded,
        loadPercent,
        updateLoadPercent,
      }}
    >
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href={fontUrl} rel="stylesheet" />
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider };
