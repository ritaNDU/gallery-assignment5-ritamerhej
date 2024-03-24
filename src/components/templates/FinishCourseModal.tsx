import {Text, View} from 'react-native';
import React from 'react';
import ModalTemplate from './ModalTemplate';
import LocationMap from '../molecules/LocationMap';

type Props = {
  visible: boolean;
  closeModal: () => void;
};

const ImageDetailsModal = ({visible, closeModal}: Props) => {
  return (
    <ModalTemplate handleClose={closeModal} isVisible={visible}>
      <View>
        <Text>Location</Text>
        <LocationMap />
      </View>
      {/* These should be replaced by the image details component */}
    </ModalTemplate>
  );
};

export default ImageDetailsModal;
