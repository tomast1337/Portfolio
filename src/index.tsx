import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import { AppProvider } from "./context/AppContext";

ReactDOM.render(
  <AppProvider>
    <App />
  </AppProvider>,
  document.getElementById("root")
);
