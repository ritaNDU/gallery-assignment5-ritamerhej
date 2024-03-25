import {Text} from 'react-native';
import React from 'react';
import styles from './Buttons.styles';
import ButtonTemplate from './ButtonsTemplate';

type Props = {
  onPress: () => void;
};

const FavoritesButton = ({onPress}: Props) => {
  return (
    <ButtonTemplate style={[styles.favorites]} onPress={onPress}>
      <Text style={styles.favoritesText}>Favorites</Text>
    </ButtonTemplate>
  );
};

export default FavoritesButton;
