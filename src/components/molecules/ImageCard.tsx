import {Image, ImageProps, Pressable} from 'react-native';
import React from 'react';

type Props = {
  imageUri: ImageProps;
  onPress: () => void;
};

const ImageCard = ({imageUri, onPress}: Props) => {
  return (
    <Pressable onPress={onPress}>
      <Image source={imageUri} />
    </Pressable>
  );
};

export default ImageCard;
