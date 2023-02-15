import React from 'react';
import Typewriter from 'typewriter-effect/dist/core';
import Title from '../Title/Title';
import 'animate.css';
import planets from '../../data/planets';
import PlanetCard from '../PlanetCard/PlanetCard';
import './SolarSystem.css';

const infoClassName = '.planet-info';

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

  componentWillUnmount() {
    const divInfo = document.querySelector(infoClassName);
    divInfo.classList.remove('animate__animated', 'animate__slideOutRight');
  }

  onClickPlanet = ({ target }) => {
    const timeoutTimer = 1000;
    const { planetClick } = this.state;
    if (planetClick) {
      const divInfo = document.querySelector(infoClassName);
      divInfo.classList.add('animate__animated', 'animate__slideOutRight');
      setTimeout(() => {
        divInfo.classList.remove('animate__animated', 'animate__slideOutRight');
        this.setState({
          planetClick: false,
          planetName: '',
        });
        this.callInfoCard(target);
      }, timeoutTimer);
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
    const divInfo = document.querySelector(infoClassName);
    divInfo.classList.add('animate__animated', 'animate__slideInLeft');
    const typewriterDiv = document.querySelector('.writer');
    typewriterDiv.innerHTML = '';
    this.createWriter(typewriterDiv);
  };

  createWriter = (typewriterDiv) => {
    const timeoutTimer = 850;
    setTimeout(() => {
      const { planetName, planetDescription } = this.state;
      const { distanceFromSun, orbitalPeriod,
        radius, mass, lengthOfDay } = planetDescription;
      // eslint-disable-next-line no-unused-vars
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
    }, timeoutTimer);
  };

  updatePlanet = (ourPlanet) => {
    this.setState({
      planetName: ourPlanet.name,
      planetImage: ourPlanet.image,
      planetDescription: ourPlanet.description,
      planetClick: true,
    });
  };

  render() {
    const { planetClick, planetName, planetImage } = this.state;
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
