import { CSSObject, SxProps, Theme } from "@mui/material";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

interface appSidebarSxProps {
  theme: Theme;
  open: boolean;
}

export const appSidebarSx = ({ theme, open }: appSidebarSxProps) => {
  return {
    container: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: "nowrap",
      boxSizing: "border-box",
      ...(open ? openedMixin(theme) : closedMixin(theme)),
      "& .MuiDrawer-paper": {
        ...(open ? openedMixin(theme) : closedMixin(theme)),
        backgroundColor: theme.palette.secondary.main,
      },
    } as SxProps,
    header: {
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(3, 0.5),
      justifyContent: "space-between",
      ...theme.mixins.toolbar,
    } as SxProps,
    list: {
      overflowY: "auto",
      overflowX: "hidden",
      "&::-webkit-scrollbar": {
        width: 4,
      },
      "&::-webkit-scrollbar-track": {
        background: "secondary.main",
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "text.disabled",
        borderRadius: 2,
      },
    },
  };
};

interface appSidebarListItemSxProps {
  borderLeftColor: string;
  textColor: string;
  svgColor: string;
  svgColorHover: string;
  open: boolean;
}

export const appSidebarListItemSx = ({
  borderLeftColor,
  textColor,
  svgColor,
  svgColorHover,
  open,
}: appSidebarListItemSxProps) => {
  return {
    container: {
      display: "block",
      borderLeft: "3px solid",
      borderLeftColor,
      ".MuiListItemText-primary": {
        color: textColor,
        transition: "all .15s ease-in-out",
        fontSize: 14,
      },
      svg: {
        color: svgColor,
        transition: "all .15s ease-in-out",
        fontSize: 18,
      },
      "&:hover": {
        ".MuiListItemText-primary": {
          color: "text.secondary",
        },
        svg: {
          color: svgColorHover,
        },
      },
    } as SxProps,
    button: {
      minHeight: 48,
      px: 2.5,
      justifyContent: open ? "initial" : "center",
    },
    buttonIcon: {
      minWidth: 0,
      justifyContent: "center",
      mr: open ? 1.5 : "auto",
    },
    buttonText: { opacity: open ? 1 : 0 },
  };
};
