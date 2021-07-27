import { PLAYGROUND } from './constants';
import { InitialState } from './types';

const initialState: InitialState = {
	spin: false,
	balance: 0,
	combo: 'CHERRY_3_BOTTOM',
	result: {
		reel1: [3, 4],
		reel2: [3, 4],
		reel3: [3, 4],
	},
	fix: {
		reel1: null,
		reel2: null,
		reel3: null,
	},
};

const reducer = (state = initialState, action: any) => {
	switch (action.type) {
		case PLAYGROUND.SPIN_START:
			return {
				...state,
				spin: true,
				result: {
					reel1: [],
					reel2: [],
					reel3: [],
				},
			};
		case PLAYGROUND.EDIT_BALANCE:
			return {
				...state,
				balance: action.payload > 5000 ? 5000 : action.payload,
			};
		case PLAYGROUND.GET_RESULT:
			return {
				...state,
				spin: false,
				result: {
					...state.result,
					[action.payload.reelId]: action.payload.result,
				},
			};
		case PLAYGROUND.SET_COMBO:
			return {
				...state,
				combo: action.payload,
			};
		case PLAYGROUND.SET_FIX_COMBO:
			return {
				...state,
				fix: {
					...state.fix,
					[action.payload.reelId]: action.payload.result,
				},
			};
		case PLAYGROUND.CLEAR_FIX_COMBO:
			return {
				...state,
				fix: {
					reel1: null,
					reel2: null,
					reel3: null,
				},
			};
		case PLAYGROUND.CLEAR_FIX_COMBO_BY_ID:
			return {
				...state,
				fix: {
					...state.fix,
					[action.payload]: null,
				},
			};
		default:
			return state;
	}
};

export default reducer;
