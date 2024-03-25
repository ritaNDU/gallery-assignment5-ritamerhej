import {Text} from 'react-native';
import React from 'react';
import styles from './Buttons.styles';
import ButtonTemplate from './ButtonsTemplate';

type Props = {
  onPress: () => void;
};

const GoToCameraButton = ({onPress}: Props) => {
  return (
    <ButtonTemplate style={styles.container} onPress={onPress}>
      <Text style={styles.text}>Take a Picture </Text>
    </ButtonTemplate>
  );
};

export default GoToCameraButton;
