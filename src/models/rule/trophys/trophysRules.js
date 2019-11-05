import { ThumbMasterTrophyRule } from './thumbMasterTrophyRule.js';
import { QuestionMasterTrophyRule } from './questionMasterTrophyRule.js';
import { MineSweeperTrophyRule } from "./minesweeperTrophyRule.js";

export const TrophysRules = [
  new ThumbMasterTrophyRule(0),
  new QuestionMasterTrophyRule(1),
  //new MineSweeperTrophyRule(2),
]
