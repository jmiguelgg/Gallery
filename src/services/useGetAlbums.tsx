import {useMemo, useState} from 'react';
// @ts-ignore
import {BASE_URL} from 'react-native-dotenv';

export interface IAlbums {
  id: number;
  name: string;
  photos?: PhotosResponse[];
  thumbnail?: string;
}

export interface AlbumsResponse {
  userId: number;
  id: number;
  title: string;
}

export interface PhotosResponse {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

const useGetAlbums = () => {
  const [data, setData] = useState<IAlbums[]>();
  const [isLoading, setIsLoading] = useState<Boolean | undefined>();
  const [errorOcurred, setErrorOcurred] = useState<String | undefined>();

  useMemo(() => {
    setIsLoading(true);
    fetch(`${BASE_URL}/photos`)
      .then(res => res.json())
      .then(async result => {
        const res = await (await fetch(`${BASE_URL}/albums`)).json();
        const albumsParsed = res.map((album: AlbumsResponse) => {
          const photos = result.filter(
            (photo: PhotosResponse) => photo.albumId === album.id,
          );
          return {
            id: album.id,
            name: album.title,
            photos,
            thumbnail: photos[0].thumbnailUrl,
          } as IAlbums;
        });
        setData(albumsParsed);
        setIsLoading(false);
      })
      .catch(error => {
        setIsLoading(false);
        setErrorOcurred(error);
      });
  }, []);

  return {data, isLoading, errorOcurred};
};

export default useGetAlbums;
