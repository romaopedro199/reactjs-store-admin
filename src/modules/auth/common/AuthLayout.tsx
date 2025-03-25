import Logo from "@/modules/core/components/Logo";
import { Box, Grid2, Stack, SxProps, Typography } from "@mui/material";
import { ReactNode } from "react";

const imageSx: SxProps = {
  backgroundImage: 'url("/src/assets/img/auth.jpg")',
  backgroundPosition: "center",
  backgroundSize: "cover",
  borderRadius: 4,
};

type AuthLayoutProps = {
  children: ReactNode;
};

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <Stack bgcolor="background.default">
      <Grid2 container>
        <Grid2 size={{ xs: 12, md: 7 }}>
          <Stack justifyContent="center" alignItems="center" minHeight="100vh">
            <Stack gap={2} py={{ xs: 4, md: 10 }} px={2}>
              <Logo />
              <Typography variant="h3" fontSize={24} fontWeight={600} mt={1}>
                Sign In
              </Typography>
              <Typography component="p" fontSize={14}>
                Enter your email address and password to access admin panel.
              </Typography>
              <Stack pt={2}>{children}</Stack>
            </Stack>
          </Stack>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 5 }} p={{ xs: 0, md: 2 }}>
          <Box width="100%" height="100%" sx={imageSx} />
        </Grid2>
      </Grid2>
    </Stack>
  );
};

export default AuthLayout;
