import {ImageType, LocationType} from '../data/image.types';
import {getDistance} from 'geolib';

export function sortByDistance(
  images: ImageType[],
  currentLocation: LocationType,
) {
  const updatedImages = images.sort((image1, image2) => {
    const distanceImage1 = getDistance(image1.location, currentLocation);
    const distanceImage2 = getDistance(image2.location, currentLocation);
    if (distanceImage1 === distanceImage2) {
      if (image1.id > image2.id) {
        return 1;
      } else {
        return -1;
      }
    }
    return distanceImage1 > distanceImage2 ? 1 : -1;
  });
  return updatedImages;
}
