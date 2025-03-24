import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import { RootState } from "@/redux/store";
import { lightTheme } from "@/theme/lightTheme";
import { darkTheme } from "@/theme/darkTheme";

export const ThemeContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const mode = useSelector((state: RootState) => state.theme.mode);

  const theme = useMemo(
    () => (mode === "light" ? lightTheme : darkTheme),
    [mode]
  );

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
