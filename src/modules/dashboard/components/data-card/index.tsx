import { Box, Button, Typography } from "@mui/material";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { ReactNode } from "react";
import { dataCardSx } from "@/modules/dashboard/components/data-card/styles";

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
    <Box sx={dataCardSx.container}>
      <Box sx={dataCardSx.body}>
        <Box sx={dataCardSx.iconBox}>{icon}</Box>
        <Box>
          <Typography variant="body1" color="text.disabled" fontSize={14}>
            {label}
          </Typography>
          <Typography variant="h6" color="text.primary" fontSize={24}>
            {value}
          </Typography>
        </Box>
      </Box>
      <Box sx={dataCardSx.footer}>
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
        <Button sx={dataCardSx.link}>View more</Button>
      </Box>
    </Box>
  );
};

export default DataCard;
