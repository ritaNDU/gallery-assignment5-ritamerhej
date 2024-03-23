import {ImageType, LocationType} from '../data/image.types';
import geolib from 'geolib';

export function sortByDistance(
  images: ImageType[],
  currentLocation: LocationType,
) {
  const {getDistance} = geolib;
  const updatedImages = images.sort((image1, image2) => {
    const distanceImage1 = getDistance(image1.location, currentLocation);
    const distanceImage2 = getDistance(image2.location, currentLocation);
    return distanceImage1 > distanceImage2 ? 1 : -1;
  });
  return updatedImages;
}
