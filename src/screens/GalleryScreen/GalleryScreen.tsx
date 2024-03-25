import {View} from 'react-native';
import React from 'react';
import ImagesList from '../../components/organisms/ImagesList';
import commonStyles from '../Common.styles';
import styles from './Gallery.styles';

const GalleryScreen = () => {
  return (
    <View style={[commonStyles.container, styles.container]}>
      <ImagesList />
    </View>
  );
};

export default GalleryScreen;
