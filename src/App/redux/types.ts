export interface InitialState {
	spin: boolean;
	balance: number;
	combo: string;
	result: {
		reel1: number[];
		reel2: number[];
		reel3: number[];
	};
	fix: {
		reel1: null | number[];
		reel2: null | number[];
		reel3: null | number[];
	};
}

export interface PlaygroundCombo {
	reelId: string;
	result: (number | undefined)[] | undefined;
}