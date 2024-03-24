import {Pressable, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import useManageUserLocation from '../../../hooks/useManageUserLocation';

type Props = {
  onPress: () => void;
};

const OpenGalleryButton = ({onPress}: Props) => {
  const {updateUserLocation} = useManageUserLocation();
  useEffect(() => {
    updateUserLocation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View>
      <Pressable onPress={onPress}>
        <Text>OpenGalleryButton </Text>
      </Pressable>
    </View>
  );
};

export default OpenGalleryButton;
