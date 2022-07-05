import './customers.css';

import {Bar} from "react-chartjs-2"
import { Chart as ChartJS } from "chart.js/auto";
import { useSelector } from 'react-redux';


function Customers() {

    const idUSer = useSelector((state) => state.customersReducer.idUser)
    const connexionsMonth = useSelector((state) => state.customersReducer.connexionsMonth)
    const viewedItems = useSelector ((state) => state.customersReducer.viewedItems)

    const datas = {
        labels: idUSer,
        datasets: [
            {
            label:'nombre de connexions ce mois',
            data: connexionsMonth,
            backgroundColor: [
                '#6C33F1',
            ],
            },
            {
            label:"nombre d'articles consultés",
            data: viewedItems,
            backgroundColor: [
                '#ac89ff',
            ],
            }
        ]
    }
    const options = {
      scales: {
          y:{
              //taille max de y
              suggestedMax: 10,
              //modification axe y (siez, padding...)
              ticks: {
                  font:{
                      size: 15
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
    

    
  return (
    <div className="customers">

        <Bar data={datas} options={options}/>
      
    </div>
  );
}

export default Customers;
