import React from 'react';
import Header from './components/Header/Header';
import SolarSystem from './components/SolarSystem/SolarSystem';
import Missions from './components/Missions/Missions';
import './App.css';
import PlanetInfoCard from './components/PlanetInfoCard/PlanetInfoCard';

class App extends React.Component {
  constructor() {
    super();
  }

  

  render() {
    return (
      <div className="main">
        <Header />
        <SolarSystem />
        <Missions />
      </div>
    );
  }
}

export default App;
