import React, { useState, useEffect } from 'react';
import style from './Debug.module.scss';

import { useDispatch } from 'react-redux';
import * as action from '../../redux/actions';

import Button from '../../modules/Button/Button';
import Control from './Control/Control';

const Debug: React.FC = () => {
	const [status, setStatus] = useState(true);

	const dispatch = useDispatch();

	useEffect(() => {
		if (status) dispatch(action.playgroundClearFixCombo());
		// eslint-disable-next-line
	}, [status]);

	const displayControl = () => {
		if (!status) {
			return (
				<>
					<div className={style.content}>
						<div>Reel 1</div>
						<Control id='reel1' />
					</div>
					<div className={style.content}>
						<div>Reel 2</div>
						<Control id='reel2' />
					</div>
					<div className={style.content}>
						<div>Reel 3</div>
						<Control id='reel3' />
					</div>
					<div className={style.text}>
						If you won't select position and symbol, the reels will continue to spin in random
						order!
					</div>
				</>
			);
		}
	};

	return (
		<div className={style.body}>
			<div className={style.header}>
				<Button
					text='Random'
					bold='regular'
					color={status ? 'red' : 'grey'}
					onClick={() => setStatus(true)}
				/>
				<Button
					text='Fix'
					bold='regular'
					color={status ? 'grey' : 'red'}
					onClick={() => setStatus(false)}
				/>
			</div>
			{displayControl()}
		</div>
	);
};

export default Debug;
