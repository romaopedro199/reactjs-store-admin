import { createTheme } from "@mui/material/styles";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ff6c2f",
    },
    secondary: {
      main: "#FFF0EA",
    },
    background: {
      default: "#22282E",
      paper: "#282F36",
    },
    text: {
      primary: "#fff",
    },
    grey: {
      500: "#2C343D",
    },
    success: {
      main: "#22c55e",
      contrastText: "#274b3d",
    },
    error: {
      main: "#ee5f5f",
      contrastText: "#4c383d",
    },
    warning: {
      main: "#f9bb35",
      contrastText: "#4d4734",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
});
