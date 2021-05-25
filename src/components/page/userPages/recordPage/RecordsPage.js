// @flow
import * as React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

import RecordSearchBar from './component/RecordSearchBar';
import RecordCard from './component/RecordCard';
import ErrorPage from '../../../shared/components/ErrorPage';

const RecordsPage = ({ userState }: { userState: Object }): React.Node => {
	//TODO> lazy logging
	const userIdFromParams = useParams().user_id;
	const { user } = userState;
	const [inputState, setInputState] = useState('');
	const records = user.tables?.records;
	if (userIdFromParams !== user.account)
		return (
			<ErrorPage
				statusCode={404}
				text={`你沒有登入喔`}
				link="/user/sign"
				anchor={`請檢查網址，或註冊新會員`}
			/>
		);
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
		<div>
			<div className={`p-7 lg:max-w-5xl lg:mx-auto`}>
				<h2 className={`h2-style md:mb-10`}>我的紀錄</h2>
				<RecordSearchBar useState={[inputState, setInputState]} />
				<div
					className={`md:grid md:grid-cols-2 md:gap-5 lg:grid-cols-3`}
				>
					{filteredList.length ? (
						filteredList.map(item => (
							<RecordCard
								key={item.id}
								record={item}
								userIdFromParams={userIdFromParams}
							/>
						))
					) : (
						<div
							className={`px-7 py-20 md:col-span-2 lg:col-span-3`}
						>
							<p className={`text-center`}>未找到項目！</p>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default RecordsPage;
