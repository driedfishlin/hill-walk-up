// @flow
import * as React from 'react';

import RecordSearchBar from './component/RecordSearchBar';
import RecordCard from './component/RecordCard';

const RecordsPage = (): React.Node => {
	return (
		<div className={`p-7`}>
			<h2 className={`h2-style`}>我的紀錄</h2>
			<RecordSearchBar />
			<RecordCard />
		</div>
	);
};

export default RecordsPage;
