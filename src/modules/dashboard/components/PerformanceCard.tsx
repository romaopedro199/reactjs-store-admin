import ButtonHover from "@/modules/core/components/ButtonHover";
import { Box, SxProps, Typography } from "@mui/material";
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

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
  labels: [
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
  ],
  datasets: [
    {
      label: "Pave views",
      data: [
        2400, 1398, 9800, 3908, 4800, 3800, 2400, 1398, 9800, 3908, 4800, 3800,
      ],
      backgroundColor: "#ff6f00",
      borderRadius: 8,
    },
    {
      label: "Clicks",
      data: [
        4000, 3000, 2000, 2780, 1890, 2390, 4000, 3000, 2000, 2780, 1890, 2390,
      ],
      backgroundColor: "#0288d1",
      borderRadius: 8,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: "bottom" as const,
      labels: {
        padding: 10,
        usePointStyle: true,
        pointStyle: "circle",
        boxWidth: 5,
        boxHeight: 5,
      },
    },
    tooltip: {
      enabled: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
    },
  },
};

const CustomBarChart = () => {
  return (
    <Box pt={5} maxHeight={250} display="flex" justifyContent="center">
      <Bar data={data} options={options} />
    </Box>
  );
};

const filterButtonSx: SxProps = { fontSize: 12, padding: 1, minWidth: 46 };

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
        sx={filterButtonSx}
      >
        All
      </ButtonHover>
      <ButtonHover
        variant="secondary"
        inverted={filter !== 1}
        onClick={() => onFilter(1)}
        sx={filterButtonSx}
      >
        1M
      </ButtonHover>
      <ButtonHover
        variant="secondary"
        inverted={filter !== 6}
        onClick={() => onFilter(6)}
        sx={filterButtonSx}
      >
        6M
      </ButtonHover>
      <ButtonHover
        variant="secondary"
        inverted={filter !== 12}
        onClick={() => onFilter(12)}
        sx={filterButtonSx}
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
        <CustomBarChart />
      </Box>
    </Box>
  );
};

export default PerformanceCard;
