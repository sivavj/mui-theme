import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { StyledEngineProvider } from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";
import { CustomThemeContextProvider } from "./components/theme-builder/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StyledEngineProvider injectFirst>
    <BrowserRouter>
      <CustomThemeContextProvider>
        <App />
      </CustomThemeContextProvider>
    </BrowserRouter>
  </StyledEngineProvider>
);
