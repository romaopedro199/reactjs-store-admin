import { Box, SxProps } from "@mui/material";

type LogoProps = {
  width?: number;
  height?: number;
  variant?: "light" | "dark";
  compact?: boolean;
};

const Logo = ({
  width = 168,
  height = 41,
  variant = "dark",
  compact,
}: LogoProps) => {
  const sx: SxProps = {
    overflow: "hidden",
    width: compact ? 50 : "auto",
    img: { width, height },
  };

  return (
    <Box sx={sx}>
      <img src={`src/assets/svg/logo-${variant}.svg`} />
    </Box>
  );
};

export default Logo;
