import { Trophy } from './trophy.js';

export const TROPHYS = {
  PARTICIPANT: new Trophy(0, "Particitpant", "It's a matter of participation", "FaTrophy", "FA", "#00ACC1", "#FFFFFF"),
  THUMB_MASTER: new Trophy(1, "Thumb Master", "Try to put your thumb on the table", "FaThumbsUp", "FA", "#FFFFFF", "#E53935"),
  QUESTION_MASTER: new Trophy(2, "Question Master", "Don't even think about answers", "FaQuestion", "FA", "#2E7D32", "#FFFFFF"),
  MINESWEEPER: new Trophy(3, "Mine sweeper", "bad luck", "FaBomb", "FA", "#C62828", "#FFFFFF"),
}
