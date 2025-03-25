import AuthLayout from "@/modules/auth/common/AuthLayout";
import { Controller } from "react-hook-form";
import { Box, InputLabel, Stack, Typography } from "@mui/material";
import useSignIn from "@/hooks/useSignIn";
import ButtonHover from "../core/components/ButtonHover";
import Input from "../core/components/form/Input";
import { Link } from "react-router-dom";

const SignIn = () => {
  const { handleSubmit, control, signIn, errors } = useSignIn();

  return (
    <AuthLayout>
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
          Don't have an account?{" "}
          <Typography
            component="p"
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
            <Link to="/signup">Sign up</Link>
          </Typography>
        </Typography>
      </Box>
    </AuthLayout>
  );
};

export default SignIn;
