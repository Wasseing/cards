
export const TYPES = {
	TEAM_NEXT:'TEAM_NEXT',
	TEAM_RESET:'TEAM_RESET',
	TEAM_ADD_PLAYER:'TEAM_ADD_PLAYER',
	TEAM_REMOVE_PLAYER:'TEAM_REMOVE_PLAYER',
	TEAM_INCREMENT_PLAYER_SCORE:'TEAM_INCREMENT_PLAYER_SCORE',
	TEAM_SET_RANDOM_PLAYER_AS_CURRENT:'TEAM_SET_RANDOM_PLAYER_AS_CURRENT',
	TEAM_SET_PLAYER_COLOR:'TEAM_SET_PLAYER_COLOR',
}

export default class TeamActionner{
	static addPlayer(name){
		return {
			type:TYPES.TEAM_ADD_PLAYER,
			name:name
		}
	}

	static reset(){
		return {
			type:TYPES.TEAM_RESET,
		}
	}

	static removePlayer(player){
		return {
			type:TYPES.TEAM_REMOVE_PLAYER,
			player:player,
		}
	}

	static setPlayerColor(player){
		return {
			type:TYPES.TEAM_SET_PLAYER_COLOR,
			player:player,
		}
	}

	static incrementPlayerScore(player, increment){
		return {
			type:TYPES.TEAM_INCREMENT_PLAYER_SCORE,
			increment:increment,
			player:player,
		}
	}

	static setRandomPlayerAsCurrent(){
		return {
			type:TYPES.TEAM_SET_RANDOM_PLAYER_AS_CURRENT,
		}
	}

	static next(){
		return {
			type:TYPES.TEAM_NEXT,
		}
	}
}
