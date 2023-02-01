import React from 'react';
import Title from '../Title/Title';
import 'animate.css'
import Typewriter from 'typewriter-effect/dist/core';
import planets from '../../data/planets';
import PlanetCard from '../PlanetCard/PlanetCard';
import PlanetInfoCard from '../PlanetInfoCard/PlanetInfoCard';
import './SolarSystem.css';



class SolarSystem extends React.Component {
  constructor() {
    super();

    this.state = {
      planetClick: false,
      planetName: '',
      planetImage: '',
      planetDescription: '',
    }
  }

  onClickPlanet = ({ target }) => {
    const { planetClick } = this.state;
    if(planetClick) {
      const divInfo = document.querySelector('.planet-info');
      divInfo.classList.add('animate__animated', 'animate__fadeOutDown');
      setTimeout(() => {
        divInfo.classList.remove('animate__animated', 'animate__fadeOutDown');
        this.setState({
          planetClick: false,
          planetName: '',
        });
        this.chamaOPlaneta(target);
      },800);
      console.log(planetClick, 'onclickplanet');
    } else {
      this.chamaOPlaneta(target);
    }
  }

  chamaOPlaneta = (target) => {
    const { innerText } = target;
    const ourPlanet = planets.find((planet) => planet.name
      .toLowerCase().includes(innerText.toLowerCase()));
      setTimeout(() => {
        this.setState({
          planetName: ourPlanet.name,
          planetImage: ourPlanet.image,
          planetDescription: ourPlanet.description,
          planetClick: true,
        })
        const divInfo = document.querySelector('.planet-info');
        divInfo.classList.add('animate__animated', 'animate__fadeInDown');
        const typewriterDiv = document.querySelector('.writer');
        typewriterDiv.innerHTML = '';
        setTimeout(() => {
          // debugger
          const typewriter = new Typewriter(typewriterDiv, {
            strings: `Planeta: ${this.state.planetName} <br/> Descrição: ${this.state.planetDescription}`,
            delay: 10,
            autoStart: true,
            // delay: 900,
          });
        divInfo.classList.remove('animate__animated', 'animate__fadeInDown');
      },800)
      console.log(this.state.planetClick, 'chamaOPlaneta');
    }, 10);
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
        <section className="planet-info" style={{ display: planetClick ? 'block' : 'none' }}>
          <PlanetInfoCard
            planetName={ planetName }
            planetImage={ planetImage }
            planetDescription={ planetDescription }
          />
        </section>
          
      </div>
    );
  }
}

export default SolarSystem;
