// @flow
import * as React from 'react';
import { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import TaiwanPeaksList from '../../../utilities/data/100_peaks_of_taiwan';

import MountainCard from '../../../shared/components/UIElement/MountainCard';
import EditRecordForm from './EditRecordForm';
import ErrorPage from '../../../shared/components/ErrorPage';

type propsType = { mapState: Object, setFns: Object, userState: Object };

const NewRecordPage = ({
	mapState,
	setFns,
	userState,
}: propsType): React.Node => {
	const [warningBoardState, setWarningBoardState] = useState(false);
	const location = useLocation();
	// get action from path（'new' or 'edit'）
	const action = location.pathname.split('/').pop();

	const prams = useParams();
	const recordId = prams.file_id;
	const userIdFromParams = prams.user_id;
	const { user } = userState;

	let record = null;
	if (action === 'edit') {
		const records = user.tables.records;
		if (records) record = records.find(item => item.id === recordId);
	}

	const targetMountain = TaiwanPeaksList.find(
		item => item.name === (record?.location || location.state?.location)
	);

	const [overwriteFlagState, setOverwriteFlagState] = useState(false);

	if (targetMountain)
		return (
			<div>
				<div
					className={`p-7 text-t-gray-dark z-0 md:p-12 lg:max-w-5xl lg:mx-auto`}
				>
					<h2 className={`h2-style mb-7 md:mb-14`}>
						{(action === 'new' && '新增紀錄') ||
							(action === 'edit' && '編輯紀錄')}
					</h2>
					<div className={`flex flex-col justify-center`}>
						<div className={`md:w-1/2 md:mx-auto`}>
							<MountainCard
								name={targetMountain.name}
								elevation={targetMountain.elevation}
								coordinate={targetMountain.coordinate}
								location={targetMountain.location}
								anchor={'回上一頁'}
								link={'back'}
								userState={userState}
								overwriteFlagState={overwriteFlagState}
							/>
						</div>
						<EditRecordForm
							setFns={setFns}
							action={action}
							targetMountain={targetMountain.name}
							oldRecord={action === 'edit' ? record : {}}
							useWarningBoardState={[
								warningBoardState,
								setWarningBoardState,
							]}
							setOverwriteFlagState={setOverwriteFlagState}
						/>
					</div>
				</div>
			</div>
		);

	if (action === 'new') {
		return (
			<ErrorPage text={'未選擇地點！'} anchor={`去逛逛地圖`} link="/" />
		);
	}
	if (userIdFromParams !== user.account)
		return (
			<ErrorPage
				statusCode={404}
				text={`你沒有登入喔`}
				link="/user/sign"
				anchor={`請檢查網址，或註冊新會員`}
			/>
		);
	return (
		<ErrorPage
			statusCode={500}
			text={'有東西出錯了！'}
			anchor={`回到首頁`}
			link="/"
		/>
	);
};

export default NewRecordPage;
