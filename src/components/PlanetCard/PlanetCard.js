import React from 'react';
import PropTypes from 'prop-types';
import './PlanetCard.css';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage, planetClick } = this.props;
    return (
      // eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events
      <div
        className="planet-container"
        onClick={ planetClick }
        value={ planetName }
        style={ {
          backgroundImage: `url(${planetImage})`,
        } }
      >
        <p className="planet-name">
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
