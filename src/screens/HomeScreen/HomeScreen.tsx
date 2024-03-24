import {View} from 'react-native';
import React from 'react';
import OpenGalleryButton from '../../components/atoms/Buttons/OpenGalleryButton';
import {useNavigation} from '@react-navigation/native';
import {MainNavigatorNavigationProps} from '../../navigation/MainNavigator.types';
import PickImageButton from '../../components/atoms/Buttons/PickImageButton';
import styles from './HomeScreen.styles';

const HomeScreen = () => {
  const navigation = useNavigation<MainNavigatorNavigationProps>();

  function handleGoToGallery() {
    navigation.navigate('Gallery');
  }

  return (
    <View style={styles.container}>
      <OpenGalleryButton onPress={handleGoToGallery} />
      <PickImageButton onPress={() => console.log('Pick an image now')} />
    </View>
  );
};

export default HomeScreen;
