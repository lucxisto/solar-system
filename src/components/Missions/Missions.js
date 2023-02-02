import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper';
import Typewriter from 'typewriter-effect/dist/core';
import 'swiper/css';
import 'swiper/css/free-mode';
import Title from '../Title/Title';
import MissionCard from '../MissionCard/MissionCard';
import missions from '../../data/missions';
import './Missions.css';

const breakpointsParameter = {
  0: {
    slidesPerView: 1,
    spaceBetween: 10,
  },
  480: {
    slidesPerView: 1,
    spaceBetween: 5,
  },
  768: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  1024: {
    slidesPerView: 3,
    spaceBetween: 30,
  },
  1366: {
    slidesPerView: 4,
    spaceBetween: 50,
  },
  1800: {
    slidesPerView: 5,
    spaceBetween: 50,
  },
};

class Missions extends React.Component {
  constructor() {
    super();

    this.state = {
      missionClicked: false,
      mission: {
        name: '',
        year: '',
        country: '',
        destination: '',
        about: '',
      },
    }
  }
  onClickMission = ({ target }) => {
    const missionIndex = parseFloat(target.className.replace(/[^0-9]/g, ''))
    const ourMission = missions.find((_mission, index) => index === missionIndex);
    this.updateMission(ourMission);
    const missionTypewriter = document.querySelector('.mission-info-card');
    missionTypewriter.innerHTML = '';
    this.createWriter(missionTypewriter);
  };

  createWriter = (typewriterDiv) => {
    setTimeout(() => {
      const { about } = this.state.mission;
      const typewriter = new Typewriter(typewriterDiv, {
        strings: about,
        delay: 45,
        autoStart: true,
      });
    }, 500);
  }

  updateMission = (mission) => {
    const { name, year, country, destination, about } = mission;
    this.setState({
      mission: {
        name,
        year,
        country,
        destination,
        about,
      }
    })
  }

  render() {
    return (
      <div className="mission-container">
        <Title headline="Missões" />
        <Swiper
          grabCursor={ true }
          modules={ [FreeMode] }
          className="mySwiper container"
          keyboard={ true }
          breakpoints={ breakpointsParameter }
        >
          {missions.map((mission, index) => (
            <SwiperSlide
              key={ mission.name }
            >
              <MissionCard
                missionIndex={ index }
                name={ mission.name }
                year={ mission.year }
                country={ mission.country }
                destination={ mission.destination }
                missionOnClick={ this.onClickMission }
              />
            </SwiperSlide>
          ))}
          
        </Swiper>
        <section className='mission-info-card' />
      </div>
    );
  }
}

export default Missions;
