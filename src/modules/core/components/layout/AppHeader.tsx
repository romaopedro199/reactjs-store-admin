import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import {
  AppBar,
  Box,
  SxProps,
  IconButton,
  Typography,
  Toolbar,
} from "@mui/material";
import ToggleThemeMode from "@/modules/core/components/layout/ToggleThemeMode";
import NotificationsWidget from "@/modules/core/components/layout/NotificationsWidget";
import SettingsWidget from "@/modules/core/components/layout/SettingsWidget";

interface AppHeaderProps {
  onToggle: () => void;
}

const appbarSx: SxProps = {
  boxShadow: "none",
  bgcolor: "background.default",
  backgroundImage: "none",
  py: 2,
  "> div": {
    px: 0,
  },
};

const toolbarSx: SxProps = {
  alignItems: "center",
  justifyContent: "space-between",
};

const flexDivSx: SxProps = {
  display: "flex",
  alignItems: "center",
};

const iconButtonSx: SxProps = {
  svg: {
    color: "text.disabled",
    fontSize: 24,
    transition: "color 0.15s ease-in-out",
  },
  "&:hover": {
    svg: { color: "primary.main" },
  },
};

const AppHeader = ({ onToggle }: AppHeaderProps) => {
  return (
    <AppBar position="relative" sx={appbarSx}>
      <Toolbar sx={toolbarSx}>
        <Box sx={flexDivSx}>
          <IconButton
            color="inherit"
            onClick={onToggle}
            edge="start"
            sx={{ ...iconButtonSx, mr: 2 }}
          >
            <MenuOpenIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" color="text.disabled">
            WELCOME!
          </Typography>
        </Box>

        <Box sx={flexDivSx}>
          <ToggleThemeMode sx={{ ...iconButtonSx, mr: 3 }} />
          <NotificationsWidget sx={{ ...iconButtonSx, mr: 3 }} />
          <SettingsWidget sx={iconButtonSx} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
