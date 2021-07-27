import React from 'react';
import { TitleProps } from './Title.types';
import style from './Title.module.scss';

const Title: React.FC<TitleProps> = ({ text }) => {
	return (
		<div className={style.body}>
			{text}
		</div>
	);
};

export default Title
