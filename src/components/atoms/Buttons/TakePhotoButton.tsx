import {Pressable, View} from 'react-native';
import React from 'react';
import styles from './Buttons.styles';

type Props = {
  onPress: () => void;
};

const TakePhotoButton = ({onPress}: Props) => {
  return (
    <View>
      <Pressable style={styles.captureButton} onPress={onPress} />
    </View>
  );
};

export default TakePhotoButton;
