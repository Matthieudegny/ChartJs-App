import './firstGraph.css';

import {Bar} from "react-chartjs-2"
import { Chart as ChartJS } from "chart.js/auto";

const datas = {
  labels: ["beijing", "Tokyo", "Seoul", "Hong Kong"],
  datasets: [{
      data:[240,120,140,130],
      backgroundColor: [
          'rgba(255, 99, 132)',
          'rgba(54, 162, 235)',
          'rgba(255, 206, 86)',
          'rgba(54, 162, 205)',
      ],
  }]
}

const options = {
  scales: {
      y:{
          //taille max de y
          suggestedMax: 500,
          //modification axe y (siez, padding...)
          ticks: {
              font:{
                  size: 30
              }
          }
      },
      x:{
          ticks: {
              font:{
                  size: 25
              }
          }
      }

  }
}

function FirstGraph() {
  
  return (
    <div className="firstChart">

        <Bar data={datas} options={options}/>
      
    </div>
  );
}

export default FirstGraph;
