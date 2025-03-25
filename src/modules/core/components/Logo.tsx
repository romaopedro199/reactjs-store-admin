import { Box, SxProps } from "@mui/material";

type LogoProps = {
  width?: number;
  height?: number;
};

const Logo = ({ width = 168, height = 41 }: LogoProps) => {
  const sx: SxProps = { img: { width, height } };
  return (
    <Box sx={sx}>
      <img src="src/assets/svg/logo.svg" />
    </Box>
  );
};

export default Logo;
