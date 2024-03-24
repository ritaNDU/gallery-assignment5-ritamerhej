import {ImageType} from '../data/image.types';

export function getImageById(allImages: ImageType[], imageId: string) {
  return allImages.find(image => image.id === imageId);
}
