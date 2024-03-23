import {Pressable, Text, View} from 'react-native';
import React from 'react';

type Props = {
  onPress: () => void;
};

const HelpButton = ({onPress}: Props) => {
  return (
    <View>
      <Pressable onPress={onPress}>
        <Text>HelpButton</Text>
      </Pressable>
    </View>
  );
};

export default HelpButton;
