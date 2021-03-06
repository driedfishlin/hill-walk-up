// @flow
import * as React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { Provider } from 'react-redux';
// import { MapProvider } from './components/utilities/map/mapAPI';

import { initMap } from './components/utilities/map/mapAPI';

import store from './store';

import NavBar from './components/shared/navBar/NavBar';
import Header from './components/shared/Header';
import HomePage from './components/page/homePage/HomePage';
import MountainPage from './components/page/mountainPage/MountainPage';
import UserPages from './components/page/userPages/UserPages';
import AboutPage from './components/page/aboutPage/AboutPage';

initMap();

const App = function(): React.Node {
	return (
		<>
			<Provider store={store}>
				{/* <MapProvider store={store}> */}
				<BrowserRouter>
					<Header />
					<HomePage />
					<Switch>
						<Route path="/" exact />
						<Route path="/mountains/:mountain" exact>
							<MountainPage />
						</Route>
						<Route path="/user">
							<UserPages />
						</Route>
						<Route path="/about" exact>
							<AboutPage />
						</Route>
						<Redirect to="/" />
					</Switch>
					<NavBar />
				</BrowserRouter>
				{/* </MapProvider> */}
			</Provider>
		</>
	);
};

export default App;
