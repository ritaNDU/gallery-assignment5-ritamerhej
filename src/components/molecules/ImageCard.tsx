import {Dimensions, Image, ImageSourcePropType, Pressable} from 'react-native';
import React from 'react';
import styles from './molecules.styles';
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import useManageImages from '../../hooks/useManageImages';
import {deletePictureFromApi} from '../../service/api';

type Props = {
  imageUri: ImageSourcePropType;
  onPress?: () => void;
  imageId: string;
};

const ImageCard = ({imageUri, onPress, imageId}: Props) => {
  const {width} = Dimensions.get('screen');
  const WIDTH_SCREEN = width;
  const swipeTranslateX = useSharedValue(0);
  const pressed = useSharedValue(false);
  const marginVertical = useSharedValue(20);

  const transformStyle = useAnimatedStyle(() => ({
    transform: [
      {translateX: swipeTranslateX.value},
      {scale: withTiming(pressed.value ? 1.15 : 1)},
    ],
  }));
  const {removeImage} = useManageImages();

  async function onRemove(imageId: string) {
    await deletePictureFromApi(imageId);
    removeImage(imageId);
  }

  const pan = Gesture.Pan()
    .onBegin(() => {
      pressed.value = true;
    })
    .onChange(event => {
      swipeTranslateX.value = event.translationX;
    })
    .onFinalize(() => {
      const isShouldDismiss = swipeTranslateX.value < -WIDTH_SCREEN * 0.3;
      if (isShouldDismiss) {
        marginVertical.value = withTiming(0);
        swipeTranslateX.value = withTiming(-WIDTH_SCREEN, undefined, isDone => {
          if (isDone) {
            runOnJS(onRemove)(imageId);
          }
        });
      } else {
        swipeTranslateX.value = withSpring(0);
      }
      pressed.value = false;
    });
  return (
    <Animated.View style={transformStyle}>
      <Pressable onPress={onPress} style={[styles.card]} hitSlop={1}>
        <GestureDetector gesture={pan}>
          <Image source={imageUri} style={styles.image} resizeMode="contain" />
        </GestureDetector>
      </Pressable>
    </Animated.View>
  );
};

export default ImageCard;
