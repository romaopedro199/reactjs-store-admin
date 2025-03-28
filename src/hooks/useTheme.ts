import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";
import { toggleThemeMode } from "@/redux/slices/theme-slice";

export const useTheme = () => {
  const themeMode = useSelector((state: RootState) => state.theme.themeMode);
  const dispatch = useDispatch<AppDispatch>();

  return {
    themeMode,
    toggleThemeMode: () => dispatch(toggleThemeMode()),
  };
};
