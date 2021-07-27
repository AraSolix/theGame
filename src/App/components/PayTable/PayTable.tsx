import React, { useEffect, useState } from 'react';
import { ResultFromSelector, SpinFromSelector, BalanceFromSelector } from './PayTable.types';
import style from './PayTable.module.scss';

import { payout, combinations, text } from '../../constants/paytable';
import { useSelector, useDispatch } from 'react-redux';
import * as action from '../../redux/actions';

import TableItem from './TableItem/TableItem';

const PayTable: React.FC = () => {
	const result = useSelector((state: ResultFromSelector) => state.result);
	const spin = useSelector((state: SpinFromSelector) => state.spin);
	const balance = useSelector((state: BalanceFromSelector) => state.balance);
	const dispatch = useDispatch();

	const [combo, setCombo] = useState<string>('');
	const [winLose, setWinLose] = useState<boolean>(false);

	const checkResult = () => {
		const comboKeys: string[] = Object.keys(combinations);

		const reel1 = result.reel1.length === 3 ? [result.reel1[1]] : result.reel1;
		const reel2 = result.reel2.length === 3 ? [result.reel2[1]] : result.reel2;
		const reel3 = result.reel3.length === 3 ? [result.reel3[1]] : result.reel3;

		for (let key = 0; key < comboKeys.length; key++) {
			if (
				comboKeys[key] === 'CHERRY_3_TOP' ||
				comboKeys[key] === 'CHERRY_3_CENTER' ||
				comboKeys[key] === 'CHERRY_3_BOTTOM'
			) {
				const arr = [...result.reel1, ...result.reel2, ...result.reel3];

				if (arr.every((item, index) => item === combinations[comboKeys[key]][index])) {
					return setCombo(comboKeys[key]);
				}
			}
			if (
				comboKeys[key] === 'SEVEN_3_ANY' ||
				comboKeys[key] === 'BAR3_3_ANY' ||
				comboKeys[key] === 'BAR2_3_ANY' ||
				comboKeys[key] === 'BAR1_3_ANY'
			) {
				const arr = [...reel1, ...reel2, ...reel3];
				const reduced = arr.reduce((acc: number[], cur: number) => {
					if (cur === combinations[comboKeys[key]][0]) acc.push(cur);
					return acc;
				}, []);

				if (reduced.length === 3) return setCombo(comboKeys[key]);
			}
			if (comboKeys[key] === 'CHERRY_SEVEN_ANY' || comboKeys[key] === 'BAR_ANY_ANY') {
				const find = (item: number) =>
					item === combinations[comboKeys[key]][0] ||
					item === combinations[comboKeys[key]][1] ||
					(combinations[comboKeys[key]][2] && item === combinations[comboKeys[key]][2]);

				if (reel1.some(find) && reel2.some(find) && reel3.some(find)) {
					return setCombo(comboKeys[key]);
				}
			}
		}
	};

	useEffect(() => {
		if (result.reel3.length !== 0) setTimeout(checkResult, 3000);
		// eslint-disable-next-line
	}, [result.reel3]);

	useEffect(() => {
		if (spin) setCombo('');
		dispatch(action.playgroundSetCombo(''));
			// eslint-disable-next-line
	}, [spin]);

	useEffect(() => {
		const num: number = payout[combo] ? payout[combo] : 0;

		setWinLose(num !== 0 ? true : false);

		if (num !== 0) {
			dispatch(action.playgroundEditBalance(balance + num));
			dispatch(action.playgroundSetCombo(combo));
		}
		// eslint-disable-next-line
	}, [combo]);

	return (
		<div className={style.body}>
			<div className={style.header}>{winLose ? 'YOU WIN!' : '...'}</div>
			{text.map((item) => (
				<TableItem key={item.id} id={item.id} text={item.text} combo={combo} />
			))}
		</div>
	);
};

export default PayTable;
