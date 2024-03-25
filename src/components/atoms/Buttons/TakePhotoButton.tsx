import {Pressable, View} from 'react-native';
import React from 'react';

type Props = {
  onPress: () => void;
};

const PickImageButton = ({onPress}: Props) => {
  return (
    <View>
      <Pressable
        style={{
          borderWidth: 5,
          borderColor: 'gray',
          backgroundColor: '#fff',
          borderRadius: 100,
          height: 100,
          width: 100,
        }}
        onPress={onPress}
      />
    </View>
  );
};

export default PickImageButton;
