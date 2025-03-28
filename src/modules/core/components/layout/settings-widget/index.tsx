import SettingsIcon from "@mui/icons-material/Settings";
import { SxProps, IconButton } from "@mui/material";

interface SettingsWidgetProps {
  sx: SxProps;
}

const SettingsWidget = ({ sx }: SettingsWidgetProps) => {
  return (
    <IconButton color="inherit" sx={sx}>
      <SettingsIcon />
    </IconButton>
  );
};

export default SettingsWidget;
