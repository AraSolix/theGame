import { PLAYGROUND } from './constants';
import { PlaygroundCombo } from './types';

export const playgroundSpinStart = () => ({ type: PLAYGROUND.SPIN_START });

export const playgroundGetResult = (payload: PlaygroundCombo) => ({
	type: PLAYGROUND.GET_RESULT,
	payload,
});

export const playgroundEditBalance = (payload: number) => ({
	type: PLAYGROUND.EDIT_BALANCE,
	payload,
});

export const playgroundSetCombo = (payload: string) => ({
	type: PLAYGROUND.SET_COMBO,
	payload,
});

export const playgroundSetFixCombo = (payload: PlaygroundCombo) => ({
	type: PLAYGROUND.SET_FIX_COMBO,
	payload,
});

export const playgroundClearFixComboById = (payload: string) => ({
	type: PLAYGROUND.CLEAR_FIX_COMBO_BY_ID,
	payload,
});

export const playgroundClearFixCombo = () => ({ type: PLAYGROUND.CLEAR_FIX_COMBO });
