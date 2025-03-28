import { Button, SxProps } from "@mui/material";
import { ReactNode } from "react";

type ButtonHoverProps = {
  variant?: "primary" | "secondary";
  inverted?: boolean;
  type?: "submit" | "button";
  onClick?: () => void;
  children: ReactNode;
  fullWidth?: boolean;
  sx?: SxProps;
};

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

  const buttonSx: SxProps = {
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
    textTransform: "inherit",
    fontWeight: "400",
    fontSize: 14,
    borderRadius: 3,
    boxShadow: "none",
    "&:hover": {
      boxShadow: "none",
      bgcolor: !isSecondary ? "primary.main" : "secondary.main",
      color: "text.secondary",
    },
    ...sx,
  };

  return (
    <Button
      type={type}
      fullWidth={fullWidth}
      variant="contained"
      onClick={onClick}
      sx={buttonSx}
    >
      {children}
    </Button>
  );
};

export default ButtonHover;
