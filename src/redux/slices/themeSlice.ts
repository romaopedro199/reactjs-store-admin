import { createSlice } from "@reduxjs/toolkit";
import { PaletteMode } from "@mui/material";
import { getThemeMode } from "@/utils/getThemeMode";
import { THEME_MODE_STORAGE } from "@/constants/themeStorage";

interface ThemeState {
  themeMode: PaletteMode;
}

const initialState: ThemeState = {
  themeMode: getThemeMode(),
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleThemeMode: (state) => {
      const newState = state.themeMode === "light" ? "dark" : "light";
      state.themeMode = newState;
      localStorage.setItem(THEME_MODE_STORAGE, newState);
    },
  },
});

export const { toggleThemeMode } = themeSlice.actions;
export default themeSlice.reducer;
