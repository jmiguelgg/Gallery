import React, {FC} from 'react';
import {View, Text, Image} from 'react-native';
import styles from './index.style';

export interface AlbumCardProps {
  name: string;
  numPhotos: number;
  thumbnail?: string;
}

const AlbumCard: FC<AlbumCardProps> = ({
  name,
  numPhotos,
  thumbnail,
}): JSX.Element => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.description}>
        <Text style={styles.albumName} numberOfLines={1}>
          {name}
        </Text>
        <Text style={styles.photoCounter}>{numPhotos}</Text>
      </View>
      <Image style={styles.thumbnail} source={{uri: thumbnail}} />
    </View>
  );
};

export default AlbumCard;
