import { Box, SxProps } from "@mui/material";

type LogoProps = {
  width?: number;
  height?: number;
  variant?: "light" | "dark";
};

const Logo = ({ width = 168, height = 41, variant = "dark" }: LogoProps) => {
  const sx: SxProps = { img: { width, height } };
  return (
    <Box sx={sx}>
      <img src={`src/assets/svg/logo-${variant}.svg`} />
    </Box>
  );
};

export default Logo;
