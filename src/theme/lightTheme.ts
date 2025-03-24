import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#ff6c2f",
    },
    secondary: {
      main: "#FFF0EA",
    },
    background: {
      default: "#f9f7f7",
      paper: "#fff",
    },
    text: {
      primary: "#22282E",
    },
    grey: {
      500: "#F6F8FB",
    },
    success: {
      main: "#22c55e",
      contrastText: "#d7f5e2",
    },
    error: {
      main: "#ee5f5f",
      contrastText: "#fce2e2",
    },
    warning: {
      main: "#f9bb35",
      contrastText: "#fef2da",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
});
