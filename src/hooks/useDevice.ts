import { useMediaQuery, useTheme } from "@mui/material";

export const useDevice = () => {
  const theme = useTheme();
  const downSm = useMediaQuery(theme.breakpoints.down("sm"));
  const downMd = useMediaQuery(theme.breakpoints.down("md"));
  const upLg = useMediaQuery(theme.breakpoints.up("lg"));

  return {
    downSm,
    downMd,
    upLg,
  };
};
