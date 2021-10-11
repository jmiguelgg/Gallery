import {StyleSheet} from 'react-native';
import Color from '../../theme/color';
import Font from '../../theme/font';

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    backgroundColor: Color.gray_light,
    margin: 5,
    borderRadius: 10,
    overflow: 'hidden',
  },
  description: {
    backgroundColor: Color.gray,
    paddingHorizontal: 10,
    paddingVertical: 3,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  thumbnail: {
    resizeMode: 'cover',
    height: 130,
    width: '100%',
  },
  albumName: {
    ...Font.small,
    color: Color.back,
    alignSelf: 'center',
    maxWidth: 140,
  },
  photoCounter: {
    ...Font.large,
    color: Color.back,
    alignSelf: 'center',
  },
});

export default styles;
