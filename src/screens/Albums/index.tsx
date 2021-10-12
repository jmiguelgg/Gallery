import React, {FC, useContext, useEffect, useState} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {SafeAreaView, FlatList} from 'react-native';
import AlbumCard, {AlbumCardProps} from '../../components/AlbumCard';
import generalStyles from '../Utils/generalStyles.style';
import styles from './index.style';
import {albumSelected, Context, saveAlbums} from '../../store';
import useGetAlbums, {IAlbums} from '../../services/useGetAlbums';
import Loader from '../../components/Loader';
import storage from '../../store/storage';

interface AlbumsProps {
  navigation: NativeStackNavigationProp<any, any>;
}

const Albums: FC<AlbumsProps> = ({navigation}) => {
  const {state, dispatch} = useContext(Context);
  const [albums, setAlbums] = useState<AlbumCardProps[]>();
  const {data, isLoading, errorOcurred} = useGetAlbums();

  const seeAlbum = (albumId: number): void => {
    dispatch(albumSelected(albumId));
    navigation.navigate('Photos');
  };

  const paserseAlbums = (albumsData: IAlbums[]): AlbumCardProps[] => {
    return albumsData.map(
      item =>
        ({
          id: item.id,
          name: item.name,
          numPhotos: item.photos?.length,
          thumbnail: item.thumbnail,
        } as AlbumCardProps),
    );
  };

  const renderLoader = (): JSX.Element => (
    <Loader message="Loading albums..." />
  );

  const renderAlbums = (): JSX.Element => (
    <FlatList
      data={albums}
      keyExtractor={item => `${item.id}-album`}
      renderItem={({item}) => <AlbumCard {...item} onPress={seeAlbum} />}
      numColumns={2}
      style={styles.containerScreen}
    />
  );

  useEffect(() => {
    if (data && !isLoading && !errorOcurred) {
      setAlbums(paserseAlbums(data));
      if (state.albums.length === 0) {
        dispatch(saveAlbums(data));
        storage.save({
          key: 'albums',
          data,
          expires: 1000 * 3600 * 3,
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, isLoading, errorOcurred]);

  return (
    <SafeAreaView style={generalStyles.mainContainer}>
      {isLoading ? renderLoader() : renderAlbums()}
    </SafeAreaView>
  );
};

export default Albums;
