import { SxProps } from "@mui/material";

interface buttonHoverSxProps {
  bgcolor: string;
  color: string;
  border: string;
  borderColor: string;
  bgcolorHover: string;
  sx?: SxProps;
}

export const buttonHoverSx = ({
  bgcolor,
  color,
  border,
  borderColor,
  bgcolorHover,
  sx,
}: buttonHoverSxProps) => {
  return {
    button: {
      bgcolor,
      color,
      border,
      borderColor,
      textTransform: "inherit",
      fontWeight: "400",
      fontSize: 14,
      borderRadius: 3,
      boxShadow: "none",
      "&:hover": {
        boxShadow: "none",
        bgcolor: bgcolorHover,
        color: "text.secondary",
      },
      ...sx,
    } as SxProps,
  };
};
