import React from "react";

import { Line } from "react-chartjs-2";

import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement);

const data = {
  labels: ["14", "15",'16','17','18' ],
  datasets: [
    {
      label: "Orders",
      data: [33, 53, 85, 41, 44, 65],
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)"
    },
    {
      label: "Products",
      data: [33, 25, 35, 101, 54, 0],
      fill: false,
      borderColor: "#742774"
    },
    
  ]
};

export default function LineChart() {
  return (
      <Line data={data} />
  );
}
