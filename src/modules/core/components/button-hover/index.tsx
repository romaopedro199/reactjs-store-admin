import { Button, SxProps } from "@mui/material";
import { ReactNode } from "react";
import { buttonHoverSx } from "@/modules/core/components/button-hover/styles";

interface ButtonHoverProps {
  variant?: "primary" | "secondary";
  inverted?: boolean;
  type?: "submit" | "button";
  onClick?: () => void;
  children: ReactNode;
  fullWidth?: boolean;
  sx?: SxProps;
}

const ButtonHover = ({
  variant = "primary",
  inverted,
  type = "button",
  onClick,
  children,
  fullWidth,
  sx,
}: ButtonHoverProps) => {
  const isSecondary = variant !== "primary";

  const componentSx = buttonHoverSx({
    bgcolor: inverted
      ? "transparent"
      : !isSecondary
      ? "primary.100"
      : "secondary.100",
    color: !isSecondary
      ? "primary.main"
      : !inverted
      ? "secondary.main"
      : "text.primary",
    border: inverted ? "1px solid" : "0",
    borderColor: !isSecondary ? "primary.100" : "secondary.100",
    bgcolorHover: !isSecondary ? "primary.main" : "secondary.main",
    sx,
  });

  return (
    <Button
      type={type}
      fullWidth={fullWidth}
      variant="contained"
      onClick={onClick}
      sx={componentSx.button}
    >
      {children}
    </Button>
  );
};

export default ButtonHover;
