import IconButton from "@mui/material/IconButton";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import LightModeIcon from "@mui/icons-material/LightMode";
import { SxProps } from "@mui/material";
import { useTheme } from "@/hooks/useTheme";
import { useMemo } from "react";

interface ToggleThemeModeProps {
  sx: SxProps;
}

const ToggleThemeMode = ({ sx }: ToggleThemeModeProps) => {
  const { themeMode, toggleThemeMode } = useTheme();
  console.log(themeMode);

  const isDarkMode = useMemo(() => themeMode === "dark", [themeMode]);

  return (
    <IconButton color="inherit" onClick={toggleThemeMode} sx={sx}>
      {isDarkMode ? <LightModeIcon /> : <BedtimeIcon />}
    </IconButton>
  );
};

export default ToggleThemeMode;
