import { chartTooltipOptions } from "@/utils/chart-tooltip-options";
import { Theme } from "@mui/material";
import { LayoutPosition } from "chart.js";

export const sessionsChartOptions = (theme: Theme) => {
  return {
    responsive: true,
    plugins: {
      legend: {
        position: "right" as LayoutPosition,
      },
      title: {
        display: false,
      },
      tooltip: chartTooltipOptions(theme),
    },
  };
};
