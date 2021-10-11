import React, {FC, useContext} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {SafeAreaView, FlatList} from 'react-native';
import AlbumCard, {AlbumCardProps} from '../../components/AlbumCard';
import generalStyles from '../Utils/generalStyles.style';
import styles from './index.style';
import {albumSelected, Context} from '../../store';

interface AlbumsProps {
  navigation: NativeStackNavigationProp<any, any>;
}

const Albums: FC<AlbumsProps> = ({navigation}) => {
  const {dispatch} = useContext(Context);
  const data = [
    {
      albumId: 1,
      name: 'Hello',
      numPhotos: 5,
      thumbnail: 'https://via.placeholder.com/150/92c952',
    },
    {
      albumId: 2,
      name: 'Hello',
      numPhotos: 5,
      thumbnail: 'https://via.placeholder.com/150/92c952',
    },
    {
      albumId: 3,
      name: 'Hello',
      numPhotos: 5,
      thumbnail: 'https://via.placeholder.com/150/92c952',
    },
  ] as AlbumCardProps[];

  const seeAlbum = (albumId: number): void => {
    dispatch(albumSelected(albumId));
    navigation.navigate('Photos');
  };

  return (
    <SafeAreaView style={generalStyles.mainContainer}>
      <FlatList
        data={data}
        keyExtractor={item => `${item.albumId}-album`}
        renderItem={({item}) => <AlbumCard {...item} onPress={seeAlbum} />}
        numColumns={2}
        style={styles.containerScreen}
      />
    </SafeAreaView>
  );
};

export default Albums;
