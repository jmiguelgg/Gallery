import React, {createContext, useReducer} from 'react';
import {IAlbums} from '../services/useGetAlbums';
import {IAction, ALBUM_SELECTED, SAVE_ALBUMS} from './actions';

interface IState {
  albumSelected: number;
  albums: IAlbums[];
}

const Reducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case ALBUM_SELECTED:
      return {
        ...state,
        albumSelected: action.payload,
      };
    case SAVE_ALBUMS:
      return {
        ...state,
        albums: action.payload,
      };
    default:
      return state;
  }
};

const initialState = {
  albumSelected: 0,
  albums: [] as IAlbums[],
} as IState;

const Context = createContext({
  state: initialState,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  dispatch: (reducer: any) => {},
});

const Provider = ({children}: any) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <Context.Provider value={{state, dispatch}}>{children}</Context.Provider>
  );
};

export {Context, Provider};
