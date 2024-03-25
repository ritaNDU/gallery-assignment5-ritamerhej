import {Pressable, Text, View} from 'react-native';
import React from 'react';

type Props = {
  onPress: () => void;
  name: string;
};

const FavoritesButton = ({onPress, name}: Props) => {
  return (
    <View>
      <Pressable onPress={onPress}>
        <Text>{name} </Text>
      </Pressable>
    </View>
  );
};

export default FavoritesButton;
