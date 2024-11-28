"use client";

import React from "react";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import theme from "@/styles/theme";

export interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};

export default ThemeProvider;
