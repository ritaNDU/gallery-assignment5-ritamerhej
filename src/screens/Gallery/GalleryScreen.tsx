import {View} from 'react-native';
import React from 'react';
import ImagesList from '../../components/organisms/ImagesList';

const GalleryScreen = () => {
  return (
    <View style={{padding: 10}}>
      <ImagesList />
    </View>
  );
};

export default GalleryScreen;
