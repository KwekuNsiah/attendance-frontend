// import React from "react";

import { Bar } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface BarChartProps {
  chartData: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor: string[];
      borderWith: number;
    }[];
  };
}

// interface BarChartProps {
//   chartData: ChartData;
// }

export const AttendanceBarChart: React.FC<BarChartProps> = ({ chartData }) => {
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        // text: "Sample Bar Chart",
      },
      legend: {
        position: "top" as const,
      },
    },
  };

  return (
    <div style={{ width: "300px", height: "300px" }}>
      <Bar data={chartData} options={options} />
    </div>
  );
};
