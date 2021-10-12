import {StyleSheet} from 'react-native';
import Color from '../../theme/color';
import Font from '../../theme/font';

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: Color.gray_light,
    margin: 5,
    borderRadius: 10,
    overflow: 'hidden',
  },
  description: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  thumbnail: {
    resizeMode: 'cover',
    height: 80,
    width: 120,
  },
  name: {
    ...Font.large,
    color: Color.back,
    alignSelf: 'center',
    maxWidth: 220,
  },
});

export default styles;
