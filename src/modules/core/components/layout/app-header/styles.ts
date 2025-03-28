import { SxProps } from "@mui/material";

export const appHeaderSx: Record<string, SxProps> = {
  container: {
    boxShadow: "none",
    bgcolor: "background.default",
    backgroundImage: "none",
    py: 2,
    "> div": {
      px: 0,
    },
  },
  toolbar: {
    alignItems: "center",
    justifyContent: "space-between",
  },
  iconButton: {
    svg: {
      color: "text.disabled",
      fontSize: 24,
      transition: "color 0.15s ease-in-out",
    },
    "&:hover": {
      svg: { color: "primary.main" },
    },
  }
};
