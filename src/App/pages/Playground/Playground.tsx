import React, { useState, useEffect } from 'react';
import { ResultFromSelector, BalanceFromSelector } from './Playground.types';
import style from './Playground.module.scss';

import cherryImg from '../../images/cherry.png';
import { useSelector, useDispatch } from 'react-redux';
import * as action from '../../redux/actions';

import Title from '../../modules/Title/Title';
import TextField from '../../modules/TextField/TextField';
import Button from '../../modules/Button/Button';
import Reels from '../../components/Reels/Reels';
import PayTable from '../../components/PayTable/PayTable';
import Debug from '../../components/Debug/Debug';

const Playground: React.FC = () => {
	const [appeared, setAppeared] = useState(false);

	useEffect(() => {
		setTimeout(() => setAppeared(true), 250);
	}, []);

	const result = useSelector((state: ResultFromSelector) => state.result);
	const balance = useSelector((state: BalanceFromSelector) => state.balance);

	const dispatch = useDispatch();

	const handelClick = () => {
		dispatch(action.playgroundEditBalance(balance - 1));
		dispatch(action.playgroundSpinStart());
	};

	return (
		<div className={style.body} style={{ opacity: appeared ? 1 : 0 }}>
			<div className={style.header}>
				<img src={cherryImg} alt='cherry' />
				<Title text='THE GAME' />
			</div>

			<div className={style.playCourt}>
				<Reels />
				<PayTable />
			</div>

			<div className={style.content}>
				<TextField
					placeholder='Your balance'
					value={balance}
					onChange={(e) => dispatch(action.playgroundEditBalance(Number(e.target.value)))}
					type='number'
					disabled={result.reel3.length === 0}
				/>
				<Button
					text='SPIN'
					onClick={handelClick}
					disabled={result.reel3.length === 0 || balance === 0}
					bold='bold'
					color='red'
				/>
			</div>
			<Debug />
		</div>
	);
};

export default Playground;
