import {List} from 'immutable';

export default class Trophys {
  constructor(list) {
    this.list = List(list);
  }

  getList(){
    return this.list.toArray();
  }

  addTrophy(newTrophy){
    const index = this.list.findIndex((trophy)=>newTrophy.name == trophy.name);
    if(index>=0){return}
    this.list = this.list.push(newTrophy);
  }

}
