import {Dimensions, StyleSheet} from 'react-native';
import theme from '../../styles/theme';

const {height} = Dimensions.get('window');

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
    marginBottom: 7,
    alignItems: 'center',
    backgroundColor: theme.colors.secondary,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  image: {width: '100%', height: 300},
});

export default styles;
