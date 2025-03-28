import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import { RootState } from "@/redux/store";
import { lightTheme } from "@/themes/light-theme";
import { darkTheme } from "@/themes/dark-theme";

export const ThemeContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const themeMode = useSelector((state: RootState) => state.theme.themeMode);

  const theme = useMemo(
    () => (themeMode === "light" ? lightTheme : darkTheme),
    [themeMode]
  );

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
