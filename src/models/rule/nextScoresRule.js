import AbstractRule                       from "./abstractRule.js";
import {Deck, Team, DECK_COLORS}          from "models";
import Random                             from 'random-js';
import {List}                             from 'immutable';

export default class NextScoresRule extends AbstractRule {

  constructor(id){
    super(id, "Next scores", "Next is scoring");
  }

  apply(deck, team){
    if(!this.isActivated()){return []}
    const currentCard = Deck.getCurrentCard(deck);
    if(currentCard.rank == 9){
      return [this.getIncrement(Team.getPlayerWithOffset(team, 1), 1, false)];
    }
    return [];
  }

  getEligibleCards(deck){
    let cards =  deck.get("cards").filter((card, index)=>{
      return card.rank == 9 && index >= deck.get("currentCard");
    }).toArray();

    return List(Random().shuffle(cards));
  }

}
