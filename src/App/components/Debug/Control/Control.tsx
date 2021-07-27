import React, { useState, useEffect } from 'react';
import style from './Control.module.scss';
import { ControlProps, PositionSymbolState } from './Control.types';

import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';
import * as action from '../../../redux/actions';

import { reel } from '../../../constants/reel';

const Control: React.FC<ControlProps> = ({ id }) => {
	const initialPosition = { name: 'Position', index: 0 };
	const initialSymbol = { name: 'Symbol', index: 0 };
	const [position, setPosition] = useState<PositionSymbolState>(initialPosition);
	const [symbol, setSymbol] = useState<PositionSymbolState>(initialSymbol);

	const positions = ['top', 'center', 'bottom'];

	const dispatch = useDispatch();

	const createOrder = () => {
		if (position.index === 0) {
			const elem2 = symbol.index !== 4 ? symbol.index + 1 : 0;
			return [symbol.index, elem2];
		}
		if (position.index === 1) {
			const elem1 = symbol.index !== 0 ? symbol.index - 1 : 4;
			const elem3 = symbol.index !== 4 ? symbol.index + 1 : 0;
			return [elem1, symbol.index, elem3];
		}
		if (position.index === 2) {
			const elem1 = symbol.index !== 0 ? symbol.index - 1 : 4;
			return [elem1, symbol.index];
		}
	};

	useEffect(() => {
		if (symbol.name !== 'Symbol')
			dispatch(action.playgroundSetFixCombo({ reelId: id, result: createOrder() }));
		// eslint-disable-next-line
	}, [position, symbol]);

	const handelClick = () => {
		dispatch(action.playgroundClearFixComboById(id));
		setPosition(initialPosition);
		setSymbol(initialSymbol);
	};

	return (
		<div className={style.body}>
			<div className={style.block}>
				<Dropdown>
					<Dropdown.Toggle variant='Light' id='ropdown-basic'>
						{position.name}
					</Dropdown.Toggle>
					<Dropdown.Menu>
						<Dropdown.Item onClick={handelClick} className={style.divider}>
							Position
						</Dropdown.Item>
						{positions.map((item, index) => (
							<Dropdown.Item
								key={index + 'POSITION'}
								onClick={() => setPosition({ name: item, index: index })}>
								{item}
							</Dropdown.Item>
						))}
					</Dropdown.Menu>
				</Dropdown>
			</div>
			<div className={style.block}>
				<Dropdown>
					<Dropdown.Toggle
						variant='Light'
						id='ropdown-basic'
						disabled={position.name === 'Position'}>
						{symbol.name}
					</Dropdown.Toggle>
					<Dropdown.Menu>
						<Dropdown.Item onClick={handelClick} className={style.divider}>
							Symbol
						</Dropdown.Item>
						{reel.map((item, index) => (
							<Dropdown.Item
								key={index + 'SYMBOL'}
								onClick={() => setSymbol({ name: item.id, index: index })}>
								{item.id}
							</Dropdown.Item>
						))}
					</Dropdown.Menu>
				</Dropdown>
			</div>
		</div>
	);
};

export default Control;
