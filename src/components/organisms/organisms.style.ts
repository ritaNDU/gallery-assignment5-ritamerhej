import {StyleSheet} from 'react-native';
import theme from '../../styles/theme';

const styles = StyleSheet.create({
  noImagesText: {
    color: theme.colors.textColor,
    fontSize: theme.fontSize.small,
  },
  noImageContainer: {
    width: '100%',
    height: '100%',
    padding: 10,
  },
  detailsContainer: {
    gap: 20,
  },
  image: {width: '100%', height: 300, alignSelf: 'center'},
  imageContainer: {
    backgroundColor: theme.colors.secondary,
    borderRadius: 4,
  },
  title: {
    fontSize: theme.fontSize.normal,
    color: theme.colors.textColor,
    fontWeight: '500',
  },
});

export default styles;
