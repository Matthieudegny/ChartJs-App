import Header from '../Header/Header'
import SideBar from '../SideBar/SideBar';
import Home from '../Pages/Home/Home';
import FirstGraph from '../Pages/FirstGraph/FirstGraph';
import SecondGraph from '../Pages/SecondGraph/SecondGraph';
import Array from '../Pages/Array/Array';

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
            <Route path="firstGraph" element={<FirstGraph />} />
            <Route path="secondGraph" element={<SecondGraph />} />
            <Route path="array" element={<Array />} />
        </Routes>
        </div>

      </div>

    </div>

  );
}

export default App;
