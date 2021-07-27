import React, { useState, useEffect } from 'react';
import style from './Start.module.scss';

import { useHistory } from 'react-router';
import cherryImg from '../../images/cherry.png';

import Title from '../../modules/Title/Title';
import Button from '../../modules/Button/Button';

const Start: React.FC = () => {
	const [click, setClick] = useState(true);

	const history = useHistory();

	useEffect(() => {
		setTimeout(() => setClick(false), 500);
	}, []);

	const handelClick = () => {
		setClick(true);
		setTimeout(() => history.push('/playground'), 500);
	};

	return (
		<div className={style.body} style={{ opacity: click ? 0 : 1 }}>
			<div className={style.header}>
				<img src={cherryImg} alt='cherry' />
				<Title text='THE GAME' />
			</div>
			<div className={style.content}>
				<Button text='START' onClick={handelClick} bold='bold' color='red' />
			</div>
		</div>
	);
};

export default Start;
