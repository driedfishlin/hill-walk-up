// @flow
import * as React from 'react';

import Header from './components/shared/Header';
import HomePage from './components/page/homePage/HomePage';
import NavBar from './components/shared/navBar/NavBar';

const App = function(): React.Node {
	return (
		<>
			<NavBar />
			<Header />
			<HomePage />
		</>
	);
};

export default App;
