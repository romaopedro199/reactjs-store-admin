import ButtonHover from "@/modules/core/components/ButtonHover";
import { Box, SxProps, Typography, useTheme } from "@mui/material";
import { useState } from "react";
import { BarChart } from "@mui/x-charts/BarChart";

const uData = [
  4000, 3000, 2000, 2780, 1890, 2390, 4000, 3000, 2000, 2780, 1890, 2390,
];
const pData = [
  2400, 1398, 9800, 3908, 4800, 3800, 2400, 1398, 9800, 3908, 4800, 3800,
];
const xLabels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const MyResponsiveBar = () => {
  const theme = useTheme();

  return (
    <BarChart
      height={289.7}
      borderRadius={5}
      colors={[theme.palette.primary.main, theme.palette.success.main]}
      series={[
        { data: pData, label: "Page Views", id: "pvId" },
        { data: uData, label: "Clicks", id: "uvId" },
      ]}
      xAxis={[
        { data: xLabels, scaleType: "band", disableLine: true, tickSize: 0 },
      ]}
      yAxis={[{ disableLine: true, tickSize: 0 }]}
      slotProps={{
        legend: {
          position: { vertical: "bottom", horizontal: "middle" },
          direction: "row",
          itemGap: 20,
          padding: 0,
          itemMarkHeight: 17,
          itemMarkWidth: 17,
          labelStyle: {
            fontSize: 14,
          },
        },
      }}
    />
  );
};

interface FilterProps {
  filter: number;
  onFilter: (param: number) => void;
}

const Filters = ({ filter, onFilter }: FilterProps) => {
  return (
    <Box display="flex" alignItems="center" gap={1}>
      <ButtonHover
        variant="secondary"
        inverted={filter !== 0}
        onClick={() => onFilter(0)}
      >
        All
      </ButtonHover>
      <ButtonHover
        variant="secondary"
        inverted={filter !== 1}
        onClick={() => onFilter(1)}
      >
        1M
      </ButtonHover>
      <ButtonHover
        variant="secondary"
        inverted={filter !== 6}
        onClick={() => onFilter(6)}
      >
        6M
      </ButtonHover>
      <ButtonHover
        variant="secondary"
        inverted={filter !== 12}
        onClick={() => onFilter(12)}
      >
        1Y
      </ButtonHover>
    </Box>
  );
};

const performanceCardSx: SxProps = {
  borderRadius: 4,
  bgcolor: "background.paper",
  py: 3,
  px: 4,
  boxShadow: "0px 3px 4px 0px rgba(0, 0, 0, 0.03)",
};

const PerformanceCard = () => {
  const [filter, setFilter] = useState<number>(12);

  const handleFilter = (newValue: number) => {
    setFilter(newValue);
  };

  return (
    <Box sx={performanceCardSx}>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography variant="h6" color="text.primary" fontSize={16}>
          Performance
        </Typography>
        <Filters filter={filter} onFilter={handleFilter} />
      </Box>
      <Box>
        <MyResponsiveBar />
      </Box>
    </Box>
  );
};

export default PerformanceCard;
