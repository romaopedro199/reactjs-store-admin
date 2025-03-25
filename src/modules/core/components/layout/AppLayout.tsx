import { Box, Stack } from "@mui/material";
import { ReactNode } from "react";
import Sidebar from "@/modules/core/components/layout/Sidebar";

type AppLayoutProps = {
  children: ReactNode;
};

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <Stack
      bgcolor="background.default"
      minHeight="100vh"
      flexDirection="row"
      width="100%"
    >
      <Sidebar />
      <Box minHeight="100vh" width="100%" sx={{ overflowY: "auto" }}>
        <Box px={3}>{children}</Box>
      </Box>
    </Stack>
  );
};

export default AppLayout;
