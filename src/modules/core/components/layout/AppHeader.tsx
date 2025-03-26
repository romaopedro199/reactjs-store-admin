import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { AppBar, SxProps } from "@mui/material";

interface AppHeaderProps {
  onToggle: () => void;
}

const appbarSx: SxProps = {
  boxShadow: "none",
  bgcolor: "background.default",
  py: 2,
  "> div": {
    px: 0,
  },
};

const iconButtonSx: SxProps = { mr: 2, svg: { color: "text.disabled" } };

const AppHeader = ({ onToggle }: AppHeaderProps) => {
  return (
    <AppBar position="relative" sx={appbarSx}>
      <Toolbar>
        <IconButton
          color="inherit"
          onClick={onToggle}
          edge="start"
          sx={iconButtonSx}
        >
          <MenuOpenIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div" color="text.disabled">
          WELCOME!
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
