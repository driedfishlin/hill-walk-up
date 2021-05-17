// @flow
import * as React from 'react';
import { useEffect } from 'react';
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
	const location = useLocation();
	console.log(location);
	// get action from path（'new' or 'edit'）
	const action = location.pathname.split('/').pop();
	console.log(action);

	// ＥＤＩＴ >
	const prams = useParams();
	const recordId = prams.file_id;
	console.log(recordId);

	let record = null;
	if (action === 'edit') {
		const records = userState.user?.tables.records;
		console.log(records);
		if (records) record = records.find(item => item.id === recordId);
	}
	//TODO> if(!record) ...
	console.log(record?.location);
	console.log(location.state?.location);
	const targetMountain = TaiwanPeaksList.find(
		item => item.name === (record?.location || location.state?.location)
	);
	console.log(targetMountain);

	if (targetMountain)
		return (
			<div className={`p-7 text-t-gray-dark z-0`}>
				<h2 className={`h2-style mb-7`}>
					{(action === 'new' && '新增紀錄') ||
						(action === 'edit' && '編輯紀錄')}
				</h2>
				<MountainCard
					name={targetMountain.name}
					elevation={targetMountain.elevation}
					coordinate={targetMountain.coordinate}
					location={targetMountain.location}
					anchor={'回上一頁'}
					link={'back'}
				/>
				<EditRecordForm
					setFns={setFns}
					action={action}
					targetMountain={targetMountain.name}
					oldRecord={action === 'edit' ? record : {}}
				/>
			</div>
		);

	// //
	// // 下面的行為應該也可以改由路由來做
	// const prevPageAction = useLocation().state?.action;
	// const [mountain] = TaiwanPeaksList.filter(
	// 	item => item.name === mapState.activeMountain
	// );
	// useEffect(() => {
	// 	// 設定這個狀態的必要性？
	// 	mountain?.name && setFns.setActiveMountain(mountain?.name);
	// }, [mountain?.name, setFns]);

	// if (mountain?.name)
	// 	return (
	// 		<div className={`p-7 text-t-gray-dark z-0`}>
	// 			<h2 className={`h2-style mb-7`}>
	// 				{prevPageAction === 'new' && '新增'}
	// 				{prevPageAction === 'edit' && '編輯'}紀錄
	// 			</h2>
	// 			<MountainCard
	// 				name={mountain?.name}
	// 				elevation={mountain?.elevation}
	// 				coordinate={mountain?.coordinate}
	// 				location={mountain?.location}
	// 				anchor={'回上一頁'}
	// 			/>
	// 			<EditRecordForm
	// 				setFns={setFns}
	// 				prevPageAction={prevPageAction}
	// 				mountainNameFromLink={mountain?.name}
	// 			/>
	// 		</div>
	// 	);
	if (action === 'new') {
		return (
			<ErrorPage text={'未選擇地點！'} anchor={`去逛逛地圖`} link="/" />
		);
	} else {
		return (
			<ErrorPage
				statusCode={500}
				text={'有東西出錯了！'}
				anchor={`回到首頁`}
				link="/"
			/>
		);
	}
};

export default NewRecordPage;
