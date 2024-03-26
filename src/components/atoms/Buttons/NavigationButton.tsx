import {Text} from 'react-native';
import React from 'react';
import styles from './Buttons.styles';
import ButtonTemplate from './ButtonsTemplate';

type Props = {
  onPress: () => void;
  name: string;
};

const NavigationButton = ({onPress, name}: Props) => {
  return (
    <ButtonTemplate style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{name}</Text>
    </ButtonTemplate>
  );
};

export default NavigationButton;
