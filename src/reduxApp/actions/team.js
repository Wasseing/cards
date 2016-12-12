
export const TYPES = {
	TEAM_NEXT:'TEAM_NEXT',
	TEAM_RESET:'TEAM_RESET',
	TEAM_ADD_PLAYER:'TEAM_ADD_PLAYER',
	TEAM_REMOVE_PLAYER:'TEAM_REMOVE_PLAYER',
	TEAM_INCREMENT_PLAYER_SCORE:'TEAM_INCREMENT_PLAYER_SCORE',
	TEAM_INCREMENT_PLAYER_GAVE:'TEAM_INCREMENT_PLAYER_GAVE',
	TEAM_ADD_THROPHY_TO_PLAYER:'TEAM_ADD_THROPHY_TO_PLAYER',
	TEAM_REMOVE_THROPHY_TO_PLAYER:'TEAM_REMOVE_THROPHY_TO_PLAYER',
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

	static addTrophyToPlayer(player, trophy){
		return {
			type:TYPES.TEAM_ADD_THROPHY_TO_PLAYER,
			player:player,
			trophy:trophy,
		}
	}

	static removeTrophyToPlayer(player, trophy){
		return {
			type:TYPES.TEAM_REMOVE_THROPHY_TO_PLAYER,
			player:player,
			trophy:trophy,
		}
	}

	static incrementPlayerScore(player, increment, rule){
		return {
			type:TYPES.TEAM_INCREMENT_PLAYER_SCORE,
			increment:increment,
			player:player,
			rule:rule,
		}
	}

	static incrementPlayerGave(player, increment, rule){
		return {
			type:TYPES.TEAM_INCREMENT_PLAYER_GAVE,
			increment:increment,
			player:player,
			rule:rule,
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
