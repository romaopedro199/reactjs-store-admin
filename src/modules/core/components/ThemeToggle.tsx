import { useTheme } from "@/hooks/useTheme";
import { Button } from "@mui/material";

const ThemeToggle = () => {
  const { mode, toggleMode } = useTheme();

  return (
    <Button onClick={toggleMode}>
      {mode === "light" ? "Dark Mode" : "Light Mode"}
    </Button>
  );
};

export default ThemeToggle;
