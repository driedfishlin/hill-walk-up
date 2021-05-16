// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MountainCard from '../../../shared/components/UIElement/MountainCard';
import LoadingText from '../../../shared/components/UIElement/LoadingText';

import taiwanPacksInfo from '../../../utilities/data/100_peaks_of_taiwan';

import { faEdit as editIcon } from '@fortawesome/free-regular-svg-icons/faEdit.js';

type propsType = { mapState: Object };

const RecordPage = ({ mapState }: propsType): React.Node => {
	const [activeMountain] = taiwanPacksInfo.filter(
		item => item.name === '玉山'
		// item => item.name === mapState.activeMountain
	);
	return (
		<div className={`relative p-7 z-0`}>
			<h2 className={`h2-style`}>我的紀錄</h2>
			{/* link 只有在目錄點進來才顯示，修改記錄、新增紀錄則不給予 */}
			<MountainCard
				anchor="回上一頁"
				name={activeMountain?.name}
				elevation={activeMountain?.elevation}
				coordinate={activeMountain?.coordinate}
				location={activeMountain?.location}
			/>
			<div
				className={`relative bg-t-gray-dark text-t-gray-light transform -translate-y-5 rounded-b-3xl w-full px-7 py-12 shadow-lg z-0`}
			>
				{true ? (
					<>
						<h4
							className={`text-2xl font-medium tracking-wider mb-3`}
						>
							度過了辛苦但愉快的週末
						</h4>
						<p className={`text-sm mb-7`}>
							<span className={`inline-block`}>
								2020年12月24日
							</span>{' '}
							-{' '}
							<span className={`inline-block`}>
								2020年12月25日
							</span>
						</p>
						<p className={`mb-5`}>
							度過了辛苦但愉快的週末度過了辛苦但愉快的週末度過了辛苦但愉快的週末度過了辛苦但愉快的週末度過了辛苦但愉快的週末度過了辛苦但愉快的週末度過了辛苦但愉快的週末度過了辛苦但愉快的週末度過了辛苦但愉快的週末度過了辛苦但愉快的週末度過了辛苦但愉快的週末度過了辛苦但愉快的週末度過了辛苦但愉快的週末度過了辛苦但愉快的週末度過了辛苦但愉快的週末度過了辛苦但愉快的週末度過了辛苦但愉快的週末度過了辛苦但愉快的週末度過了辛苦但愉快的週末
						</p>
						<Link
							to={{
								pathname: `/user/:user_id/records/:file_id/edit`,
								state: {
									from: `/user/:user_id/records/:file_id`,
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
