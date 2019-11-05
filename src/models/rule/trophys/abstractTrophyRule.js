import { AbstractRule } from "../abstractRule.js";
import { List } from "immutable";

export class AbstractThrophyRule extends AbstractRule {
  constructor(id, name, description) {
    super(id, name, description);
    this.activated = false;
  }

  getAction(player, trophy, giving) {
    return {
      rule: this,
      player: player,
      trophy: trophy,
      giving: giving
    };
  }
}
