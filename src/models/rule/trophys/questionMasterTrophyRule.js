import AbstractThrophyRule from './abstractTrophyRule.js';
import { Deck, Team, DECK_COLORS, TROPHYS } from 'models';
import Random from 'random-js';
import { List } from 'immutable';

export default class QuestionMasterTrophyRule extends AbstractThrophyRule {
  constructor(id) {
    super(id, 'Question Master', "Don't even think about answers");
  }

  apply(deck, team) {
    if (!this.isActivated()) {
      return [];
    }
    const currentCard = Deck.getCurrentCard(deck);
    if (currentCard.rank == 12) {
      return team.get('players').map(player => {
        return this.getAction(
          player,
          TROPHYS.QUESTION_MASTER,
          player.get('id') == Team.getCurrentPlayer(team).get('id')
        );
      });
    }
    return [];
  }

  getEligibleCards(deck) {
    let cards = deck
      .get('cards')
      .filter((card, index) => {
        return card.rank == 12 && index >= deck.get('currentCard');
      })
      .toArray();
    return List(Random().shuffle(cards));
  }
}
