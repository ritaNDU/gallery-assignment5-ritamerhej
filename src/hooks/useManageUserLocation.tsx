import {useContext} from 'react';
import {AppContextType, ImagesContext} from '../store/ImagesContextProvider';
import {Alert, Linking} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import {LocationType} from '../data/image.types';
import GeolocationResponse, {GeolocationError} from '../data/geolocation.types';
import useManagePermissions from './useManagePermissions';

const useManageUserLocation = () => {
  const {currentLocation, setCurrentLocation} = useContext(
    ImagesContext,
  ) as AppContextType;
  const {requestLocationPermission} = useManagePermissions();

  async function updateUserLocation(callback?: () => void) {
    const hasLocationPermission = await requestLocationPermission();

    if (hasLocationPermission) {
      Geolocation.getCurrentPosition(
        (position: GeolocationResponse) => {
          const location: LocationType = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          };
          if (callback) {
            callback();
          }
          setCurrentLocation(location);
        },
        (error: GeolocationError) => Alert.alert(error.message),
        {
          enableHighAccuracy: true,
        },
      );
    } else {
      Alert.alert(
        'To continue using this app, you should give it location permissions.',
      );
      Linking.openSettings();
    }
  }

  return {currentLocation, updateUserLocation};
};

export default useManageUserLocation;
