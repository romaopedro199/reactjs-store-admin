import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "@/redux/slices/theme-slice";

const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
