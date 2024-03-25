import {
  View,
  Text,
  StyleSheet,
  Alert,
  Linking,
  SafeAreaView,
  Image,
  Pressable,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {Camera, useCameraDevice} from 'react-native-vision-camera';
import {CameraRoll} from '@react-native-camera-roll/camera-roll';
import useManagePermissions from '../../hooks/useManagePermissions';
import useManageUserLocation from '../../hooks/useManageUserLocation';
import useManageImages from '../../hooks/useManageImages';
import {ImageType} from '../../data/image.types';

const CameraScreen = () => {
  const {hasPermission, handleCameraPermission} = useManagePermissions();
  const device = useCameraDevice('back');
  const camera = useRef<Camera>(null);
  const {currentLocation} = useManageUserLocation();
  const {addImages} = useManageImages();

  const [capturedImage, setCapturedImage] = useState<null | string>(null);

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
    addImages([imageToAdd]);
    setCapturedImage(`file://${photo!.path}`);
    saveImage(`file://${photo!.path}`);
  };

  const saveImage = async (imageUri: string) => {
    await CameraRoll.saveAsset(imageUri, {type: 'photo'}).then(() => {
      Alert.alert('Success', 'Photo saved successfully');
    });
  };

  if (device === null) {
    return (
      <View>
        <Text style={{fontSize: 20, color: 'red'}}>
          Camera feature not supported
        </Text>
      </View>
    );
  }

  return (
    <View style={{height: '100%'}}>
      {hasPermission ? (
        <Camera
          photo
          ref={camera}
          style={[StyleSheet.absoluteFill, {zIndex: -1}]}
          device={device!}
          isActive={true}
        />
      ) : (
        <Pressable onPress={handleCameraPermission}>
          <Text style={{fontSize: 20, color: '#000'}}>
            Request camera access
          </Text>
        </Pressable>
      )}

      <View style={{position: 'absolute', bottom: 100}}>
        <Pressable onPress={takePhoto}>
          <Text style={{fontSize: 20, color: '#fff'}}>Take photo</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default CameraScreen;
