/* eslint-disable react/jsx-boolean-value */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper';
// import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md';
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
          {/* <MdOutlineArrowBackIos className="left-arrow" /> */}
          {missions.map((mission) => (
            <SwiperSlide
              key={ mission.name }
            >
              <MissionCard
                name={ mission.name }
                year={ mission.year }
                country={ mission.country }
                destination={ mission.destination }
              />
            </SwiperSlide>
          ))}
          {/* <MdOutlineArrowForwardIos className="right-arrow" /> */}
        </Swiper>
      </div>
    );
  }
}

export default Missions;
