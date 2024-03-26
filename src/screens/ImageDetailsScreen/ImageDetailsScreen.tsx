import {Alert, ScrollView} from 'react-native';
import React from 'react';
import {RouteProp, useRoute} from '@react-navigation/native';
import {MainNavigatorStackPropsList} from '../../navigation/MainNavigator.types';
import ImageDetails from '../../components/organisms/ImageDetails';
import commonStyles from '../Common.styles';
import styles from './ImageDetailsScreen.styles';
import FavoritesButton from '../../components/atoms/Buttons/FavoritesButton';
import {getImageById} from '../../utils/imagesUtils';
import useManageAsyncStorage from '../../hooks/useManageAsyncStorage';
import useManageImages from '../../hooks/useManageImages';
import {ImageType} from '../../data/image.types';

const ImageDetailsScreen = () => {
  const {params} =
    useRoute<RouteProp<MainNavigatorStackPropsList, 'GalleryScreen'>>();
  const {imageId} = params ?? {imageId: ''};
  const {imagesState} = useManageImages();
  const image = getImageById(imagesState.allImages, imageId) as ImageType;
  const {storeItem} = useManageAsyncStorage();

  async function handlePress() {
    await storeItem(image);
    Alert.alert('Image added to favorites');
  }
  return (
    <ScrollView style={[commonStyles.container, styles.container]}>
      <ImageDetails imageId={imageId} />
      <FavoritesButton onPress={handlePress} name="Add to Favorites" />
    </ScrollView>
  );
};

export default ImageDetailsScreen;
