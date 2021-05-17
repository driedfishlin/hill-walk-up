// @flow
import * as React from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import MountainCard from '../../../shared/components/UIElement/MountainCard';
import LoadingText from '../../../shared/components/UIElement/LoadingText';
import ErrorPage from '../../../shared/components/ErrorPage';

import taiwanPacksInfo from '../../../utilities/data/100_peaks_of_taiwan';

import { faEdit as editIcon } from '@fortawesome/free-regular-svg-icons/faEdit.js';

//SECTION> Component
type propsType = { mapState: Object, userState: Object };
const RecordPage = ({ mapState, userState }: propsType): React.Node => {
	const routerFrom = useLocation().state?.from;
	// console.log('routerFrom: ', routerFrom);

	const recordId = useParams().file_id;
	// console.log('recordId', recordId);
	if (!recordId)
		return (
			<ErrorPage
				text={'發生內部錯誤'}
				statusCode={500}
				anchor={'返回地圖'}
				link={'/'}
			/>
		);

	const records = userState.user?.tables?.records;
	// console.log('records', records);
	if (!records)
		return (
			<ErrorPage
				text={'你還沒有建立任何記錄喔'}
				anchor={'返回地圖'}
				link={'/'}
			/>
		);

	// 沒有 router 早於 dispatch 的問題？
	const [activeRecord] = records.filter(item => item.id === recordId);
	// console.log('activeRecord', activeRecord);
	if (!activeRecord)
		return (
			<ErrorPage
				text={'找不到該筆紀錄'}
				statusCode={404}
				anchor={'返回地圖'}
				link={'/'}
			/>
		);

	const activeMountain = activeRecord.location;
	const [mountainInfo] = taiwanPacksInfo.filter(
		item => item.name === activeMountain
	);

	return (
		<div className={`relative p-7 z-0`}>
			<h2 className={`h2-style`}>我的紀錄</h2>
			<MountainCard
				anchor={'所有紀錄'}
				link={'/user/:user_id/records'}
				name={mountainInfo?.name}
				elevation={mountainInfo?.elevation}
				coordinate={mountainInfo?.coordinate}
				location={mountainInfo?.location}
			/>
			<div
				className={`relative bg-t-gray-dark text-t-gray-light transform -translate-y-5 rounded-b-3xl w-full px-7 py-12 shadow-lg z-0`}
			>
				{true ? (
					<>
						<h4
							className={`text-2xl font-medium tracking-wider mb-3`}
						>
							{activeRecord.title}
						</h4>
						<p className={`text-sm mb-7`}>
							<span className={`inline-block`}>
								{activeRecord.startDate}
							</span>{' '}
							-{' '}
							<span className={`inline-block`}>
								{activeRecord.endDate}
							</span>
						</p>
						<p className={`mb-5`}>{activeRecord.text}</p>
						<Link
							onClick={() =>
								document
									.querySelector('body')
									.scrollTo({ top: 0 })
							}
							to={{
								pathname: `/user/:user_id/records/${recordId}/edit`,
								state: {
									action: `edit`,
								},
							}}
						>
							<FontAwesomeIcon
								className={`text-t-gray-light float-right `}
								icon={editIcon}
							/>
						</Link>
					</>
				) : (
					<div className="text-white flex justify-center mt-5 transform -translate-x-2">
						<LoadingText />
					</div>
				)}
			</div>
		</div>
	);
};

export default RecordPage;
