import AbstractRule                       from "./abstractRule.js";
import {Deck, Team, DECK_COLORS}          from "models";
import Random                             from 'random-js';
import {List}                             from 'immutable';

export default class EarthquakeRule extends AbstractRule {

  constructor(id){
    super(id, "Earthquake", "Every player around the included target are scoring");
  }

  apply(deck, team){
    if(!this.isActivated()){return []}
    const currentCard = Deck.getCurrentCard(deck);
    if(currentCard.rank == 13){
      return [
        this.getIncrement(Team.getPlayerWithOffset(team, 1), 1, false),
        this.getIncrement(Team.getPlayerWithOffset(team, 0), 1, false),
        this.getIncrement(Team.getPlayerWithOffset(team, -1), 1, false),
      ];
    }
    return [];
  }

  getEligibleCards(deck){
    let cards = deck.get("cards").filter((card, index)=>{
      return card.rank == 13 && index >= deck.get("currentCard");
    }).toArray()
    return List(Random().shuffle(cards));
  }

}
