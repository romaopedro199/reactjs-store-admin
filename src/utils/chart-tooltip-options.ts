import { Theme } from "@mui/material";

export const chartTooltipOptions = (theme: Theme) => {
  return {
    enabled: false,
    external: (context) => {
      let tooltipEl = document.getElementById("custom-tooltip");

      if (!context.tooltip || context.tooltip.opacity === 0) {
        if (tooltipEl) {
          tooltipEl.style.opacity = "0";
        }
        return;
      }

      if (!tooltipEl) {
        tooltipEl = document.createElement("div");
        tooltipEl.id = "custom-tooltip";
        tooltipEl.style.position = "absolute";
        tooltipEl.style.color = theme.palette.text.disabled;
        tooltipEl.style.background = theme.palette.background.paper;
        tooltipEl.style.padding = "8px 12px";
        tooltipEl.style.borderRadius = "6px";
        tooltipEl.style.boxShadow = "0px 4px 6px rgba(0,0,0,0.1)";
        tooltipEl.style.fontSize = "12px";
        tooltipEl.style.fontFamily = "Segoe UI, sans-serif";
        tooltipEl.style.width = "fit-content";
        tooltipEl.style.opacity = "0";
        tooltipEl.style.pointerEvents = "none";
        tooltipEl.style.transition = "opacity 0.2s ease-in-out";
        document.body.appendChild(tooltipEl);
      }

      const tooltipModel = context.tooltip;
      const dataPoints = tooltipModel.dataPoints;

      if (!dataPoints || dataPoints.length === 0) return;

      let innerHtml = `<strong>${tooltipModel.title[0]}</strong><br>`;

      dataPoints.forEach((point) => {
        const { dataset, formattedValue, dataIndex } = point;

        innerHtml += `
          <div style="display: flex; align-items: center; gap: 8px; padding-top: 10px; white-space: nowrap;">
            <span style="width: 10px; height: 10px; background: ${
              dataset.backgroundColor[dataIndex] || dataset.backgroundColor
            }; border-radius: 50%; display: inline-block;"></span>
            ${dataset.label}: <strong>${formattedValue}</strong>
          </div>
        `;
      });

      tooltipEl.innerHTML = innerHtml;

      const position = context.chart.canvas.getBoundingClientRect();

      tooltipEl.style.left = `${
        position.left + window.pageXOffset + tooltipModel.caretX
      }px`;
      tooltipEl.style.top = `${
        position.top + window.pageYOffset + tooltipModel.caretY - 40
      }px`;
      tooltipEl.style.opacity = "1";
    },
  };
};
