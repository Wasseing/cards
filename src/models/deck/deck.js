import { DECK } from './constants.js';
import { List } from 'immutable';
import Random from 'random-js';

export class Deck {

  static getShuffle() {
    let deck = List(DECK);
    return (Random().shuffle(deck.toArray()));
  }

  static getShuffleFromIndex(deck, index) {
    if (index < 0 || index >= deck.length) { return deck };
    if (index == 0) {
      return (Random().shuffle(deck.splice(index)));
    }
    let deckCopy = deck.slice();
    let sub = (Random().shuffle(deckCopy.splice(index - 1)));
    return deckCopy.concat(sub);
  }

  static concatAndShuffleDeck(deck, index) {
    const copyDeck = deck.concat(List(DECK));
    return Deck.getShuffleFromIndex(copyDeck.toArray(), index);
  }

  static getCurrentCard(deck) {
    if (!deck) { return null };
    return deck.get("cards").get(deck.get("currentCard"));
  }
}
