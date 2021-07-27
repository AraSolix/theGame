import React from 'react';
import { TextFieldProps } from './TextField.types';
import style from './TextField.module.scss';

const TextField: React.FC<TextFieldProps> = ({ placeholder, value, onChange, disabled, type }) => {
	return (
		<div className={style.body}>
			<div className={style.placeholder}>{placeholder}</div>
			<input type={type} maxLength={50} value={value} onChange={onChange} disabled={disabled} />
		</div>
	);
};

export default TextField;
