import AuthLayout from "@/modules/auth/common/AuthLayout";
import { Controller } from "react-hook-form";
import { Box, InputLabel, Stack, Typography } from "@mui/material";
import useSignUp from "@/hooks/useSignUp";
import ButtonHover from "@/modules/core/components/ButtonHover";
import Input from "@/modules/core/components/form/Input";
import { Link } from "react-router-dom";

const SignUp = () => {
  const { handleSubmit, control, signUp, errors } = useSignUp();

  return (
    <AuthLayout>
      <Stack gap={2} pt={2} pb={5}>
        <Typography variant="h3" fontSize={24} fontWeight={600}>
          Sign Up
        </Typography>
        <Typography component="p" fontSize={14}>
          New to our platform? Sign up now! It only takes a minute.
        </Typography>
      </Stack>
      <Box
        component="form"
        onSubmit={handleSubmit(signUp)}
        gap={2}
        display="flex"
        flexDirection="column"
      >
        <Stack>
          <InputLabel shrink htmlFor="name">
            Name
          </InputLabel>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                autoFocus
                id="name"
                error={!!errors.name}
                errorMessage={errors.name?.message}
              />
            )}
          />
        </Stack>
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
          Sign Up
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
          I already have an account,
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
            <Link to="/signin">Sign In</Link>
          </Typography>
        </Typography>
      </Box>
    </AuthLayout>
  );
};

export default SignUp;
