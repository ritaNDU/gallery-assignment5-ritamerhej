import {StyleSheet} from 'react-native';
import theme from '../../styles/theme';

const styles = StyleSheet.create({
  deviceNotSupportedText: {
    fontSize: theme.fontSize.normal,
    color: theme.colors.textColor,
  },
  deviceNotSupportedContainer: {
    height: '100%',
    width: '100%',
    padding: 10,
  },
  camera: {zIndex: -1},

  cameraContainer: {height: '100%'},
  permissionButtonContainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  askForPermission: {fontSize: 20, color: '#000'},
  buttonContainer: {position: 'absolute', bottom: 50, alignSelf: 'center'},
});

export default styles;
