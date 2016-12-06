import {Trophys, TROPHYS, Score, Utils}        from 'models';
import {Map, List}                             from 'immutable';

let PLAYER_CURRENT_ID = 0;
let COLORS = [];

export default (name) => {
  return Map({
    name:name,
    score:List([Score(0)]),
    id:++PLAYER_CURRENT_ID,
    trophys:List([TROPHYS.PARTICIPANT]),
    color:Utils.getRandomColor(),
  })
}
