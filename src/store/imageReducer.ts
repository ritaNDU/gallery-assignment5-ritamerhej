import {ImageType, LocationType} from '../data/image.types';
import {sortByDistance} from '../utils/locationUtils';

export type ImageState = {
  allImages: ImageType[];
};

export type Action =
  | {
      type: 'storeImages';
      payload: {images: ImageType[]; currentLocation: LocationType};
    }
  | {
      type: 'addImage';
      payload: {image: ImageType; currentLocation: LocationType};
    }
  | {type: 'removeImage'; payload: {imageId: string}}
  | {type: 'sort'; payload: {currentLocation: LocationType}};

export function imageReducer(state: ImageState, action: Action) {
  const {type} = action;
  switch (type) {
    case 'storeImages': {
      const storedImages = sortByDistance(
        action.payload.images,
        action.payload.currentLocation,
      );
      return {...state, allImages: storedImages};
    }

    case 'addImage': {
      let updatedImages: ImageType[] = [
        ...state.allImages,
        action.payload.image,
      ];
      updatedImages = sortByDistance(
        updatedImages,
        action.payload.currentLocation,
      );
      return {...state, allImages: updatedImages};
    }

    case 'removeImage': {
      const updatedImages = state.allImages.filter(
        image => image.id !== action.payload.imageId,
      );
      return {...state, allImages: updatedImages};
    }
    case 'sort': {
      const updatedImages = sortByDistance(
        state.allImages,
        action.payload.currentLocation,
      );
      return {...state, allImages: updatedImages};
    }
    default:
      return state;
  }
}
