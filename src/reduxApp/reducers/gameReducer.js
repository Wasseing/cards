import {GameActionTypes} 	           from 'reduxApp';
import {Map} 										     from 'immutable';

export const initialState = Map({
  currentRound:0,
});

const GameReducer = (state = initialState, action) => {
  	switch (action.type) {
      case GameActionTypes.GAME_NEXT_ROUND:
        return state.set("currentRound",state.get("currentRound")+1);
      default:
	      return state;
  }
};

export default GameReducer;
