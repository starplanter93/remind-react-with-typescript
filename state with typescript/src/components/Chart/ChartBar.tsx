import React from "react";

import "./ChartBar.css";

interface OwnProps {
  value: number;
  maxValue: number;
  label: string;
}

function ChartBar({ value, maxValue, label }: OwnProps) {
  let barFillHeight = "0%";

  if (maxValue > 0) {
    barFillHeight = Math.round((value / maxValue) * 100) + "%";
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{label}</div>
    </div>
  );
}

export default ChartBar;
