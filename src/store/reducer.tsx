import React, {createContext, useReducer} from 'react';
import {IAction, ALBUM_SELECTED} from './actions';

interface IState {
  albumSelected: number;
}

const Reducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case ALBUM_SELECTED:
      return {
        ...state,
        albumSelected: action.payload,
      };
    default:
      return state;
  }
};

const initialState = {
  albumSelected: 0,
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
