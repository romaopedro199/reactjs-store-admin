import { Box, Stack } from "@mui/material";
import { ReactNode, useState } from "react";
import Sidebar from "@/modules/core/components/layout/Sidebar";
import Header from "@/modules/core/components/layout/Header";

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
      <Sidebar open={openSidebar} />
      <Box width="100%" px={5}>
        <Header onToggle={handleToggleSidebar} />

        <Box>{children}</Box>
      </Box>
    </Stack>
  );
};

export default AppLayout;
