import DirectScoreRule        from './directScoreRule.js';
import {DECK_COLORS}          from "models";
import Random                 from 'random-js';
import {List}                 from 'immutable';

export default class GivingSocreRule extends DirectScoreRule{
  static GIVING = true;
  constructor(id){
    super(id,"Giving points","Directly give the points");
    this.GIVING = true;
  }

  getEligibleCards(deck){
    let cards = deck.get("cards").filter((card, index)=>{
      return card.rank > 1 && card.rank < 7 && card.color == DECK_COLORS.red  && index >= deck.get("currentCard");
    }).toArray();
    return List(Random().shuffle(cards));
  }

}
