import { Box, Typography, useTheme } from "@mui/material";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { conversionsCardSx } from "@/modules/dashboard/components/conversions-card/styles";
import { conversionsChartOptions } from "@/modules/dashboard/components/conversions-card/utils";

ChartJS.register(ArcElement, Tooltip, Legend);

const CustomDoughnutChart = () => {
  const theme = useTheme();

  const value = 80;
  const maxValue = 100;
  const filled = (value / maxValue) * 180;
  const empty = 180 - filled;

  const data = {
    labels: ["Filled", "Empty"],
    datasets: [
      {
        data: [filled, empty],
        backgroundColor: [
          theme.palette.primary.main,
          theme.palette.background.default,
        ],
        borderWidth: 0,
        weight: 20,
        cutout: "70%",
        circumference: 280,
        rotation: 220,
      },
    ],
  };
  return (
    <Box
      pt={3}
      maxHeight={250}
      display="flex"
      justifyContent="center"
      sx={{ pointerEvents: "none" }}
    >
      <Doughnut data={data} options={conversionsChartOptions} />
    </Box>
  );
};

const ConversionsCard = () => {
  return (
    <Box sx={conversionsCardSx.container}>
      <Box>
        <Typography variant="h6" color="text.primary" fontSize={16}>
          Conversions
        </Typography>
      </Box>
      <Box>
        <CustomDoughnutChart />
      </Box>
    </Box>
  );
};

export default ConversionsCard;
