import { GameActionTypes } from 'reduxApp';
import { Map } from 'immutable';

export const initialState = Map({
  currentRound: 0,
});

export const GameReducer = (state = initialState, action) => {
  switch (action.type) {
    case GameActionTypes.GAME_NEXT_ROUND:
      return state.set("currentRound", state.get("currentRound") + 1);
    default:
      return state;
  }
};
