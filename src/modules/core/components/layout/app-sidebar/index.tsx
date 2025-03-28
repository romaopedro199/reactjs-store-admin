import React, { useMemo } from "react";
import {
  Drawer,
  ListItem,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
  Box,
} from "@mui/material";
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
import Logo from "@/modules/core/components/logo";
import { useDevice } from "@/hooks/useDevice";
import {
  appSidebarListItemSx,
  appSidebarSx,
} from "@/modules/core/components/layout/app-sidebar/styles";

interface MenuItem {
  label: string;
  slug: string;
  icon: React.ReactNode;
}

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
  const componentSx = appSidebarListItemSx({
    borderLeftColor: isActive ? "primary.main" : "transparent",
    textColor: isActive ? "text.secondary" : "text.disabled",
    svgColor: isActive ? "primary.main" : "text.disabled",
    svgColorHover: isActive ? "primary.main" : "text.secondary",
    open,
  });

  return (
    <ListItem key={item.slug} disablePadding sx={componentSx.container}>
      <ListItemButton sx={componentSx.button}>
        <ListItemIcon sx={componentSx.buttonIcon}>{item.icon}</ListItemIcon>
        <ListItemText primary={item.label} sx={componentSx.buttonText} />
      </ListItemButton>
    </ListItem>
  );
};

interface AppSidebarProps {
  open: boolean;
  onToggle: () => void;
}

const AppSidebar = ({ open, onToggle }: AppSidebarProps) => {
  const theme = useTheme();
  const { upLg } = useDevice();

  const componentSx = appSidebarSx({
    theme,
    open,
  });

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
    <Drawer
      variant={upLg ? "permanent" : "temporary"}
      open={open}
      onClose={onToggle}
      sx={componentSx.container}
    >
      <Box sx={componentSx.header}>
        <Logo height={35} variant="light" compact={!open} />
      </Box>

      <List sx={componentSx.list}>
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
