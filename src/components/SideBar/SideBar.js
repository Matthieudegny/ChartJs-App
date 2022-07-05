import './sideBar.css';

import React from 'react';

import { NavLink } from 'react-router-dom';

// import HomeIcon from '@mui/icons-material/Home';
// import TakeoutDiningIcon from '@mui/icons-material/TakeoutDining';
// import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
// import KitchenIcon from '@mui/icons-material/Kitchen';
import HomeIcon from '@mui/icons-material/Home';
import TimelineIcon from '@mui/icons-material/Timeline';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import DataUsageIcon from '@mui/icons-material/DataUsage';

function SideBar() {

  return (
    <div className="sideBar">

        <NavLink
          to="/"
          style={({ isActive }) => ({color: isActive ? "#9EC6BE" : "#44DDC3"})}
        >      

          <div className='sideBar-items'>
            <HomeIcon />
            <div>Accueil</div>
          </div>

      </NavLink>
     
      <NavLink
          to="customers"
          style={({ isActive }) => ({color: isActive ? "#9EC6BE" : "#44DDC3"})}
      >
      
        <div className="sideBar-items">
          <TimelineIcon />
          <div>Clients</div>
        </div>
            
      </NavLink>

      <NavLink
          to="products"
          style={({ isActive }) => ({color: isActive ? "#9EC6BE" : "#44DDC3"})}
      >
        
        <div className="sideBar-items">
         <EqualizerIcon />
          <div>Produits</div>
        </div>
      </NavLink>

      <NavLink
          to="records"
          style={({ isActive }) => ({color: isActive ? "#9EC6BE" : "#44DDC3"})}
      >
        
        <div className="sideBar-items">
          <DataUsageIcon />
          <div>Bilan</div>
        </div>
            
           
      </NavLink>
      
    </div>
  );
}

export default SideBar;
