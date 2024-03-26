import {Pressable} from 'react-native';
import React from 'react';
import styles from './Buttons.styles';

type Props = {
  onPress: () => void;
};

const TakePhotoButton = ({onPress}: Props) => {
  return <Pressable style={styles.captureButton} onPress={onPress} />;
};

export default TakePhotoButton;
