import React, {FC} from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import AlbumCard, {AlbumCardProps} from '../../components/AlbumCard';
import styles from './index.style';

const Albums: FC = () => {
  const data = [
    {
      name: 'Hello',
      numPhotos: 5,
      thumbnail: 'https://via.placeholder.com/150/92c952',
    },
    {
      name: 'Hello',
      numPhotos: 5,
      thumbnail: 'https://via.placeholder.com/150/92c952',
    },
    {
      name: 'Hello',
      numPhotos: 5,
      thumbnail: 'https://via.placeholder.com/150/92c952',
    },
  ] as AlbumCardProps[];
  return (
    <SafeAreaView>
      <FlatList
        data={data}
        renderItem={({item}) => <AlbumCard {...item} />}
        numColumns={2}
        style={styles.containerScreen}
      />
    </SafeAreaView>
  );
};

export default Albums;
