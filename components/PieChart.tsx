import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend 
    
     } from 'chart.js';
  import { Pie, Bar } from 'react-chartjs-2';
  
const PieChart = () => {
///==============================pie chart
    ChartJS.register(ArcElement, Tooltip, Legend);
  
     const data = {
      labels: ['Suspended', 'Deprioritize', 'Bans'],
      datasets: [
        {
          label: '# of Votes',
          data: [12, 19, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 99, 132, 1)'
          ],
          borderColor: [
            '#33ff00',
            '#33ff00',
            '#33ff00',
            
          ],
          borderWidth: 1,
        },
      ],
    };
  return <div><Pie data={data} /></div>;
};

export default PieChart;
