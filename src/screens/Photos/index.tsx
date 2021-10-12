import React, {FC, useContext, useState} from 'react';
import {FlatList, Image, TouchableOpacity, View} from 'react-native';
import PhotoCard, {PhotoCardProps} from '../../components/PhotoCard';
import {PhotosResponse} from '../../services/useGetAlbums';
import {Context} from '../../store';
import generalStyles from '../Utils/generalStyles.style';
import styles from './index.style';
import {Modal} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';

const Photos: FC = (): JSX.Element => {
  const {state} = useContext(Context);
  const [modalhandler, setModalhandler] = useState<boolean>(false);
  const [photoIndex, setPhotoIndex] = useState<number>(0);
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
  const photos =
    album && album.photos ? album.photos.map(item => ({url: item.url})) : [];

  const handleOpenGallery = (index: number): void => {
    setPhotoIndex(index);
    setModalhandler(true);
  };

  return (
    <View style={generalStyles.mainContainer}>
      <FlatList
        data={data}
        keyExtractor={item => `${item.id}-photo`}
        renderItem={({item, index}) => (
          <PhotoCard {...item} onPress={() => handleOpenGallery(index)} />
        )}
        style={styles.containerScreen}
      />
      <Modal visible={modalhandler} transparent={true}>
        <TouchableOpacity
          style={styles.closeContainer}
          onPress={() => setModalhandler(false)}>
          <Image
            style={styles.close}
            source={require('../../assets/close.png')}
          />
        </TouchableOpacity>
        <ImageViewer
          index={photoIndex}
          onCancel={() => setModalhandler(false)}
          imageUrls={photos}
        />
      </Modal>
    </View>
  );
};

export default Photos;
