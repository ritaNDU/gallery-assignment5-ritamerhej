import {Image, ImageSourcePropType, Pressable} from 'react-native';
import React from 'react';

type Props = {
  imageUri: ImageSourcePropType;
  onPress?: () => void;
};

const ImageCard = ({imageUri, onPress}: Props) => {
  return (
    <Pressable
      onPress={onPress}
      style={{
        marginBottom: 2,
        alignItems: 'center',
      }}>
      <Image
        source={imageUri}
        style={{width: '80%', height: 300}}
        resizeMode="cover"
      />
    </Pressable>
  );
};

export default ImageCard;
