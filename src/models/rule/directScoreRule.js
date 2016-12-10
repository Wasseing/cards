import AbstractRule                       from "./abstractRule.js";
import {Deck, Team, DECK_COLORS}          from "models";

export default class DirectScoreRule extends AbstractRule {

  constructor(id, name, description){
    super(id, name, description);
  }

  apply(deck, team){
    if(!this.isActivated()){return []}
    const currentCard = Deck.getCurrentCard(deck);
    if(currentCard.rank > 1 && currentCard.rank < 7 && ( (currentCard.color == DECK_COLORS.black && !this.GIVING) || (currentCard.color == DECK_COLORS.red && this.GIVING) )){
      return [this.getIncrement(Team.getCurrentPlayer(team),currentCard.rank, this.GIVING)];
    }
    return [];
  }

}
