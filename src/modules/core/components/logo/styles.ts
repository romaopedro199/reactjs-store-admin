import { SxProps } from "@mui/material";

interface logoSxProps {
  containerWidth: number | string;
  width: number;
  height: number;
}

export const logoSx = ({ containerWidth, width, height }: logoSxProps) => {
  return {
    container: {
      overflow: "hidden",
      width: containerWidth,
      img: { width, height },
    } as SxProps,
  };
};
