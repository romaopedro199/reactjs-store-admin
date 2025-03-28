import { createTheme } from "@mui/material/styles";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ff6c2f",
      100: "#5e3e34",
    },
    secondary: {
      main: "#262d34",
      100: "#eef2f7",
    },
    background: {
      default: "#22282E",
      paper: "#282F36",
    },
    text: {
      primary: "#aab8c5",
      secondary: "#ffffff",
      disabled: "#707793",
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
    fontFamily: "Segoe UI, sans-serif",
    allVariants: {
      color: "#aab8c5",
    },
  },
});
