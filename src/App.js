// @flow
import * as React from 'react';

import { Provider } from 'react-redux';
// import { MapProvider } from './components/utilities/map/mapAPI';

import store from './store';

import Header from './components/shared/Header';
import HomePage from './components/page/homePage/HomePage';
import NavBar from './components/shared/navBar/NavBar';

const App = function(): React.Node {
	return (
		<>
			<Provider store={store}>
				{/* {console.log(
					store.getState().UIState.homePage.infoBox.position
				)} */}
				{/* <MapProvider store={store}> */}
				<NavBar />
				<Header />
				<HomePage />
				{/* </MapProvider> */}
			</Provider>
		</>
	);
};

export default App;
