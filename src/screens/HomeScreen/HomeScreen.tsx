import {Alert, Linking, View} from 'react-native';
import React from 'react';
import OpenGalleryButton from '../../components/atoms/Buttons/OpenGalleryButton';
import {useNavigation} from '@react-navigation/native';
import {MainNavigatorNavigationProps} from '../../navigation/MainNavigator.types';
import PickImageButton from '../../components/atoms/Buttons/PickImageButton';

import styles from './HomeScreen.styles';
import {
  ImageLibraryOptions,
  launchImageLibrary,
} from 'react-native-image-picker';
import useManageImages from '../../hooks/useManageImages';
import {ImageType, LocationType} from '../../data/image.types';
import useManagePermissions from '../../hooks/useManagePermissions';
import useManageUserLocation from '../../hooks/useManageUserLocation';
import TakeImageButton from '../../components/atoms/Buttons/TakeImageButton';
import FavoritesButton from '../../components/atoms/Buttons/FavoritesButton';

const HomeScreen = () => {
  const navigation = useNavigation<MainNavigatorNavigationProps>();
  const {addImages} = useManageImages();
  const {currentLocation} = useManageUserLocation();
  const {askReadStoragePermissions, askWriteStoragePermissions} =
    useManagePermissions();

  function handleGoToGallery() {
    navigation.navigate('Gallery');
  }
  async function handlePickImage() {
    const hasReadStoragePermission = await askReadStoragePermissions();
    const hasWriteStoragePermission = await askWriteStoragePermissions();

    if (hasReadStoragePermission && hasWriteStoragePermission) {
      const options: ImageLibraryOptions = {
        mediaType: 'photo',
        includeExtra: true,
        maxWidth: 200,
        maxHeight: 200,
        includeBase64: true,
      };
      try {
        const result = await launchImageLibrary(options);
        if (result && result.assets && !result.didCancel) {
          const location: LocationType = currentLocation;
          const imageToAdd: ImageType = {
            id: `${Math.floor(Math.random() * 10000)}${
              result.assets[0].id as string
            }`,
            uri: {uri: 'data:image/jpeg;base64,' + result.assets[0].base64},
            location: location,
          };
          addImages([imageToAdd]);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      Alert.alert(
        'To continue using this app, you should give it location permissions.',
      );
      Linking.openSettings();
    }
  }

  function handleGoToCamera() {
    navigation.navigate('CameraScreen');
  }
  function handleGoToFavorites() {
    navigation.navigate('FavoritesScreen');
  }

  return (
    <View style={styles.container}>
      <OpenGalleryButton onPress={handleGoToGallery} />
      <PickImageButton onPress={handlePickImage} />
      <TakeImageButton onPress={handleGoToCamera} />
      <FavoritesButton name="Favorites" onPress={handleGoToFavorites} />
    </View>
  );
};

export default HomeScreen;
