import {useContext} from 'react';
import {AppContextType, ImagesContext} from '../store/ImagesContextProvider';
import {Alert, Linking, PermissionsAndroid} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import {LocationType} from '../data/image.types';
import GeolocationResponse, {GeolocationError} from '../data/geolocation.types';

const useManageUserLocation = () => {
  const {currentLocation, setCurrentLocation} = useContext(
    ImagesContext,
  ) as AppContextType;

  async function requestLocationPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Geolocation Permission',
          message: 'Can we access your location?',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === 'granted') {
        return true;
      } else {
        return false;
      }
    } catch (err) {
      return false;
    }
  }

  async function updateUserLocation() {
    const hasLocationPermission = await requestLocationPermission();

    if (hasLocationPermission) {
      Geolocation.getCurrentPosition(
        (position: GeolocationResponse) => {
          const location: LocationType = {
            latitude: position.coords.latitude,
            longitude: position.coords.latitude,
          };
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
