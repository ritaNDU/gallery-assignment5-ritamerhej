import {View} from 'react-native';
import React from 'react';
import {RouteProp, useRoute} from '@react-navigation/native';
import {MainNavigatorStackPropsList} from '../../navigation/MainNavigator.types';
import ImageDetails from '../../components/organisms/ImageDetails';

const ImageDetailsScreen = () => {
  const {params} =
    useRoute<RouteProp<MainNavigatorStackPropsList, 'Gallery'>>();
  const {imageId} = params ?? {imageId: ''};
  return (
    <View>
      <ImageDetails imageId={imageId} />
    </View>
  );
};

export default ImageDetailsScreen;
