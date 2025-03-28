import { SxProps } from "@mui/material";

export const dataCardSx: Record<string, SxProps> = {
  container: {
    borderRadius: 4,
    bgcolor: "background.paper",
    overflow: "hidden",
    boxShadow: "0px 3px 4px 0px rgba(0, 0, 0, 0.03)",
  },
  body: {
    bgcolor: "background.paper",
    p: 3,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  iconBox: {
    bgcolor: "primary.100",
    p: 2,
    borderRadius: 3,
    color: "primary.main",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  footer: {
    bgcolor: "grey.500",
    px: 3,
    py: 2,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    div: {
      display: "flex",
      alignItems: "center",
    },
  },
  link: {
    color: "text.primary",
    textTransform: "none",
    fontSize: 14,
    bgcolor: "transparent",
  },
};
