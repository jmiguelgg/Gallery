import React, {FC, useContext} from 'react';
import {FlatList, View} from 'react-native';
import PhotoCard, {PhotoCardProps} from '../../components/PhotoCard';
import {PhotosResponse} from '../../services/useGetAlbums';
import {Context} from '../../store';
import generalStyles from '../Utils/generalStyles.style';
import styles from './index.style';

const Photos: FC = (): JSX.Element => {
  const {state} = useContext(Context);
  const parserPhotos = (photos: PhotosResponse[]): PhotoCardProps[] =>
    photos.map(
      item =>
        ({
          id: item.id,
          name: item.title,
          thumbnail: item.thumbnailUrl,
        } as PhotoCardProps),
    );

  const album = state.albums.find(item => item.id === state.albumSelected);
  const data =
    album && album.photos
      ? parserPhotos(album.photos)
      : ([] as PhotoCardProps[]);

  return (
    <View style={generalStyles.mainContainer}>
      <FlatList
        data={data}
        keyExtractor={item => `${item.id}-photo`}
        renderItem={({item}) => <PhotoCard {...item} onPress={() => {}} />}
        style={styles.containerScreen}
      />
    </View>
  );
};

export default Photos;
