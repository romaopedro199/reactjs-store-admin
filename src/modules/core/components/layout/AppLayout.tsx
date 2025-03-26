import { Box, Stack } from "@mui/material";
import { ReactNode, useState } from "react";
import AppSidebar from "@/modules/core/components/layout/AppSidebar";
import AppHeader from "@/modules/core/components/layout/AppHeader";

type AppLayoutProps = {
  children: ReactNode;
};

const AppLayout = ({ children }: AppLayoutProps) => {
  const [openSidebar, setOpenSidebar] = useState(true);

  const handleToggleSidebar = () => setOpenSidebar(!openSidebar);

  return (
    <Stack
      bgcolor="background.default"
      minHeight="100vh"
      flexDirection="row"
      width="100%"
    >
      <AppSidebar open={openSidebar} />
      <Box width="100%" px={5}>
        <AppHeader onToggle={handleToggleSidebar} />

        <Box>{children}</Box>
      </Box>
    </Stack>
  );
};

export default AppLayout;
