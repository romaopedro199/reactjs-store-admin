import { THEME_MODE_STORAGE } from "@/constants/theme-storage";
import { PaletteMode } from "@mui/material";

export const getThemeMode = (): PaletteMode => {
  const storedMode = localStorage.getItem(THEME_MODE_STORAGE);
  return storedMode === "dark" ? "dark" : "light";
};
