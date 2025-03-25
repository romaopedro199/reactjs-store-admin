import { Button, SxProps } from "@mui/material";
import { ReactNode } from "react";

type ButtonHoverProps = {
  variant?: "primary" | "secondary";
  type?: "submit" | "button";
  onClick?: () => void;
  children: ReactNode;
  fullWidth?: boolean;
};

const ButtonHover = ({
  variant = "primary",
  type = "button",
  onClick,
  children,
  fullWidth,
}: ButtonHoverProps) => {
  const isSecondary = variant !== "primary";

  const buttonSx: SxProps = {
    bgcolor: !isSecondary ? "primary.100" : "secondary.100",
    color: !isSecondary ? "primary.main" : "secondary.main",
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
