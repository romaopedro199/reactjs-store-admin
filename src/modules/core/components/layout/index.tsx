import { Box, Stack } from "@mui/material";
import { ReactNode, useState } from "react";
import AppSidebar from "@/modules/core/components/layout/app-sidebar";
import AppHeader from "@/modules/core/components/layout/app-header";

type AppLayoutProps = {
  children: ReactNode;
};

const AppLayout = ({ children }: AppLayoutProps) => {
  const [openSidebar, setOpenSidebar] = useState(false);

  const handleToggleSidebar = () => setOpenSidebar(!openSidebar);

  return (
    <Stack
      bgcolor="background.default"
      minHeight="100vh"
      flexDirection="row"
      width="100%"
    >
      <AppSidebar open={openSidebar} onToggle={handleToggleSidebar} />
      <Box width="100%" px={{ xs: 2, lg: 5 }}>
        <AppHeader onToggle={handleToggleSidebar} />

        <Box>{children}</Box>
      </Box>
    </Stack>
  );
};

export default AppLayout;
