import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['WIN', 'LOSE'],
  datasets: [
    {
      data: [11, 7],
      backgroundColor: [
        'rgba(255, 99, 132, 0.8)',
        'rgba(54, 162, 235, 0.8)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
      ],
      borderWidth: 1,
    },
  ],
};
const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    }
  }
}

function Score() {
  return (
    <Doughnut data={data} options={options}/>
  )
}

export default Score