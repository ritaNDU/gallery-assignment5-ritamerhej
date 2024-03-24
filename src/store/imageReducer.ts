import {ImageType} from '../data/image.types';

export type ImageState = {
  allImages: ImageType[];
};

export type Action =
  | {
      type: 'storeImages';
      payload: {images: ImageType[]};
    }
  | {
      type: 'addImages';
      payload: {images: ImageType[]};
    }
  | {type: 'removeImage'; payload: {imageId: string}};

export function imageReducer(state: ImageState, action: Action) {
  const {type} = action;
  switch (type) {
    case 'storeImages': {
      return {...state, allImages: action.payload.images};
    }

    case 'addImages': {
      const updatedImages: ImageType[] = [
        ...state.allImages,
        ...action.payload.images,
      ];
      return {...state, allImages: updatedImages};
    }

    case 'removeImage': {
      const updatedImages = state.allImages.filter(
        image => image.id !== action.payload.imageId,
      );
      return {...state, allImages: updatedImages};
    }
    default:
      return state;
  }
}
