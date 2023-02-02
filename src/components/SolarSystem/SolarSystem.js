import React from 'react';
import Typewriter from 'typewriter-effect/dist/core';
import Title from '../Title/Title';
import 'animate.css';
import planets from '../../data/planets';
import PlanetCard from '../PlanetCard/PlanetCard';
import './SolarSystem.css';

class SolarSystem extends React.Component {
  constructor() {
    super();

    this.state = {
      planetClick: false,
      planetName: '',
      planetImage: '',
      planetDescription: '',
    };
  }

  onClickPlanet = ({ target }) => {
    const { planetClick } = this.state;
    if (planetClick) {
      const divInfo = document.querySelector('.planet-info');
      divInfo.classList.add('animate__animated', 'animate__slideOutRight');
      setTimeout(() => {
        divInfo.classList.remove('animate__animated', 'animate__slideOutRight');
        this.setState({
          planetClick: false,
          planetName: '',
        });
        this.callInfoCard(target);
      }, 1000);
      console.log(planetClick, 'onclickplanet');
    } else {
      this.callInfoCard(target);
    }
  };

  callInfoCard = (target) => {
    const { innerText } = target;
    const ourPlanet = planets.find((planet) => planet.name
      .toLowerCase().includes(innerText.toLowerCase()));
    this.updatePlanet(ourPlanet);
    const divInfo = document.querySelector('.planet-info');
    divInfo.classList.add('animate__animated', 'animate__slideInLeft');
    const typewriterDiv = document.querySelector('.writer');
    typewriterDiv.innerHTML = '';
    this.createWriter(typewriterDiv);
  };
  
  createWriter = (typewriterDiv) =>{
    setTimeout(() => {
      const { planetName, planetDescription } = this.state;
      const { distanceFromSun, orbitalPeriod,
        radius, mass, lengthOfDay } = planetDescription;
      const typewriter = new Typewriter(typewriterDiv, {
        strings: `Planeta: ${planetName} 
        <br/> Distancia do Sol: ${distanceFromSun}
        <br/> Periodo Orbital: ${orbitalPeriod}
        <br/> Raio: ${radius}
        <br/> Massa: ${mass}
        <br/> Duração do dia: ${lengthOfDay}`,
        delay: 15,
        autoStart: true,
      });
    }, 850);
  };
  
  
  updatePlanet = (ourPlanet) => {
    this.setState({
      planetName: ourPlanet.name,
      planetImage: ourPlanet.image,
      planetDescription: ourPlanet.description,
      planetClick: true,
    });
  }

componentWillUnmount() {
  const divInfo = document.querySelector('.planet-info');
  divInfo.classList.remove('animate__animated', 'animate__slideOutRight');

}

  render() {
    const { planetClick, planetName, planetImage, planetDescription } = this.state;
    return (
      <div className="solar-system" data-testid="solar-system">
        <Title headline="Planetas" />
        <div className="planets">
          {planets.map((planet, index) => (
            <PlanetCard
              key={ index }
              planetName={ planet.name }
              planetImage={ planet.image }
              planetClick={ this.onClickPlanet }
            />
          ))}
        </div>
        <section
          className="planet-info"
          style={ { display: planetClick ? 'block' : 'none' } }
        >
          <div className="info-container">
            <img src={ planetImage } alt={ planetName } />
            <div className="writer" />
          </div>
        </section>
      </div>
    );
  }
}

export default SolarSystem;
