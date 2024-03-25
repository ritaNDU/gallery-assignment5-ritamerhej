import {View} from 'react-native';
import React from 'react';
import {RouteProp, useRoute} from '@react-navigation/native';
import {MainNavigatorStackPropsList} from '../../navigation/MainNavigator.types';
import ImageDetails from '../../components/organisms/ImageDetails';
import commonStyles from '../Common.styles';
import styles from './ImageDetailsScreen.styles';

const ImageDetailsScreen = () => {
  const {params} =
    useRoute<RouteProp<MainNavigatorStackPropsList, 'GalleryScreen'>>();
  const {imageId} = params ?? {imageId: ''};

  return (
    <View style={[commonStyles.container, styles.container]}>
      <ImageDetails imageId={imageId} />
    </View>
  );
};

export default ImageDetailsScreen;
