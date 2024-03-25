import {Pressable, Text, View} from 'react-native';
import React from 'react';

type Props = {
  onPress: () => void;
};

const FavoritesButton = ({onPress}: Props) => {
  return (
    <View>
      <Pressable onPress={onPress}>
        <Text>Favorites</Text>
      </Pressable>
    </View>
  );
};

export default FavoritesButton;
