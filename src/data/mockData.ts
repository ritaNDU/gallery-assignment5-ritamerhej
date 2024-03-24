import {sortByDistance} from '../utils/locationUtils';
import {ImageType} from './image.types';

const images: ImageType[] = [
  {
    id: JSON.stringify(Math.floor(Math.random() * 1000)),
    uri: require('../assets/image1.png'),
    location: {latitude: 33.85501554812453, longitude: 35.56966457854076},
  },
  {
    id: JSON.stringify(Math.floor(Math.random() * 1000)),
    uri: require('../assets/image2.png'),
    location: {latitude: 33.91256052589716, longitude: 35.582545657650215},
  },
  {
    id: JSON.stringify(Math.floor(Math.random() * 1000)),
    uri: require('../assets/image3.png'),
    location: {latitude: 33.90337339284133, longitude: 35.56997594577486},
  },
];

export default sortByDistance(images, {
  latitude: 33.91256052589716,
  longitude: 35.582545657650215,
});
