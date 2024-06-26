import {useContext, useEffect, useState} from 'react';
import {sortByDistance} from '../utils/locationUtils';
import useManageImages from './useManageImages';
import useManageUserLocation from './useManageUserLocation';
import {AppContextType, ImagesContext} from '../store/ImagesContextProvider';
import {getImagesFromApi} from '../service/api';

const useManageImagesFetching = () => {
  const {updateUserLocation, currentLocation} = useManageUserLocation();
  const {storeImages, addImages} = useManageImages();
  const {imagesState} = useContext(ImagesContext) as AppContextType;
  const [endReached, setEndReached] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);

  const handleLoadMore = (page: string) => async () => {
    setIsLoading(true);
    const images = await getImagesFromApi(page);
    setIsLoading(false);
    if (images.length === 0 || imagesState.allImages.length % 3 !== 0) {
      setEndReached(true);
      return;
    }
    addImages(images);
  };

  async function handleRefresh() {
    setRefresh(true);
    updateUserLocation();
    setRefresh(false);
  }

  async function handleInitialFetch() {
    setIsLoading(true);
    const images = await getImagesFromApi('1');
    // This is required to have the images always sorted on mount
    // The idea here is to have the images ALWAYS sorted on mount but have the user refresh to sort when loading new images
    const sortedImages = sortByDistance(images, currentLocation);
    setIsLoading(false);
    storeImages(sortedImages);
  }
  useEffect(() => {
    handleInitialFetch();
    updateUserLocation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const sortedImages = sortByDistance(imagesState.allImages, currentLocation);
    storeImages(sortedImages);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentLocation]);

  return {endReached, isLoading, refresh, handleLoadMore, handleRefresh};
};

export default useManageImagesFetching;
