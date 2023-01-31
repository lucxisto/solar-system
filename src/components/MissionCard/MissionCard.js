import React from 'react';
import PropTypes from 'prop-types';
import './MissionCard.css';
import { AiFillFlag, AiFillCalendar } from 'react-icons/ai';
import { ImLocation } from 'react-icons/im';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;

    return (
      <div data-testid="mission-card" className="mission-card">
        <p data-testid="mission-name" className="mission-name">{ name }</p>
        <hr />
        <section className="mission-info">
          <p data-testid="mission-year">
            <AiFillCalendar />
            { year }
          </p>
          <p data-testid="mission-country">
            <ImLocation />
            { country }
          </p>
          <p data-testid="mission-destination">
            <AiFillFlag />
            { destination }
          </p>
        </section>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
