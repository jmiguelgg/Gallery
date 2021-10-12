import React, {FC} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './index.style';

export interface PhotoCardProps {
  id: number;
  name: string;
  thumbnail?: string;
  onPress?: () => void;
}

const PhotoCard: FC<PhotoCardProps> = ({
  name,
  thumbnail,
  onPress,
}): JSX.Element => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.cardContainer}>
      <Image style={styles.thumbnail} source={{uri: thumbnail}} />
      <View style={styles.description}>
        <Text style={styles.name} numberOfLines={1}>
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default PhotoCard;
