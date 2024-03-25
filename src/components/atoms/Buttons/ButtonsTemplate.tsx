import {Dimensions, Pressable, StyleProp, ViewStyle} from 'react-native';
import React from 'react';
import {buttonsHitSlop} from './Buttons.styles';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSpring,
} from 'react-native-reanimated';

type Props = {
  onPress: () => void;
  style: StyleProp<StyleProp<ViewStyle>>;
  children: React.JSX.Element;
};

const {width} = Dimensions.get('window');

const ButtonTemplate = ({children, onPress, style}: Props) => {
  const buttonWidth = useSharedValue((width * 90) / 100);

  const animatedChanged = useAnimatedStyle(() => ({
    width: buttonWidth.value,
  }));

  function handlePress() {
    buttonWidth.value = withRepeat(withSpring(buttonWidth.value + 40), 2, true);
    onPress();
  }

  return (
    <Animated.View style={[style, animatedChanged]}>
      <Pressable onPress={handlePress} hitSlop={buttonsHitSlop}>
        {children}
      </Pressable>
    </Animated.View>
  );
};

export default ButtonTemplate;
