import {Text} from 'react-native';
import React from 'react';
import styles from './Buttons.styles';
import ButtonTemplate from './ButtonsTemplate';

type Props = {
  onPress: () => void;
  name: string;
};

const FavoritesButton = ({onPress, name}: Props) => {
  return (
    <ButtonTemplate style={[styles.favorites]} onPress={onPress}>
      <Text style={styles.favoritesText}>{name}</Text>
    </ButtonTemplate>
  );
};

export default FavoritesButton;
