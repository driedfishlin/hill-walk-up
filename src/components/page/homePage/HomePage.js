// @flow
import * as React from 'react';

import Map from './components/Map';

const HomePage = function(): React.Node {
	return (
		<main className="bg-gray-200 flex-grow">
			<Map />
		</main>
	);
};

export default HomePage;
