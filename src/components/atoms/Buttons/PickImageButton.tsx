import {Pressable, Text, View} from 'react-native';
import React from 'react';

type Props = {
  onPress: () => void;
};

const PickImageButton = ({onPress}: Props) => {
  return (
    <View>
      <Pressable onPress={onPress}>
        <Text>Pick an Image</Text>
      </Pressable>
    </View>
  );
};

export default PickImageButton;
