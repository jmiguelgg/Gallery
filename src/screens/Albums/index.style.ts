import {StyleSheet} from 'react-native';
import Color from '../../theme/color';
import Font from '../../theme/font';

const styles = StyleSheet.create({
  containerScreen: {
    paddingHorizontal: 10,
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

export default styles;
