import { List } from 'immutable';

export class AbstractRule {
  constructor(id, name, description) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.activated = false;
  }
  apply(deck, team) { return null }
  getEligibleCards(deck) { return List([]) }
  isActivated() { return this.activated }
  getId() { return this.id }
  getName() { return this.name }
  getDescription() { return this.description || "No description" };

  activate() {
    this.activated = true;
    return this;
  }

  deactivate() {
    this.activated = false;
    return this;
  }

  getIncrement(player, value, giving) {
    return {
      rule: this,
      player: player,
      value: value,
      giving: giving,
    }
  }

}
