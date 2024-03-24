import {Text, Pressable} from 'react-native';
import React from 'react';

type Props = {
  handleClose: () => void;
};
const CloseModalButton = ({handleClose}: Props) => {
  return (
    <Pressable onPress={handleClose}>
      <Text>X</Text>
    </Pressable>
  );
};

export default CloseModalButton;
