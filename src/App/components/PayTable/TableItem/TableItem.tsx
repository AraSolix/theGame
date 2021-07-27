import React from 'react';
import { TableItemProps } from './TableItem.types';
import style from './TableItem.module.scss';

const TableItem: React.FC<TableItemProps> = ({ id, text, combo }) => {
	return <div className={id === combo ? style.rowActive : style.row}>{text}</div>;
};

export default TableItem;
