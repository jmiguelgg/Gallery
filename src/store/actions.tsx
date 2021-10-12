import {IAlbums} from '../services/useGetAlbums';

export interface IAction {
  type: string;
  payload: any;
}

export const ALBUM_SELECTED = 'ALBUM_SELECTED';
export const SAVE_ALBUMS = 'SAVE_ALBUMS';

export const albumSelected = (payload: number): IAction => ({
  type: ALBUM_SELECTED,
  payload,
});

export const saveAlbums = (payload: IAlbums[]): IAction => ({
  type: SAVE_ALBUMS,
  payload,
});
