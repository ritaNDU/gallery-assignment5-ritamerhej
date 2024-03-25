import {
  View,
  FlatList,
  ListRenderItemInfo,
  Text,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {AppContextType, ImagesContext} from '../../store/ImagesContextProvider';
import ImageCard from '../molecules/ImageCard';
import {ImageType} from '../../data/image.types';
import {useNavigation} from '@react-navigation/native';
import {MainNavigatorNavigationProps} from '../../navigation/MainNavigator.types';
import {sortByDistance} from '../../utils/locationUtils';
import useManageUserLocation from '../../hooks/useManageUserLocation';
import {getImagesFromApi, LIMIT} from '../../service/api';
import useManageImages from '../../hooks/useManageImages';

const ImagesList = () => {
  const {updateUserLocation, currentLocation} = useManageUserLocation();
  const {imagesState} = useContext(ImagesContext) as AppContextType;
  const navigation = useNavigation<MainNavigatorNavigationProps>();
  const {storeImages, addImages} = useManageImages();
  const [endReached, setEndReached] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);

  const allImages = imagesState.allImages;
  const PAGE_TO_FETCH =
    allImages.length >= 3 ? allImages.length / LIMIT + 1 : 1;

  const handleImagePress = (imageId: string) => () => {
    navigation.navigate('ImageDetailsScreen', {imageId: imageId});
  };

  const handleLoadMore = (page: string) => async () => {
    setIsLoading(true);
    const images = await getImagesFromApi(page);
    setIsLoading(false);
    if (images.length === 0) {
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
    setIsLoading(false);
    storeImages(images);
  }
  function renderImage({item}: ListRenderItemInfo<ImageType>) {
    if (item == null) {
      return <></>;
    }
    return (
      <ImageCard imageUri={item.uri} onPress={handleImagePress(item.id)} />
    );
  }
  useEffect(() => {
    updateUserLocation(() =>
      sortByDistance(imagesState.allImages, currentLocation),
    );
    handleInitialFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const sortedImages = sortByDistance(imagesState.allImages, currentLocation);
    storeImages(sortedImages);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentLocation]);

  return (
    <View>
      {allImages.length > 0 ? (
        <FlatList
          data={allImages}
          renderItem={renderImage}
          ListFooterComponent={
            <Pressable onPress={handleLoadMore(JSON.stringify(PAGE_TO_FETCH))}>
              {isLoading ? (
                <ActivityIndicator size="small" />
              ) : endReached ? (
                <Text>No more images to show</Text>
              ) : (
                <Text>Load More</Text>
              )}
            </Pressable>
          }
          refreshing={refresh}
          onRefresh={handleRefresh}
        />
      ) : (
        <Text>
          No images yet. Add some images from your gallery or take some photos.
        </Text>
      )}
    </View>
  );
};

export default ImagesList;
