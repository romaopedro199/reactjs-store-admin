import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#ff6c2f",
      100: "#fae9e3",
    },
    secondary: {
      main: "#22282E",
      100: "#eef2f7",
    },
    background: {
      default: "#f9f7f7",
      paper: "#fff",
    },
    text: {
      primary: "#22282E",
      secondary: "#FFFFFF",
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
    fontFamily: "Segoe UI, sans-serif",
    allVariants: {
      color: "#22282E",
    },
  },
});
