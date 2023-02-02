import React from 'react';
import PropTypes from 'prop-types';
import './MissionCard.css';
import { AiFillFlag, AiFillCalendar } from 'react-icons/ai';
import { ImLocation } from 'react-icons/im';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination, missionOnClick, missionIndex} = this.props;
    return (
      <div className={ `mission-card ${missionIndex}` } onClick={ missionOnClick }>
        <p data-testid="mission-name" className={`mission-name ${missionIndex}`}>{ name }</p>
        <hr />
        <section className={ `mission-info ${missionIndex}` }>
          <p className={ missionIndex }>
            <AiFillCalendar />
            { year }
          </p>
          <p className={ missionIndex }>
            <ImLocation />
            { country }
          </p>
          <p className={ missionIndex }>
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
