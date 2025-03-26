import React, { useMemo } from "react";
import { styled, Theme, CSSObject } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
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
import DescriptionIcon from "@mui/icons-material/Description";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import BadgeIcon from "@mui/icons-material/Badge";
import TopicIcon from "@mui/icons-material/Topic";
import ContactsIcon from "@mui/icons-material/Contacts";
import WorkIcon from "@mui/icons-material/Work";
import SubtitlesIcon from "@mui/icons-material/Subtitles";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import MessageIcon from "@mui/icons-material/Message";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import SosIcon from "@mui/icons-material/Sos";
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
  padding: theme.spacing(3, 0.5),
  justifyContent: "space-between",
  ...theme.mixins.toolbar,
}));

interface AppSidebarItemProps {
  item: MenuItem;
  open: boolean;
  isActive: boolean;
}

const AppSidebarItem: React.FC<AppSidebarItemProps> = ({
  item,
  open,
  isActive,
}) => {
  return (
    <ListItem
      key={item.slug}
      disablePadding
      sx={{
        display: "block",
        borderLeft: "3px solid",
        borderLeftColor: isActive ? "primary.main" : "transparent",
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

interface AppSidebarProps {
  open: boolean;
}

const AppSidebar = ({ open }: AppSidebarProps) => {
  const menuList: MenuItem[] = useMemo(
    () => [
      { label: "Dashboard", slug: "dashboard", icon: <DashboardIcon /> },
      { label: "Products", slug: "products", icon: <BeachAccessIcon /> },
      { label: "Category", slug: "category", icon: <BallotIcon /> },
      { label: "Inventory", slug: "inventory", icon: <InventoryIcon /> },
      { label: "Orders", slug: "orders", icon: <ShoppingBagIcon /> },
      { label: "Purchases", slug: "purchases", icon: <CreditCardIcon /> },
      { label: "Invoices", slug: "invoices", icon: <DescriptionIcon /> },
      { label: "Profile", slug: "profile", icon: <PersonPinIcon /> },
      { label: "Roles", slug: "roles", icon: <BadgeIcon /> },
      { label: "Permissions", slug: "permissions", icon: <TopicIcon /> },
      { label: "Customers", slug: "customers", icon: <ContactsIcon /> },
      { label: "Sellers", slug: "sellers", icon: <WorkIcon /> },
      { label: "Coupons", slug: "coupons", icon: <SubtitlesIcon /> },
      { label: "Reviews", slug: "reviews", icon: <AutoGraphIcon /> },
      { label: "Chat", slug: "chat", icon: <MessageIcon /> },
      { label: "Email", slug: "email", icon: <MarkunreadIcon /> },
      { label: "Help Center", slug: "help-center", icon: <SosIcon /> },
      { label: "Settings", slug: "settings", icon: <SettingsSuggestIcon /> },
    ],
    []
  );

  return (
    <Drawer variant="permanent" open={open}>
      <StyledDrawerHeader>
        <Logo height={35} variant="light" compact={!open} />
      </StyledDrawerHeader>

      <List
        sx={{
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
        }}
      >
        {menuList.map((item) => (
          <AppSidebarItem
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

export default AppSidebar;
