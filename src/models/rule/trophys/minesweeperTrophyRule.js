import { AbstractThrophyRule } from "./abstractTrophyRule.js";
import { Deck, Team, DECK_COLORS, TROPHYS } from "models";
import Random from 'random-js';
import { List } from 'immutable';
import { TakingSocreRule } from '../takingScoreRule.js';

export class MineSweeperTrophyRule extends AbstractThrophyRule {

  constructor(id) {
    super(id, "Mine sweeper", "Bad luck");
  }

  apply(deck, team) {
    if (!this.isActivated()) { return [] }
    let nbSixBlack;
    let actions = [];
    const currentCard = Deck.getCurrentCard(deck);
    team.get("players").map((player) => {
      nbSixBlack = 0;
      player.get("score").map((score) => {
        if (score.get("increment") == 6 && score.get("rule") instanceof TakingSocreRule) {
          nbSixBlack += 1;
        }
      })
      if (nbSixBlack > 1 || (nbSixBlack >= 1 && player.get("id") == Team.getCurrentPlayer(team).get("id") && currentCard.rank === 6 && currentCard.color === DECK_COLORS.black)) {
        actions.push(this.getAction(player, TROPHYS.MINESWEEPER, true));
      }
    })
    return actions;
  }

  getEligibleCards(deck) {
    return List([]);
  }

}
