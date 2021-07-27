import React from 'react';
import { fixFromSelector } from './Reels.types';
import style from './Reels.module.scss';

import { useSelector } from 'react-redux';

import Reel from './Reel/Reel';

const Reels: React.FC = () => {
	const fix = useSelector((state: fixFromSelector) => state.fix);

	return (
		<div className={style.body}>
			<Reel timer={2000} reelId='reel1' position={fix.reel1 ? fix.reel1 : null} />
			<Reel timer={2500} reelId='reel2' position={fix.reel2 ? fix.reel2 : null} />
			<Reel timer={3000} reelId='reel3' position={fix.reel3 ? fix.reel3 : null} />
		</div>
	);
};

export default Reels;
