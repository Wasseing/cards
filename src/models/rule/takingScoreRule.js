import DirectScoreRule        from './directScoreRule.js';
import {DECK_COLORS}          from "models";
import Random                 from 'random-js';
import {List}                 from 'immutable';

export default class TakingSocreRule extends DirectScoreRule{
  constructor(id){
    super(id,"Taking points","Directly take points");
    this.GIVING = false;
  }

  getEligibleCards(deck){
    let cards = deck.get("cards").filter((card, index)=>{
      return card.rank > 1 && card.rank < 7 && card.color == DECK_COLORS.black  && index >= deck.get("currentCard");
    }).toArray();
    return List(Random().shuffle(cards));
  }

}
