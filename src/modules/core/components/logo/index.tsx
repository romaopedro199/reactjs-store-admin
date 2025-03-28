import { Box } from "@mui/material";
import { logoSx } from "@/modules/core/components/logo/styles";

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
  const componentSx = logoSx({
    containerWidth: compact ? 50 : "auto",
    width,
    height,
  });

  return (
    <Box sx={componentSx.container}>
      <img src={`src/assets/svg/logo-${variant}.svg`} />
    </Box>
  );
};

export default Logo;
