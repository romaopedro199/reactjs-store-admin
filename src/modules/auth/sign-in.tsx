import AuthLayout from "@/modules/auth/common/auth-layout";
import { Controller } from "react-hook-form";
import { Box, InputLabel, Stack, Typography } from "@mui/material";
import useSignIn from "@/hooks/useSignIn";
import ButtonHover from "@/modules/core/components/button-hover";
import Input from "@/modules/core/components/form/input";
import { Link } from "react-router-dom";

const SignIn = () => {
  const { handleSubmit, control, signIn, errors } = useSignIn();

  return (
    <AuthLayout>
      <Stack gap={2} pt={2} pb={5}>
        <Typography variant="h3" fontSize={24} fontWeight={600}>
          Sign In
        </Typography>
        <Typography component="p" fontSize={14}>
          Enter your email address and password to access admin panel.
        </Typography>
      </Stack>
      <Box
        component="form"
        onSubmit={handleSubmit(signIn)}
        gap={2}
        display="flex"
        flexDirection="column"
      >
        <Stack>
          <InputLabel shrink htmlFor="email">
            Email
          </InputLabel>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                autoFocus
                id="email"
                error={!!errors.email}
                errorMessage={errors.email?.message}
              />
            )}
          />
        </Stack>
        <Stack>
          <InputLabel shrink htmlFor="password">
            Password
          </InputLabel>
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                id="password"
                error={!!errors.password}
                errorMessage={errors.password?.message}
              />
            )}
          />
        </Stack>
        <ButtonHover type="submit" fullWidth variant="primary">
          Sign In
        </ButtonHover>

        <Typography
          component="p"
          color="primary.main"
          textAlign="center"
          fontSize={14}
          display="flex"
          justifyContent="center"
          alignItems="center"
          mt={3}
        >
          Don't have an account?
          <Typography
            component="span"
            ml={0.5}
            sx={{
              a: {
                color: "secondary.main",
                textDecoration: "none",
                fontWeight: 700,
                fontSize: 14,
              },
            }}
          >
            <Link to="/signup">Sign Up</Link>
          </Typography>
        </Typography>
      </Box>
    </AuthLayout>
  );
};

export default SignIn;
