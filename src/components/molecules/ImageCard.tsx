import {Image, ImageSourcePropType, Pressable} from 'react-native';
import React from 'react';
import styles from './molecules.styles';

type Props = {
  imageUri: ImageSourcePropType;
  onPress?: () => void;
};

const ImageCard = ({imageUri, onPress}: Props) => {
  return (
    <Pressable onPress={onPress} style={styles.card}>
      <Image source={imageUri} style={styles.image} resizeMode="contain" />
    </Pressable>
  );
};

export default ImageCard;
