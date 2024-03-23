import {Pressable, Text, View} from 'react-native';
import React from 'react';

type Props = {
  onPress: () => void;
};

const TakeImageButton = ({onPress}: Props) => {
  return (
    <View>
      <Pressable onPress={onPress}>
        <Text>TakeImageButton </Text>
      </Pressable>
    </View>
  );
};

export default TakeImageButton;
