import {View} from 'react-native';
import React from 'react';
import {RouteProp, useRoute} from '@react-navigation/native';
import {MainNavigatorStackPropsList} from '../../navigation/MainNavigator.types';
import ImageDetails from '../../components/organisms/ImageDetails';
import FavoritesButton from '../../components/atoms/Buttons/FavoritesButton';
import useManageAsyncStorage from '../../hooks/useManageAsyncStorage';
import {ImageType} from '../../data/image.types';
import {getImageById} from '../../utils/imagesUtils';
import useManageImages from '../../hooks/useManageImages';

const ImageDetailsScreen = () => {
  const {params} =
    useRoute<RouteProp<MainNavigatorStackPropsList, 'Gallery'>>();
  const {imagesState} = useManageImages();
  const {storeItem} = useManageAsyncStorage();
  const {imageId} = params ?? {imageId: ''};
  const image: ImageType = getImageById(
    imagesState.allImages,
    imageId,
  ) as ImageType;

  async function handleAddToFavorites() {
    await storeItem(image);
  }

  return (
    <View>
      <ImageDetails imageId={imageId} />
      <FavoritesButton name="Favorite" onPress={handleAddToFavorites} />
    </View>
  );
};

export default ImageDetailsScreen;
