import React from "react";

import { Line } from "react-chartjs-2";

import { Chart as ChartJS, ArcElement,Filler, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js';
ChartJS.register(ArcElement,Filler, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement);



export default function LineChart(props) {
  const data = {
    labels: props.data.map((time)=>{
      return time.created_at
    }),
    datasets: [
      {
        label: "Orders",
        data: props.data.map((product)=>{
          return product.quantity_ordered_products
        }),
        fill: true,
        backgroundColor: "rgba(58, 54, 219, 0.2)",
        borderColor: "rgba(58, 54, 219, 1)"
      },
      
    ]
  };
  return (
      <Line data={data} />
  );
}
