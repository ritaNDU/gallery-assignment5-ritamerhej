import {Pressable, Text, View} from 'react-native';
import React from 'react';

type Props = {
  onPress: () => void;
};

const GoToCameraButton = ({onPress}: Props) => {
  return (
    <View>
      <Pressable onPress={onPress}>
        <Text>Take a Picture </Text>
      </Pressable>
    </View>
  );
};

export default GoToCameraButton;
