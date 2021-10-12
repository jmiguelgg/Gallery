import {StyleSheet} from 'react-native';
import Color from '../../theme/color';

const styles = StyleSheet.create({
  containerScreen: {
    paddingHorizontal: 10,
    marginTop: 10,
  },
  close: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    tintColor: Color.white,
  },
  closeContainer: {
    right: 20,
    top: 40,
    position: 'absolute',
    zIndex: 100,
  },
});

export default styles;
