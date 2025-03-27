import NotificationsIcon from "@mui/icons-material/Notifications";
import { SxProps, IconButton } from "@mui/material";

interface NotificationsWidgetProps {
  sx: SxProps;
}

const NotificationsWidget = ({ sx }: NotificationsWidgetProps) => {
  return (
    <IconButton color="inherit" edge="start" sx={sx}>
      <NotificationsIcon />
    </IconButton>
  );
};

export default NotificationsWidget;
