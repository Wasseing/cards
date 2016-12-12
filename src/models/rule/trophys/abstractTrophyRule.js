import AbstractRule from '../abstractRule.js';
import {List}       from 'immutable';

export default class AbstractThrophyRule extends AbstractRule{

  constructor(id, name, description){
    super(id, name, description)
    this.activated = true;
  }

  getAction(player, trophy, giving){
    return {
      rule:this,
      player:player,
      trophy:trophy,
      giving:giving,
    }
  }

}
