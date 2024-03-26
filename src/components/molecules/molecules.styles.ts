import {Dimensions, StyleSheet, ViewStyle} from 'react-native';
import theme from '../../styles/theme';

const {height} = Dimensions.get('window');
const cardCommonStyles: ViewStyle = {
  marginBottom: 50,
  alignItems: 'center',
  borderRadius: 5,
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.23,
  shadowRadius: 2.62,

  elevation: 4,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  map: {
    width: '100%',
    height: height / 2.5,
  },
  card: {
    ...cardCommonStyles,
    backgroundColor: theme.colors.secondary,
  },
  favoriteCard: {
    ...cardCommonStyles,
    backgroundColor: theme.colors.favoritesImageBackground,
  },

  image: {width: '100%', height: 300},
});

export default styles;
