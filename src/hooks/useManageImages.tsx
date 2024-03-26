import {useContext} from 'react';
import {AppContextType, ImagesContext} from '../store/ImagesContextProvider';
import {ImageType} from '../data/image.types';

const useManageImages = () => {
  const {imagesState, dispatch} = useContext(ImagesContext) as AppContextType;

  function storeImages(imagesToStore: ImageType[]) {
    dispatch({type: 'storeImages', payload: {images: imagesToStore}});
  }
  function addImages(imagesToAdd: ImageType[]) {
    dispatch({type: 'addImages', payload: {images: imagesToAdd}});
  }
  function removeImage(imageId: string) {
    dispatch({type: 'removeImage', payload: {imageId: imageId}});
  }

  return {imagesState, storeImages, addImages, removeImage};
};

export default useManageImages;
