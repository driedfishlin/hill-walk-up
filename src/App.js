// @flow
import * as React from 'react';

import { Provider } from 'react-redux';

import store from './store';

import Header from './components/shared/Header';
import HomePage from './components/page/homePage/HomePage';
import NavBar from './components/shared/navBar/NavBar';

const App = function(): React.Node {
	return (
		<>
			<Provider store={store}>
				<NavBar />
				<Header />
				<HomePage />
			</Provider>
		</>
	);
};

export default App;
