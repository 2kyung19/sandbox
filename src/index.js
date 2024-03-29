import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import Theme from "./styles/Theme";
import GlobalStyles from "./styles/GlobalStyles";
import Route from "./pages";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <ThemeProvider theme={Theme}>
      <Route />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
