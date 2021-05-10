// @flow
import * as React from 'react';

import Map from './components/Map';
import SearchButton from './components/SearchButton';

const HomePage = function(): React.Node {
	return (
		<main className="bg-gray-200 flex-grow">
			<Map />
			<SearchButton />
		</main>
	);
};

export default HomePage;
