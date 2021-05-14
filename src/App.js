// @flow
import * as React from 'react';

import { Provider } from 'react-redux';
// import { MapProvider } from './components/utilities/map/mapAPI';

import store from './store';

import NavBar from './components/shared/navBar/NavBar';
import Header from './components/shared/Header';
// import HomePage from './components/page/homePage/HomePage';
import MountainPage from './components/page/mountainPage/MountainPage';

const App = function(): React.Node {
	return (
		<>
			<Provider store={store}>
				{/* <MapProvider store={store}> */}
				<NavBar />
				<Header />
				{/* <HomePage /> */}
				<MountainPage />
				{/* </MapProvider> */}
			</Provider>
		</>
	);
};

export default App;
