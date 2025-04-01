import ButtonHover from "@/modules/core/components/button-hover";
import { Box, Typography, useTheme } from "@mui/material";
import { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { performanceCardSx } from "@/modules/dashboard/components/performance-card/styles";
import { ABBREVIATED_MONTHS } from "@/constants/months";
import { performanceChartOptions } from "@/modules/dashboard/components/performance-card/utils";

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const CustomBarChart = () => {
  const theme = useTheme();

  const data = {
    labels: ABBREVIATED_MONTHS,
    datasets: [
      {
        label: "Page views",
        data: [
          2400, 1398, 9800, 3908, 4800, 3800, 2400, 1398, 9800, 3908, 4800,
          3800,
        ],
        backgroundColor: theme.palette.primary.main,
        borderRadius: 8,
      },
      {
        label: "Clicks",
        data: [
          4000, 3000, 2000, 2780, 1890, 2390, 4000, 3000, 2000, 2780, 1890,
          2390,
        ],
        backgroundColor: theme.palette.success.main,
        borderRadius: 8,
      },
    ],
  };

  return (
    <Box pt={5} maxHeight={250} display="flex" justifyContent="center">
      <Bar data={data} options={performanceChartOptions} />
    </Box>
  );
};

interface FilterProps {
  filter: number;
  onFilter: (param: number) => void;
}

const Filters = ({ filter, onFilter }: FilterProps) => {
  return (
    <Box display="flex" alignItems="center" gap={0.5}>
      <ButtonHover
        variant="secondary"
        inverted={filter !== 0}
        onClick={() => onFilter(0)}
        sx={performanceCardSx.filterButton}
      >
        All
      </ButtonHover>
      <ButtonHover
        variant="secondary"
        inverted={filter !== 1}
        onClick={() => onFilter(1)}
        sx={performanceCardSx.filterButton}
      >
        1M
      </ButtonHover>
      <ButtonHover
        variant="secondary"
        inverted={filter !== 6}
        onClick={() => onFilter(6)}
        sx={performanceCardSx.filterButton}
      >
        6M
      </ButtonHover>
      <ButtonHover
        variant="secondary"
        inverted={filter !== 12}
        onClick={() => onFilter(12)}
        sx={performanceCardSx.filterButton}
      >
        1Y
      </ButtonHover>
    </Box>
  );
};

const PerformanceCard = () => {
  const [filter, setFilter] = useState<number>(12);

  const handleFilter = (newValue: number) => {
    setFilter(newValue);
  };

  return (
    <Box sx={performanceCardSx.container}>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography variant="h6" color="text.primary" fontSize={16}>
          Performance
        </Typography>
        <Filters filter={filter} onFilter={handleFilter} />
      </Box>
      <Box>
        <CustomBarChart />
      </Box>
    </Box>
  );
};

export default PerformanceCard;
