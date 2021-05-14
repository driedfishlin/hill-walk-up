// @flow
import * as React from 'react';

import MountainCard from './component/MountainCard';

const MountainPage = (): React.Node => {
	return (
		<main className={`relative mt-20 min-h-full bg-t-gray-light p-7`}>
			<MountainCard />
		</main>
	);
};

export default MountainPage;
