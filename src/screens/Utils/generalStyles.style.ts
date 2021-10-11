import {StyleSheet} from 'react-native';
import Color from '../../theme/color';
import Font from '../../theme/font';

const generalStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Color.white,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  textLoading: {
    ...Font.large,
    color: Color.back,
    alignSelf: 'center',
    marginTop: 20,
  },
});

export default generalStyles;
