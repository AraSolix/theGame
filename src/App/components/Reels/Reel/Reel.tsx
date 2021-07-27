import React, { useState, useEffect, useRef } from 'react';
import { ReelProps, SpinFromSelector, ComboFromSelector } from './Reel.types';
import style from './Reel.module.scss';

import { useSelector, useDispatch } from 'react-redux';
import * as action from '../../../redux/actions';
import { reel, combinations } from '../../../constants/reel';
import { combinations as payTableCombo } from '../../../constants/paytable';

const Reel: React.FC<ReelProps> = ({ timer, reelId, position }) => {
	const [spin, setSpin] = useState<null | boolean>(null);
	const [moment, setMoment] = useState([3, 4]);
	const [result, setResult] = useState([3, 4]);

	const globalSpin = useSelector((state: SpinFromSelector) => state.spin);
	const combo = useSelector((state: ComboFromSelector) => state.combo);
	const dispatch = useDispatch();

	const overdrive = () => {
		if (spin && moment.length === 2) {
			if (moment[1] === 3) {
				return setMoment([moment[1], moment[1] + 1, 0]);
			}
			if (moment[1] === 4) {
				return setMoment([moment[1], 0, 1]);
			}
			return setMoment([moment[1], moment[1] + 1, moment[1] + 2]);
		}
		if (spin && moment.length === 3) {
			return setMoment([moment[1], moment[2]]);
		}
	};

	useEffect(() => {
		spin ? setTimeout(overdrive, 20) : setMoment(position ? position : result);
		// eslint-disable-next-line
	}, [spin, moment]);

	useEffect(() => {
		dispatch(action.playgroundGetResult({ reelId, result: position ? position : result }));
		// eslint-disable-next-line
	}, [spin]);

	useEffect(() => {
		if (globalSpin) {
			setSpin(true);
			setResult(combinations[Math.floor(Math.random() * 10)]);
			setTimeout(() => setSpin(false), timer);
		}
		// eslint-disable-next-line
	}, [globalSpin]);

	const block: any = useRef();

	const imgControl = (index: number, key: number) => {
		return payTableCombo[combo] && payTableCombo[combo].some((num: number) => {
				if (moment.length === 3 && index === 1) return num === key;
				if (moment.length === 2) return num === key;
				return false
			})
			? style.active
			: style.notActive;
	};

	return (
		<div ref={block} className={style.body} onScroll={() => block.current.scrollTo(0, 0)}>
			<div className={style.shadow} />
			<div className={style.images} style={{ top: moment.length === 2 ? 0 : -100 }}>
				{moment.map((key, index) => (
					<img
						key={reel[key].id}
						src={reel[key].image}
						alt={reel[key].id}
						className={imgControl(index, key)}
					/>
				))}
			</div>
		</div>
	);
};

export default Reel;
