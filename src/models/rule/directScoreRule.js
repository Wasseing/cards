import { AbstractRule } from "./abstractRule.js";
import { Deck, Team, DECK_COLORS } from "models";

export class DirectScoreRule extends AbstractRule {

  constructor(id, name, description) {
    super(id, name, description);
  }

  apply(deck, team) {
    if (!this.isActivated()) { return [] }
    const currentCard = Deck.getCurrentCard(deck);
    if (currentCard.rank > 1 && currentCard.rank < 7 && ((this.GIVING && currentCard.color == DECK_COLORS.red) || (!this.GIVING && currentCard.color == DECK_COLORS.black))) {
      return [this.getIncrement(Team.getCurrentPlayer(team), currentCard.rank, this.GIVING)];
    }
    return [];
  }

}
