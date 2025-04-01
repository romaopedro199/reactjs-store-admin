import { Box, Typography, useTheme } from "@mui/material";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { conversionsCardSx } from "@/modules/dashboard/components/conversions-card/styles";
import { conversionsChartOptions } from "@/modules/dashboard/components/conversions-card/utils";
import ButtonHover from "@/modules/core/components/button-hover";

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
        <Box textAlign="center" mt={-2.5}>
          <Typography color="text.primary" fontSize={20} fontWeight="700">
            80%
          </Typography>
          <Typography color="text.primary" fontSize={14}>
            Returning customer
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between" py={3} px={8}>
          <Box textAlign="center">
            <Typography color="text.primary" fontSize={14}>
              This week
            </Typography>
            <Typography color="text.primary" fontSize={24} fontWeight="700">
              23.5k
            </Typography>
          </Box>
          <Box textAlign="center">
            <Typography color="text.primary" fontSize={14}>
              Last week
            </Typography>
            <Typography color="text.primary" fontSize={24} fontWeight="700">
              41.3k
            </Typography>
          </Box>
        </Box>
        <ButtonHover variant="secondary" fullWidth>
          View Details
        </ButtonHover>
      </Box>
    </Box>
  );
};

export default ConversionsCard;
