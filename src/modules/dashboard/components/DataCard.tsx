import { Box, Button, SxProps, Typography } from "@mui/material";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { ReactNode } from "react";

const dataCardSx: SxProps = {
  borderRadius: 4,
  bgcolor: "background.paper",
  overflow: "hidden",
  boxShadow: "0px 3px 4px 0px rgba(0, 0, 0, 0.03)",
};

const dataBodySx: SxProps = {
  bgcolor: "background.paper",
  p: 3,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

const iconBoxSx: SxProps = {
  bgcolor: "primary.100",
  p: 2,
  borderRadius: 3,
  color: "primary.main",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const dataFooterSx: SxProps = {
  bgcolor: "grey.500",
  px: 3,
  py: 2,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  div: {
    display: "flex",
    alignItems: "center",
  },
};

const linkSx: SxProps = {
  color: "text.primary",
  textTransform: "none",
  fontSize: 14,
  bgcolor: "transparent",
};

type DataCardProps = {
  icon: ReactNode;
  label: string;
  value: string;
  percentage: string;
  status: "success" | "error";
};

const DataCard = ({
  icon,
  label,
  value,
  percentage,
  status,
}: DataCardProps) => {
  const isSuccess = status === "success";

  return (
    <Box sx={dataCardSx}>
      <Box sx={dataBodySx}>
        <Box sx={iconBoxSx}>{icon}</Box>
        <Box>
          <Typography variant="body1" color="text.disabled" fontSize={14}>
            {label}
          </Typography>
          <Typography variant="h6" color="text.primary" fontSize={24}>
            {value}
          </Typography>
        </Box>
      </Box>
      <Box sx={dataFooterSx}>
        <Box>
          <Box mr={1}>
            {isSuccess ? (
              <ArrowDropUpIcon sx={{ color: `${status}.main` }} />
            ) : (
              <ArrowDropDownIcon sx={{ color: `${status}.main` }} />
            )}
            <Typography variant="body1" color={`${status}.main`} fontSize={14}>
              {percentage}%
            </Typography>
          </Box>
          <Typography variant="body1" color="text.disabled" fontSize={14}>
            Last week
          </Typography>
        </Box>
        <Button sx={linkSx}>View more</Button>
      </Box>
    </Box>
  );
};

export default DataCard;
