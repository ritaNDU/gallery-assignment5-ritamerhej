import {Image, ImageSourcePropType, Pressable, View} from 'react-native';
import React from 'react';
import styles from './molecules.styles';

type Props = {
  imageUri: ImageSourcePropType;
  onPress?: () => void;
};

const FavoriteImageCard = ({imageUri, onPress}: Props) => {
  if (imageUri === null) {
    return <></>;
  }
  return (
    <View>
      <Pressable onPress={onPress} style={[styles.favoriteCard]}>
        <Image source={imageUri} style={styles.image} resizeMode="contain" />
      </Pressable>
    </View>
  );
};

export default FavoriteImageCard;
