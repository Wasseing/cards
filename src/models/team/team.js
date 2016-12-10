
export default class Team {
  static getCurrentPlayer(team){
    if(!team){return null};
    return team.get("players").get(team.get("currentIndex"));
  }
  static getPlayerWithOffset(team, offset){
    if(!team){return null};
    return team.get("players").get((team.get("currentIndex")+offset)%team.get('players').size);
  }
}
