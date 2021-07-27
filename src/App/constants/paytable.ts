export const payout: { [key: string]: any } = {
	CHERRY_3_TOP: 2000,
	CHERRY_3_CENTER: 1000,
	CHERRY_3_BOTTOM: 4000,
	SEVEN_3_ANY: 150,
	CHERRY_SEVEN_ANY: 75,
	BAR3_3_ANY: 50,
	BAR2_3_ANY: 20,
	BAR1_3_ANY: 10,
	BAR_ANY_ANY: 5,
};

export const combinations: { [key: string]: any } = {
	CHERRY_3_TOP: [4, 0, 4, 0, 4, 0],
	CHERRY_3_CENTER: [3, 4, 0, 3, 4, 0, 3, 4, 0],
	CHERRY_3_BOTTOM: [3, 4, 3, 4, 3, 4],
	SEVEN_3_ANY: [3],
	CHERRY_SEVEN_ANY: [3, 4],
	BAR3_3_ANY: [0],
	BAR2_3_ANY: [2],
	BAR1_3_ANY: [1],
	BAR_ANY_ANY: [0, 1, 2],
};

export const text = [
	{
		id: 'CHERRY_3_TOP',
		text: `3 X CHERRY on TOP = ${payout.CHERRY_3_TOP}`,
	},
	{
		id: 'CHERRY_3_CENTER',
		text: `3 X CHERRY on CENTER = ${payout.CHERRY_3_CENTER}`,
	},
	{
		id: 'CHERRY_3_BOTTOM',
		text: `3 X CHERRY on BOTTOM = ${payout.CHERRY_3_BOTTOM}`,
	},
	{
		id: 'SEVEN_3_ANY',
		text: `3 X SEVEN on ANY LINE = ${payout.SEVEN_3_ANY}`,
	},
	{
		id: 'CHERRY_SEVEN_ANY',
		text: `CHERRY AND SEVEN on ANY LINE = ${payout.CHERRY_SEVEN_ANY}`,
	},
	{
		id: 'BAR3_3_ANY',
		text: `3 X BARx3 on ANY LINE = ${payout.BAR3_3_ANY}`,
	},
	{
		id: 'BAR2_3_ANY',
		text: `3 X BARx2 on ANY LINE = ${payout.BAR2_3_ANY}`,
	},
	{
		id: 'BAR1_3_ANY',
		text: `3 X BARx1 on ANY LINE = ${payout.BAR1_3_ANY}`,
	},
	{
		id: 'BAR_ANY_ANY',
		text: `ANY BAR on ANY LINE = ${payout.BAR_ANY_ANY}`,
	},
];
