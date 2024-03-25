import {Pressable, Text, View} from 'react-native';
import React from 'react';
import styles, {buttonsHitSlop} from './Buttons.styles';

type Props = {
  onPress: () => void;
};

const PickImageButton = ({onPress}: Props) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={onPress} hitSlop={buttonsHitSlop}>
        <Text style={styles.text}>Pick an Image</Text>
      </Pressable>
    </View>
  );
};

export default PickImageButton;
