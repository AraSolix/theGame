import React from 'react';
import style from './App.module.scss'

import { Route } from 'react-router-dom';

import Start from './pages/Start/Start'
import Playground from './pages/Playground/Playground';

const App: React.FC = () => {
	return (
		<div className={style.body}>
			<Route path='/' exact component={Start} />
			<Route path='/playground' exact component={Playground} />
		</div>
	);
};

export default App;
