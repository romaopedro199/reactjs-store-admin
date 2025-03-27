import { createSlice } from "@reduxjs/toolkit";
import { PaletteMode } from "@mui/material";

interface ThemeState {
  themeMode: PaletteMode;
}

const initialState: ThemeState = {
  themeMode: "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleThemeMode: (state) => {
      const newState = state.themeMode === "light" ? "dark" : "light";
      state.themeMode = newState;
      console.log(newState);
    },
  },
});

export const { toggleThemeMode } = themeSlice.actions;
export default themeSlice.reducer;
