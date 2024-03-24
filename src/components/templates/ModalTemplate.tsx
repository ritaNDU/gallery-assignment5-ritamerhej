import {Modal, View} from 'react-native';
import React from 'react';
import CloseModalButton from '../atoms/Buttons/CloseModalButton';

type Props = {
  isVisible: boolean;
  handleClose: () => void;
  children: React.JSX.Element;
};

const ModalTemplate = ({isVisible, handleClose, children}: Props) => {
  return (
    <Modal visible={isVisible} animationType="slide">
      <View>
        <CloseModalButton handleClose={handleClose} />
        {children}
      </View>
    </Modal>
  );
};

export default ModalTemplate;
