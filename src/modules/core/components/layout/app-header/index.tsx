import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { AppBar, Box, IconButton, Typography, Toolbar } from "@mui/material";
import ToggleThemeMode from "@/modules/core/components/layout/toggle-theme-mode";
import NotificationsWidget from "@/modules/core/components/layout/notifications-widget";
import SettingsWidget from "@/modules/core/components/layout/settings-widget";
import { useDevice } from "@/hooks/useDevice";
import { appHeaderSx } from "@/modules/core/components/layout/app-header/styles";

interface AppHeaderProps {
  onToggle: () => void;
}

const AppHeader = ({ onToggle }: AppHeaderProps) => {
  const { upLg } = useDevice();

  return (
    <AppBar position="relative" sx={appHeaderSx.container}>
      <Toolbar sx={appHeaderSx.toolbar}>
        <Box display="flex" alignItems="center">
          <IconButton
            color="inherit"
            onClick={onToggle}
            sx={{ ...appHeaderSx.iconButton, mr: 2 }}
          >
            <MenuOpenIcon />
          </IconButton>
          {upLg && (
            <Typography
              variant="h6"
              noWrap
              component="div"
              color="text.disabled"
            >
              WELCOME!
            </Typography>
          )}
        </Box>

        <Box display="flex" alignItems="center">
          <ToggleThemeMode sx={{ ...appHeaderSx.iconButton, mr: 3 }} />
          <NotificationsWidget sx={{ ...appHeaderSx.iconButton, mr: 3 }} />
          <SettingsWidget sx={appHeaderSx.iconButton} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
