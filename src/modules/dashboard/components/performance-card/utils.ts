export const performanceChartOptions = {
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
