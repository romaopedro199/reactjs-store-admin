import { Box, Typography, useTheme } from "@mui/material";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { sessionsCardSx } from "@/modules/dashboard/components/sessions-card/styles";
import { sessionsChartOptions } from "@/modules/dashboard/components/sessions-card/utils";

ChartJS.register(ArcElement, Tooltip, Legend);

const estadosBrasil = ["SP", "RJ", "MG", "BA", "PR", "RS", "PE", "CE", "SC"];

const visitas = [3200, 2100, 1800, 1500, 1400, 1200, 1100, 900, 800];

const data = {
  labels: estadosBrasil,
  datasets: [
    {
      label: "Sessions",
      data: visitas,
      backgroundColor: [
        "#FFE8DC",
        "#FFC2A3",
        "#FF9B72",
        "#FF7C47",
        "#FF6C2F",
        "#E66029",
        "#CC5525",
        "#B24920",
        "#993E1C",
      ],
      hoverOffset: 4,
    },
  ],
};

const CustomDoughnutChart = () => {
  const theme = useTheme();
  const options = sessionsChartOptions(theme);

  return (
    <Box pt={3} display="flex" justifyContent="center" height={230}>
      <Pie data={data} options={options} />
    </Box>
  );
};

const SessionsCard = () => {
  return (
    <Box sx={sessionsCardSx.container}>
      <Box>
        <Typography variant="h6" color="text.primary" fontSize={16}>
          Sessions by State
        </Typography>
      </Box>
      <Box>
        <CustomDoughnutChart />
        <Box display="flex" justifyContent="space-between" py={3} px={8}>
          <Box textAlign="center">
            <Typography color="text.disabled" fontSize={14}>
              This week
            </Typography>
            <Typography color="text.primary" fontSize={24} fontWeight="700">
              23.5k
            </Typography>
          </Box>
          <Box textAlign="center">
            <Typography color="text.disabled" fontSize={14}>
              Last week
            </Typography>
            <Typography color="text.primary" fontSize={24} fontWeight="700">
              41.3k
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SessionsCard;
