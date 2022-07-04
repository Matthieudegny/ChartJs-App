import './secondGraph.css';

import {Pie} from "react-chartjs-2"
import { Chart as ChartJS } from "chart.js/auto";

const datas = {
  //labels = titre du documents avec les labels un logo avec couleur + nom correspondant
  labels: ["beijing", "Tokyo", "Seoul"],
  datasets: [{
      data:[300,150,100],
      backgroundColor: [
          'rgba(255, 99, 132)',
          'rgba(54, 162, 235)',
          'rgba(255, 206, 86)'
      ],
      //décalage du fromage au hover
      hoverOffset: 40
  }]
}

function SecondGraph() {
  return (
    <div className="secondChart">
      <div className="container-secondChart">
      <Pie data={datas}/>
      </div>
    </div>
  );
}

export default SecondGraph;
