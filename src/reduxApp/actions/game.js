
export const TYPES = {
	GAME_NEXT_ROUND:'GAME_NEXT_ROUND',
}

export default class GameActionner{
	static nextRound(){
		return {
			type:TYPES.GAME_NEXT_ROUND,
		}
	}
}
