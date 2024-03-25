import {Pressable, Text, View} from 'react-native';
import React from 'react';

type Props = {
  onPress: () => void;
};

const OpenGalleryButton = ({onPress}: Props) => {
  return (
    <View>
      <Pressable onPress={onPress}>
        <Text>Gallery </Text>
      </Pressable>
    </View>
  );
};

export default OpenGalleryButton;
