// @flow
import * as React from 'react';

import TaiwanPeaksList from '../../../../utilities/data/100_peaks_of_taiwan';
import {
	GOOGLE_MAP,
	createMapMark,
	zoomMap,
} from '../../../../utilities/map/mapAPI';

const onItemClick = event => {
	const Map = GOOGLE_MAP.map;
	const searchTarget = event.target.querySelector('p').innerText;
	const searchResult = TaiwanPeaksList.find(
		item => item.name === searchTarget
	);
	if (Map === null) {
		console.log('無法取得地圖資料');
	} else {
		createMapMark(searchResult);
		zoomMap(searchResult.coordinate, true);
		// Map.panTo(searchResult.coordinate);
	}
};

type propsType = {
	item: Object,
	setFns: Object,
};

const ResultItem = ({ item, setFns }: propsType): React.Node => {
	return (
		<li className={`py-1`}>
			<button
				onClick={event => {
					onItemClick(event);
					setFns.setSearchBar(false);
					setFns.setSearchInput('');
				}}
				className={`flex items-end justify-between w-full py-1 tracking-widest font-light focus:outline-none`}
			>
				<p
					className={` text-center pointer-events-none ${
						item.name.length < 5
							? 'text-2xl'
							: item.name.length < 6
							? 'text-xl'
							: 'text-lg'
					}`}
				>
					{item.name}
				</p>
				<div className={`text-right text-md pointer-events-none `}>
					<p>
						{item.elevation}{' '}
						<span className={`text-right text-sm  tracking-tight`}>
							公尺
						</span>
					</p>
					<p className={`text-xs tracking-tight`}>{item.location}</p>
				</div>
			</button>
		</li>
	);
};

export default ResultItem;
