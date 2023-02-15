import MercurioImg from '../images/Mercurio.png';
import VenusImg from '../images/Venus.png';
import TerraImg from '../images/Terra.png';
import MarteImg from '../images/Marte.png';
import JupiterImg from '../images/Jupiter.png';
import SaturnoImg from '../images/Saturno.png';
import Uranoimg from '../images/Urano.png';
import Netunoimg from '../images/Netuno.png';

const Planets = [
  {
    name: 'Mercúrio',
    image: MercurioImg,
    description: {
      distanceFromSun: '58 milhões de km',
      orbitalPeriod: '88 dias',
      radius: '2.439,7 km',
      mass: '3,285 x 10^23 kg',
      lengthOfDay: '58 dias, 15 horas e 30 min'
    },
  },
  {
    name: 'Vênus',
    image: VenusImg,
    description: {
      distanceFromSun: '108.2 milhões de km',
      orbitalPeriod: '225 dias',
      radius: '6.051,8 km',
      mass: '4,867 x 10^24 kg',
      lengthOfDay: '243 dias, 0 horas e 0 min'
    },
  },
  {
    name: 'Terra',
    image: TerraImg,
    description: {
      distanceFromSun: '149,6 milhões de km',
      orbitalPeriod: '365 dias',
      radius: '6.371,0 km',
      mass: '5,972 x 10^24 kg',
      lengthOfDay: 'Aproximadamente 24 horas'
    },
  },
  {
    name: 'Marte',
    image: MarteImg,
    description: {
      distanceFromSun: '227,9 milhões de km',
      orbitalPeriod: '687 dias',
      radius: '3.389,5 km',
      mass: '6,39 x 10^23 kg',
      lengthOfDay: '1 dia, 0 horas e 37 min'
    },
  },
  {
    name: 'Júpiter',
    image: JupiterImg,
    description: {
      distanceFromSun: '778,5 milhões de km',
      orbitalPeriod: '12 anos',
      radius: '69.911 km',
      mass: '1,898 x 10^27 kg',
      lengthOfDay: '9 horas e 56 min'
    },
  },
  {
    name: 'Saturno',
    image: SaturnoImg,
    description: {
      distanceFromSun: '1,434 bilhão de km',
      orbitalPeriod: '29 anos',
      radius: '58.232 km',
      mass: '5,683 x 10^26 kg',
      lengthOfDay: '10 horas e 34 min'
    },
  },
  {
    name: 'Urano',
    image: Uranoimg,
    description: {
      distanceFromSun: '2,871 bilhões de km',
      orbitalPeriod: '84 anos',
      radius: '25.362 km',
      mass: '8,681 x 10^25 kg',
      lengthOfDay: '17 horas e 14 min'
    },
  },
  {
    name: 'Netuno',
    image: Netunoimg,
    description: {
      distanceFromSun: '4,495 bilhões de km',
      orbitalPeriod: '165 anos',
      radius: '24.622 km',
      mass: '1,024x 10^26 kg',
      lengthOfDay: '16 horas e 6 min'
    },
  },
];

export default Planets;
