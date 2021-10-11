import React, {FC} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './index.style';

export interface AlbumCardProps {
  albumId: number;
  name: string;
  numPhotos: number;
  thumbnail?: string;
  onPress: (id: number) => void;
}

const AlbumCard: FC<AlbumCardProps> = ({
  albumId,
  name,
  numPhotos,
  thumbnail,
  onPress,
}): JSX.Element => {
  const handleOnPress = (): void => {
    onPress(albumId);
  };

  return (
    <TouchableOpacity onPress={handleOnPress} style={styles.cardContainer}>
      <View style={styles.description}>
        <Text style={styles.albumName} numberOfLines={1}>
          {name}
        </Text>
        <Text style={styles.photoCounter}>{numPhotos}</Text>
      </View>
      <Image style={styles.thumbnail} source={{uri: thumbnail}} />
    </TouchableOpacity>
  );
};

export default AlbumCard;
