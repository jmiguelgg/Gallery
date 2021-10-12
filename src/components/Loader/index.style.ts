import {StyleSheet} from 'react-native';
import Color from '../../theme/color';
import Font from '../../theme/font';

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  textLoading: {
    ...Font.large,
    color: Color.back,
    alignSelf: 'center',
  },
});

export default styles;
