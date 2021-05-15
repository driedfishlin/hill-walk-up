// @flow
import * as React from 'react';
// import { useHistory } from 'react-router-dom';
import TaiwanPeaksList from '../../../utilities/data/100_peaks_of_taiwan';
import MountainCard from '../../../shared/components/UIElement/MountainCard';
import EditRecordForm from './EditRecordForm';

type propsType = { mapState: Object };

const NewRecordPage = ({ mapState }: propsType): React.Node => {
	//FIXME> 使用假資料
	let aaaaaaaa = '玉山';
	const [mountain] = TaiwanPeaksList.filter(
		// item => item.name === mapState.activeMountain
		item => item.name === aaaaaaaa
	);
	return (
		<div className={`p-7 text-t-gray-dark z-0`}>
			<h2 className={`h2-style mb-7`}>新增 / 編輯紀錄</h2>
			<MountainCard
				name={mountain.name}
				elevation={mountain.elevation}
				coordinate={mountain.coordinate}
				location={mountain.location}
				anchor={'回上一頁'}
			/>
			<EditRecordForm />
		</div>
	);
};

export default NewRecordPage;
