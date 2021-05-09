// @flow
import * as React from 'react';

import Header from './components/shared/Header';
import HomePage from './components/page/homePage/HomePage';

const App = function(): React.Node {
	return (
		<>
			<Header />
			<HomePage />
		</>
	);
};

export default App;
