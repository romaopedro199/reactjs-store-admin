import Logo from "@/modules/core/components/logo";
import { Box, Grid2, Stack } from "@mui/material";
import { ReactNode } from "react";
import { authLayoutSx } from "@/modules/auth/common/auth-layout/styles";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <Stack bgcolor="background.default">
      <Grid2 container>
        <Grid2 size={{ xs: 12, md: 7 }}>
          <Stack justifyContent="center" alignItems="center" minHeight="100vh">
            <Stack
              py={{ xs: 4, md: 10 }}
              px={2}
              width={{ xs: "auto", md: "390px" }}
            >
              <Logo />
              <Stack pt={2}>{children}</Stack>
            </Stack>
          </Stack>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 5 }} p={{ xs: 0, md: 2 }}>
          <Box width="100%" height="100%" sx={authLayoutSx.image} />
        </Grid2>
      </Grid2>
    </Stack>
  );
};

export default AuthLayout;
