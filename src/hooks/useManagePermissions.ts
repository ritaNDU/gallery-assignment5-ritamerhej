import {Alert, Linking, PermissionsAndroid} from 'react-native';
import Permissions from 'react-native-permissions';
import {useCameraPermission} from 'react-native-vision-camera';

const useManagePermissions = () => {
  const {requestPermission, hasPermission} = useCameraPermission();
  const handleCameraPermission = async () => {
    const isAccessGranted = await requestPermission();

    if (!isAccessGranted) {
      Alert.alert('Permission required', 'Open settings to grant permission', [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Open settings',
          style: 'default',
          onPress: async () => {
            await Linking.openSettings();
          },
        },
      ]);
      return;
    }
  };

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

  // Here code is repeated because I feel it's safer. To make sure no typos are introduced while passing permissions name.
  // That way, the user just gets the pemission fucntions needed without bothering about what parameters to pass.
  async function askReadStoragePermissions() {
    const result = await Permissions.check(
      'android.permission.READ_EXTERNAL_STORAGE',
    );

    if (result === 'blocked' || result === 'denied') {
      const granted = await Permissions.request(
        'android.permission.READ_EXTERNAL_STORAGE',
      );
      if (granted === 'granted') {
        return true;
      }
    } else if (result === 'granted') {
      return true;
    } else {
      return false;
    }
  }
  async function askWriteStoragePermissions() {
    const result = await Permissions.check(
      'android.permission.WRITE_EXTERNAL_STORAGE',
    );

    if (result === 'blocked' || result === 'denied') {
      const granted = await Permissions.request(
        'android.permission.WRITE_EXTERNAL_STORAGE',
      );
      if (granted === 'granted') {
        return true;
      }
    } else if (result === 'granted') {
      return true;
    } else {
      return false;
    }
  }

  return {
    requestLocationPermission,
    askReadStoragePermissions,
    askWriteStoragePermissions,
    hasPermission,
    handleCameraPermission,
  };
};

export default useManagePermissions;
