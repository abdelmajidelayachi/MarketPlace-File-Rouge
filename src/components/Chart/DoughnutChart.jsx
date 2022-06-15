import React from 'react'
import { Pie } from "react-chartjs-2";



const DoughnutChart = (props) => {
  const data = {
    labels: [
      'Bought Products',
      'Still Products',
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [props.data.orders, props.data.products],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgba(58, 54, 219, 1)',
      ],
      hoverOffset: 4
    }]
  };
  return (
   <Pie data={data}/>
  )
}

export default DoughnutChart