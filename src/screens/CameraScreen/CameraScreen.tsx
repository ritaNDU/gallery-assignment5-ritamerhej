import {View, Text, StyleSheet, Alert} from 'react-native';
import React, {useRef} from 'react';
import {Camera, useCameraDevice} from 'react-native-vision-camera';
import {CameraRoll} from '@react-native-camera-roll/camera-roll';
import useManagePermissions from '../../hooks/useManagePermissions';
import useManageUserLocation from '../../hooks/useManageUserLocation';
import {ImageType} from '../../data/image.types';
import {storeImagesInApi} from '../../service/api';
import TakePhotoButton from '../../components/atoms/Buttons/TakePhotoButton';
import styles from './CameraScreen.styles';
import NavigationButton from '../../components/atoms/Buttons/NavigationButton';

const CameraScreen = () => {
  const {hasPermission, handleCameraPermission} = useManagePermissions();
  const device = useCameraDevice('back');
  const camera = useRef<Camera>(null);
  const {currentLocation} = useManageUserLocation();

  const takePhoto = async () => {
    const photo = await camera.current?.takePhoto();
    const imageToAdd: ImageType = {
      id: Math.floor(Math.random() * 10000) + `file://${photo!.path}`,
      uri: {uri: `file://${photo!.path}`},
      location: {
        latitude: currentLocation.latitude,
        longitude: currentLocation.longitude,
      },
    };
    saveImage(`file://${photo!.path}`);
    storeImagesInApi(imageToAdd);
  };

  const saveImage = async (imageUri: string) => {
    await CameraRoll.saveAsset(imageUri, {type: 'photo'}).then(() => {
      Alert.alert('Success', 'Photo saved successfully');
    });
  };

  if (device === null) {
    return (
      <View style={styles.deviceNotSupportedContainer}>
        <Text style={styles.deviceNotSupportedText}>
          Camera feature not supported
        </Text>
      </View>
    );
  }
  return (
    <View style={styles.cameraContainer}>
      {hasPermission ? (
        <>
          <Camera
            photo
            ref={camera}
            style={[StyleSheet.absoluteFill, styles.camera]}
            device={device!}
            isActive={true}
          />
          <View style={styles.buttonContainer}>
            <TakePhotoButton onPress={takePhoto} />
          </View>
        </>
      ) : (
        <View style={styles.permissionButtonContainer}>
          <NavigationButton
            onPress={handleCameraPermission}
            name="Request Camera Access"
          />
        </View>
      )}
    </View>
  );
};

export default CameraScreen;
