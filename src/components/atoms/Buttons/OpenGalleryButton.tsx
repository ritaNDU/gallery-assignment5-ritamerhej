import {Text} from 'react-native';
import React from 'react';
import styles from './Buttons.styles';
import ButtonTemplate from './ButtonsTemplate';

type Props = {
  onPress: () => void;
};

const OpenGalleryButton = ({onPress}: Props) => {
  return (
    <ButtonTemplate style={styles.container} onPress={onPress}>
      <Text style={styles.text}>Gallery </Text>
    </ButtonTemplate>
  );
};

export default OpenGalleryButton;
