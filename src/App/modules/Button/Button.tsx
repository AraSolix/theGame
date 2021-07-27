import React from 'react';
import { ButtonProps } from './Button.types';
import style from './Button.module.scss';

import clsx from 'clsx';

const Button: React.FC<ButtonProps> = ({ text, onClick, disabled, bold, color }) => {
	return (
		<button
			className={clsx(style.body, { [style.red]: color === 'red', [style.grey]: color === 'grey' })}
			onClick={onClick}
			disabled={disabled}
			style={{ fontFamily: bold === 'bold' ? 'frank-bold' : 'frank-regular' }}>
			{text}
		</button>
	);
};

export default Button;
