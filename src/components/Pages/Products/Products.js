import './products.css';

import {Pie} from "react-chartjs-2"
import { Chart as ChartJS } from "chart.js/auto";
import { useSelector } from 'react-redux';

function Products() {

  const products = useSelector((state) => state.productsReducer.products)
  const connexionsMonth = useSelector((state) => state.productsReducer.timeVisiting)

  const datas = {
    labels: products,
    datasets: [{
        data:connexionsMonth,
        backgroundColor: [
            '#5b1df0',
            '#9973f5',
            '#c8b6f2',
            '#05ddb8',
            '#56ddc5',
            '#a3dad0',
            '#d2e2df'
        ],
        hoverOffset: 20
    }]
  }

  return (
    <div className="products">

      <div className="container-products">
      <h3>Durée de consultation total par article (en secondes):</h3>
        <Pie data={datas}/>
      </div>

      <div className="container-arrayProducts">
        
        <table>
          <tr>
            <th>ID Article</th>
            <th>Article + Marque</th>
          </tr>
          <tr>
            <td>1001</td>
            <td>501 Levis</td>
          </tr>
          <tr>
            <td>1002</td>
            <td>511 Levis</td>
          </tr>
          <tr>
            <td>2001</td>
            <td>Slim natural Gap</td>
          </tr>
          <tr>
            <td>2002</td>
            <td>Skinny Gap</td>
          </tr>
          <tr>
            <td>2003</td>
            <td>Droit Gap</td>
          </tr>
          <tr>
            <td>3001</td>
            <td>Skinny Diesel</td>
          </tr>
          <tr>
            <td>3002</td>
            <td>Slim Diesel</td>
          </tr>
        </table>
      </div>

    </div>
  );
}

export default Products;
