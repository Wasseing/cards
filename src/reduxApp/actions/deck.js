
export const TYPES = {
	DECK_SHUFFLE: "DECK_SHUFFLE",
	DECK_NEXT: "DECK_NEXT",
	DECK_RESET: "DECK_RESET",
	DECK_ADD_DECK: "DECK_ADD_DECK",
}

export class DeckActionner {

	static shuffle() {
		return {
			type: TYPES.DECK_SHUFFLE,
		}
	}

	static next() {
		return {
			type: TYPES.DECK_NEXT,
		}
	}

	static reset() {
		return {
			type: TYPES.DECK_RESET,
		}
	}

	static addDeck() {
		return {
			type: TYPES.DECK_ADD_DECK,
		}
	}


}
