import React, {FC} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {SafeAreaView, FlatList} from 'react-native';
import AlbumCard, {AlbumCardProps} from '../../components/AlbumCard';
import generalStyles from '../Utils/generalStyles.style';
import styles from './index.style';

interface AlbumsProps {
  navigation: NativeStackNavigationProp<any, any>;
}

const Albums: FC<AlbumsProps> = ({navigation}) => {
  const data = [
    {
      id: 1,
      name: 'Hello',
      numPhotos: 5,
      thumbnail: 'https://via.placeholder.com/150/92c952',
    },
    {
      id: 2,
      name: 'Hello',
      numPhotos: 5,
      thumbnail: 'https://via.placeholder.com/150/92c952',
    },
    {
      id: 3,
      name: 'Hello',
      numPhotos: 5,
      thumbnail: 'https://via.placeholder.com/150/92c952',
    },
  ] as AlbumCardProps[];

  const seeAlbum = (albumId: number): void => {
    console.log('[Albums]: seeAlbums: ', albumId);
    navigation.navigate('Photos');
  };

  return (
    <SafeAreaView style={generalStyles.mainContainer}>
      <FlatList
        data={data}
        renderItem={({item}) => <AlbumCard {...item} onPress={seeAlbum} />}
        numColumns={2}
        style={styles.containerScreen}
      />
    </SafeAreaView>
  );
};

export default Albums;
