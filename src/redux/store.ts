import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "@/redux/themeSlice"; // Importe o reducer do tema

const store = configureStore({
  reducer: {
    theme: themeReducer, // Adicione o reducer do tema
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
