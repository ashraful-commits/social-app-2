import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

 const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'User chart bar',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

 const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => ({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(25, 170, 20, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => ({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(19, 238, 48, 0.5)',
    },
  ],
};

export default function VerticalBarChat() {
  return <Bar options={options} data={data} />;
}
