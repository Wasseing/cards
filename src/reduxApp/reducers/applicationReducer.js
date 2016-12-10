import { combineReducers } 				  from 'redux';
import TeamReducer							    from './teamReducer.js';
import GameReducer                  from './gameReducer.js';
import DeckReducer                  from './deckReducer.js';
import RulesReducer                 from './rulesReducer.js';

export default combineReducers({
  Team:TeamReducer,
  Game:GameReducer,
  Deck:DeckReducer,
  Rules:RulesReducer,
})
