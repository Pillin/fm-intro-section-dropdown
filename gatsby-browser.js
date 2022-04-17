import React from "react";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./src/theme";
import "./src/style.css";

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>{element}</ThemeProvider>
);
