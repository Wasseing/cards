import { AbstractRule } from "./abstractRule.js";
import { Deck, Team, DECK_COLORS } from "models";
import Random from 'random-js';
import { List } from 'immutable';

export class PrevScoresRule extends AbstractRule {

  constructor(id) {
    super(id, "Previous scores", "The previous player is scoring");
  }

  apply(deck, team) {
    if (!this.isActivated()) { return [] }
    const currentCard = Deck.getCurrentCard(deck);
    if (currentCard.rank == 7) {
      return [this.getIncrement(Team.getPlayerWithOffset(team, -1), 1, false)];
    }
    return [];
  }

  getEligibleCards(deck) {
    let cards = deck.get("cards").filter((card, index) => {
      return card.rank == 7 && index >= deck.get("currentCard");
    }).toArray();
    return List(Random().shuffle(cards));
  }

}
