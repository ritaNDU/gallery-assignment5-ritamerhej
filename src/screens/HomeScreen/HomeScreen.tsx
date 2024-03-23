import {View} from 'react-native';
import React from 'react';
import OpenGalleryButton from '../../components/atoms/Buttons/OpenGalleryButton';
import {useNavigation} from '@react-navigation/native';
import {MainNavigatorNavigationProps} from '../../navigation/MainNavigator.types';

const HomeScreen = () => {
  const navigation = useNavigation<MainNavigatorNavigationProps>();

  function handleGoToGallery() {
    navigation.navigate('Gallery');
  }

  return (
    <View>
      <OpenGalleryButton onPress={handleGoToGallery} />
    </View>
  );
};

export default HomeScreen;
