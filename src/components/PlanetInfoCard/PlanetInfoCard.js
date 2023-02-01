import React from 'react';
import PropTypes from 'prop-types';
import './PlanetInfoCard.css';

export default class PlanetInfoCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div className="info-container">
        <img src={ planetImage } alt={ planetName } />
        <div className="writer" />
      </div>
    );
  }
}

PlanetInfoCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};
