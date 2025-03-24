import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import { toggleMode } from "../redux/themeSlice";

export const useTheme = () => {
  const mode = useSelector((state: RootState) => state.theme.mode);
  const dispatch = useDispatch<AppDispatch>();

  return {
    mode,
    toggleMode: () => dispatch(toggleMode()),
  };
};
