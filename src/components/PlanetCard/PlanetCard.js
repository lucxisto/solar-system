import React from 'react';
import PropTypes from 'prop-types';
import './PlanetCard.css';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage, planetClick } = this.props;
    return (
      <div
        className="planet-container"
        onClick={ planetClick }
        value={ planetName }
        style={ {
          backgroundImage: `url(${planetImage})`,
        } }
      >
        <p data-testid="planet-name">
          { planetName }
        </p>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
  planetClick: PropTypes.func.isRequired,
};

export default PlanetCard;
