import {TYPES as TeamActionsTypes} 	from '../actions/team.js';
import {List, Map} 									from 'immutable';
import {Player, Score, Utils} 			from 'models';

export const initialState = Map({
  players:List([]),
  currentIndex:0,
})

let OFFSET = 0;

const TeamReducer = (state = initialState, action) => {
    let index;
    let offset;
  	switch (action.type) {

      case TeamActionsTypes.TEAM_ADD_PLAYER:
	  		return state.set("players", state.get("players").push(Player(action.name)));

      case TeamActionsTypes.TEAM_RESET:
	  		return initialState;

      case TeamActionsTypes.TEAM_REMOVE_PLAYER:
        index = state.get("players").findIndex((player)=>player.get("id")==action.player.get("id"));
        if(index<0){return state};
	  		return state.set("players", state.get("players").delete(index));

      case TeamActionsTypes.TEAM_INCREMENT_PLAYER_SCORE:
        index = state.get("players").findIndex((player)=>player.get("id")==action.player.get("id"));
        if(index<0){return state};
	  		return state.set("players",  state.get("players").update(index,(player)=>player.set("score",player.get("score").push(Score(player.get("score").last().get('value')+action.increment,action.rule)))));

      case TeamActionsTypes.TEAM_INCREMENT_PLAYER_GAVE:
        index = state.get("players").findIndex((player)=>player.get("id")==action.player.get("id"));
        if(index<0){return state};
  	  	return state.set("players",  state.get("players").update(index,(player)=>player.set("gave",player.get("gave").push(Score(player.get("gave").last().get('value')+action.increment,action.rule)))));

      case TeamActionsTypes.TEAM_SET_RANDOM_PLAYER_AS_CURRENT:
        return state.set("currentIndex", Math.floor(Math.random()*state.get("players").size));

      case TeamActionsTypes.TEAM_NEXT:
        return state.set("currentIndex", state.get("players").size?(state.get("currentIndex") + 1)%state.get("players").size:0);

      case TeamActionsTypes.TEAM_SET_PLAYER_COLOR:
        index = state.get("players").findIndex((player)=>player.get("id")==action.player.get("id"));
        if(index<0){return state};
        return state.set("players",  state.get("players").update(index,(player)=>player.set("color",Utils.getRandomColor())));


      default:
	      return state;
  }
};

export default TeamReducer;
