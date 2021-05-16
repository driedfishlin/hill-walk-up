// @flow
import * as React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import TaiwanPeaksList from '../../../utilities/data/100_peaks_of_taiwan';

import MountainCard from '../../../shared/components/UIElement/MountainCard';
import EditRecordForm from './EditRecordForm';
import ErrorPage from '../../../shared/components/ErrorPage';

type propsType = { mapState: Object, setFns: Object };

const NewRecordPage = ({ mapState, setFns }: propsType): React.Node => {
	const prevPageAction = useLocation().state?.action;
	const [mountain] = TaiwanPeaksList.filter(
		item => item.name === mapState.activeMountain
	);
	useEffect(() => {
		// 設定這個狀態的必要性？
		mountain?.name && setFns.setActiveMountain(mountain?.name);
	}, [mountain?.name, setFns]);

	if (mountain?.name)
		return (
			<div className={`p-7 text-t-gray-dark z-0`}>
				<h2 className={`h2-style mb-7`}>
					{prevPageAction === 'new' && '新增'}
					{prevPageAction === 'edit' && '編輯'}紀錄
				</h2>
				<MountainCard
					name={mountain?.name}
					elevation={mountain?.elevation}
					coordinate={mountain?.coordinate}
					location={mountain?.location}
					anchor={'回上一頁'}
				/>
				<EditRecordForm
					setFns={setFns}
					prevPageAction={prevPageAction}
					mountainNameFromLink={mountain?.name}
				/>
			</div>
		);
	return <ErrorPage text={'未選擇地點！'} anchor={`去逛逛地圖`} link="/" />;
};

export default NewRecordPage;
