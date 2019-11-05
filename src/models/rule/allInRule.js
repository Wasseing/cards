import { AbstractRule } from "./abstractRule.js";
import { Deck, Team, DECK_COLORS } from "models";
import Random from 'random-js';
import { List } from 'immutable';

export class AllInRule extends AbstractRule {

  constructor(id) {
    super(id, "All in", "Everyone is scoring");
  }

  apply(deck, team) {
    if (!this.isActivated()) { return [] }
    const currentCard = Deck.getCurrentCard(deck);
    if (currentCard.rank == 10) {
      return team.get("players").map((player) => {
        return this.getIncrement(player, 1, false);
      });
    }
    return [];
  }

  getEligibleCards(deck) {
    let cards = deck.get("cards").filter((card, index) => {
      return card.rank == 10 && index >= deck.get("currentCard");
    }).toArray()
    return List(Random().shuffle(cards));
  }

}
