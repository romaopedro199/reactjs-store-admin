import React, { useState, useMemo } from "react";
import { styled, Theme, CSSObject } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import BallotIcon from "@mui/icons-material/Ballot";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import DashboardIcon from "@mui/icons-material/Dashboard";
import InventoryIcon from "@mui/icons-material/Inventory";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import Logo from "@/modules/core/components/Logo";

interface MenuItem {
  label: string;
  slug: string;
  icon: React.ReactNode;
}

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

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open ? openedMixin(theme) : closedMixin(theme)),
  "& .MuiDrawer-paper": {
    ...(open ? openedMixin(theme) : closedMixin(theme)),
    backgroundColor: theme.palette.secondary.main,
  },
}));

const StyledDrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(3, 1),
  ...theme.mixins.toolbar,
}));

interface SidebarItemProps {
  item: MenuItem;
  open: boolean;
  isActive: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ item, open, isActive }) => {
  return (
    <ListItem
      key={item.slug}
      disablePadding
      sx={{
        opacity: isActive ? 1 : 0.5,
        display: "block",
        borderLeft: `3px solid ${isActive ? "primary.main" : "transparent"}`,
        ".MuiListItemText-primary": {
          color: isActive ? "text.secondary" : "text.disabled",
          transition: "all .15s ease-in-out",
          fontSize: 14,
        },
        svg: {
          color: isActive ? "primary.main" : "text.disabled",
          transition: "all .15s ease-in-out",
          fontSize: 18,
        },
        "&:hover": {
          ".MuiListItemText-primary": {
            color: "text.secondary",
          },
          svg: {
            color: isActive ? "primary.main" : "text.secondary",
          },
        },
      }}
    >
      <ListItemButton
        sx={{
          minHeight: 48,
          px: 2.5,
          justifyContent: open ? "initial" : "center",
        }}
      >
        <ListItemIcon
          sx={{
            minWidth: 0,
            justifyContent: "center",
            mr: open ? 1.5 : "auto",
          }}
        >
          {item.icon}
        </ListItemIcon>
        <ListItemText primary={item.label} sx={{ opacity: open ? 1 : 0 }} />
      </ListItemButton>
    </ListItem>
  );
};

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const menuList: MenuItem[] = useMemo(
    () => [
      { label: "Dashboard", slug: "dashboard", icon: <DashboardIcon /> },
      { label: "Products", slug: "products", icon: <BeachAccessIcon /> },
      { label: "Category", slug: "category", icon: <BallotIcon /> },
      { label: "Inventory", slug: "inventory", icon: <InventoryIcon /> },
      { label: "Orders", slug: "orders", icon: <ShoppingBagIcon /> },
      { label: "Settings", slug: "settings", icon: <SettingsSuggestIcon /> },
    ],
    []
  );

  const handleToggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Drawer variant="permanent" open={open}>
      <StyledDrawerHeader
        sx={{ justifyContent: open ? "space-between" : "flex-end" }}
      >
        {open && <Logo height={35} variant="light" />}
        <IconButton
          onClick={handleToggleDrawer}
          sx={{ svg: { color: "text.disabled" } }}
        >
          {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </StyledDrawerHeader>

      <List>
        {menuList.map((item) => (
          <SidebarItem
            key={item.slug}
            item={item}
            open={open}
            isActive={item.slug === "dashboard"}
          />
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
