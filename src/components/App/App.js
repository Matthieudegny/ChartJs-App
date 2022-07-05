import Header from '../Header/Header'
import SideBar from '../SideBar/SideBar';
import Home from '../Pages/Home/Home';
import Customers from '../Pages/Customers/Customers';
import Products from '../Pages/Products/Products';
import Records from '../Pages/Records/Records';

import { Routes, Route } from 'react-router-dom';

import './app.css';


function App() {
  return (
    <div className="App">

      <Header />

      <div className="app-main">

        <SideBar />

        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="customers" element={<Customers />} />
            <Route path="products" element={<Products />} />
            <Route path="records" element={<Records />} />
        </Routes>
        </div>

      </div>

    </div>

  );
}

export default App;
