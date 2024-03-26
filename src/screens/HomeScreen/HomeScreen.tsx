import {Alert, Linking, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {MainNavigatorNavigationProps} from '../../navigation/MainNavigator.types';

import styles from './HomeScreen.styles';
import {ImageType, LocationType} from '../../data/image.types';
import useManagePermissions from '../../hooks/useManagePermissions';
import useManageUserLocation from '../../hooks/useManageUserLocation';
import FavoritesButton from '../../components/atoms/Buttons/FavoritesButton';
import {storeImagesInApi} from '../../service/api';
import ImagePicker from 'react-native-image-crop-picker';
import NavigationButton from '../../components/atoms/Buttons/NavigationButton';

const HomeScreen = () => {
  const navigation = useNavigation<MainNavigatorNavigationProps>();
  const {currentLocation} = useManageUserLocation();
  const {askReadStoragePermissions, askWriteStoragePermissions} =
    useManagePermissions();

  function handleGoToGallery() {
    navigation.navigate('GalleryScreen');
  }
  async function handlePickImage() {
    const hasReadStoragePermission = await askReadStoragePermissions();
    const hasWriteStoragePermission = await askWriteStoragePermissions();

    if (hasReadStoragePermission && hasWriteStoragePermission) {
      try {
        const result = await ImagePicker.openPicker({
          width: 300,
          height: 400,
          includeExif: true,
        }).catch(error => console.log(error));
        if (result) {
          const location: LocationType =
            result.exif?.Latitude && result.exif?.Longitude
              ? {
                  longitude: result.exif?.Longitude,
                  latitude: result.exif?.Latitude,
                }
              : currentLocation;
          const imageToAdd: ImageType = {
            id: `${Math.floor(Math.random() * 10000)}${
              result.creationDate as string
            }`,
            uri: {uri: result.path},
            location: location,
          };
          storeImagesInApi(imageToAdd);
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
      <NavigationButton name="Gallery" onPress={handleGoToGallery} />
      <NavigationButton name="Pick an Image" onPress={handlePickImage} />
      <NavigationButton name="Take a Picture" onPress={handleGoToCamera} />
      <FavoritesButton name="Favorites" onPress={handleGoToFavorites} />
    </View>
  );
};

export default HomeScreen;
