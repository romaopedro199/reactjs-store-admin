import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import { RootState } from "@/redux/store";
import { lightTheme } from "@/themes/lightTheme";
import { darkTheme } from "@/themes/darkTheme";

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
