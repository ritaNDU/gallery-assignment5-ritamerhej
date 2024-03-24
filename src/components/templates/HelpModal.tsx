import {Text, View} from 'react-native';
import React from 'react';
import ModalTemplate from './ModalTemplate';

type Props = {
  closeModal: () => void;
  visible: boolean;
};
const HelpModal = ({visible, closeModal}: Props) => {
  return (
    <ModalTemplate handleClose={closeModal} isVisible={visible}>
      <View>
        <Text>Help</Text>
        <Text> How to use LingoPrunto?</Text>
        <View>
          <Text>1. Choose a course you like.</Text>
          <Text>2. Learn all the lessons.</Text>
          <Text>3. Pass the exercise at the end of each lesson.</Text>
          <Text>4. Click on the finish button to finish the course.</Text>
          <Text>5. Restart and keep on learning.</Text>
        </View>
      </View>
    </ModalTemplate>
  );
};

export default HelpModal;
