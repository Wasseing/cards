import {DeckActionTypes, GameActionTypes} 	           from 'reduxApp';
import {Map, List} 									                   from 'immutable';
import {DECK, Deck}                                    from 'models';

export const initialState = Map({
  cards:List(DECK),
  currentCard:0,
});

const DeckReducer = (state = initialState, action) => {
  	switch (action.type) {
      case DeckActionTypes.DECK_SHUFFLE:
        return state.set("cards",List(Deck.getShuffleFromIndex(state.get("cards").toArray(),state.get("currentCard"))));
      case DeckActionTypes.DECK_NEXT:
        return state.set("currentCard",Math.min(state.get("currentCard")+1, state.get("cards").size - 1));
      case DeckActionTypes.DECK_RESET:
        return initialState;
      case DeckActionTypes.DECK_ADD_DECK:
        return state.set("cards",List(Deck.concatAndShuffleDeck(state.get('cards'),state.get('currentCard')+2)));
      default:
	      return state;
  }
};

export default DeckReducer;
