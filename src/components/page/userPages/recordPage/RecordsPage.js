// @flow
import * as React from 'react';
import { useState } from 'react';

import RecordSearchBar from './component/RecordSearchBar';
import RecordCard from './component/RecordCard';
import ErrorPage from '../../../shared/components/ErrorPage';

const RecordsPage = ({ userState }: { userState: Object }): React.Node => {
	//TODO> lazy logging
	//TODO> search system
	const [inputState, setInputState] = useState('');
	console.log(inputState);
	const records = userState.user?.tables?.records;
	// console.log('records', records);
	if (!records || records.length === 0)
		return (
			<ErrorPage
				text={'你還沒有建立任何記錄喔'}
				anchor={'返回地圖'}
				link={'/'}
			/>
		);

	const filteredList = records.filter(item => {
		return (
			item.title.includes(inputState) ||
			item.location.includes(inputState)
		);
	});

	return (
		<div className={`p-7`}>
			<h2 className={`h2-style`}>我的紀錄</h2>
			<RecordSearchBar useState={[inputState, setInputState]} />
			{filteredList.length ? (
				filteredList.map(item => (
					<RecordCard key={item.id} record={item} />
				))
			) : (
				<div className={`px-7 py-20`}>
					<p className={`text-center`}>未找到項目！</p>
				</div>
			)}
		</div>
	);
};

export default RecordsPage;
