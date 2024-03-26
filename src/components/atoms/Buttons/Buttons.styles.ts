import {Dimensions, StyleSheet, TextStyle, ViewStyle} from 'react-native';
import theme, {BUTTON_HEIGHT, BUTTON_WIDTH} from '../../../styles/theme';

const {width} = Dimensions.get('screen');

export const buttonsHitSlop = {
  left: (width * 80) / 100,
  right: (width * 80) / 100,
  top: BUTTON_HEIGHT / 4,
  bottom: BUTTON_HEIGHT / 4,
};

const commonButtonStyles: ViewStyle = {
  width: BUTTON_WIDTH,
  height: 100,
  padding: 10,
  borderRadius: 100,
  justifyContent: 'center',
  alignItems: 'center',
};

const commonTextStyles: TextStyle = {
  fontWeight: '700',
  fontSize: theme.fontSize.large,
};

const styles = StyleSheet.create({
  container: {
    ...commonButtonStyles,
    backgroundColor: theme.colors.primary,
  },
  text: {
    ...commonTextStyles,
    color: theme.colors.buttonTextColor,
  },
  captureButton: {
    borderWidth: 5,
    borderColor: 'gray',
    backgroundColor: '#fff',
    borderRadius: 100,
    height: 100,
    width: 100,
  },

  favorites: {
    ...commonButtonStyles,
    backgroundColor: theme.colors.favoritesPrimary,
    marginBottom: 20,
  },
  favoritesText: {
    ...commonTextStyles,
    color: theme.colors.favoritesSecondary,
  },
  loadMoreButton: {
    height: 50,
    marginVertical: 10,
    backgroundColor: theme.colors.primary,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
  loadMoreText: {
    color: theme.colors.backgroundColor,
    fontSize: theme.fontSize.normal,
  },
});

export default styles;
