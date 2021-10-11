export interface IAction {
  type: string;
  payload: any;
}

export const ALBUM_SELECTED = 'ALBUM_SELECTED';

export const albumSelected = (payload: number): IAction => ({
  type: ALBUM_SELECTED,
  payload,
});
