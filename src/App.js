import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import "./App.css";
import Dashboard from './components/Dashboard';
import FishBuy from './components/FishBuy';
import FishSell from './components/FishSell';
import ImergencyService from './components/ImergencyService';
import FishCare from './components/FishCare';
import UserDashboard from './components/UserDashboard';
import Navbar from './components/Navbar';
import TopArea from './components/TopArea';

const App = () => {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <div>
      <Navbar isToggled={isToggled} setIsToggled={setIsToggled}/>
      <TopArea  isToggled={isToggled} setIsToggled={setIsToggled}/>
      <Routes>
        <Route path='/' element={ <FishBuy/>}/>
        <Route path='/dashboard' element={ <Dashboard/>}/>
        <Route path='/user' element={ <UserDashboard/>}/>
        <Route path='/fishselluser' element={ <FishSell/>}/>
        <Route path='/fishcare' element={ <FishCare/>}/>
        <Route path='/imergency' element={ <ImergencyService/>}/>
      </Routes>
    </div>
  );
};

export default App;
