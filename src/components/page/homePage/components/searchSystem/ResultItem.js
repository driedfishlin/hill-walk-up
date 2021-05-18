// @flow
import * as React from 'react';

import TaiwanPeaksList from '../../../../utilities/data/100_peaks_of_taiwan';
import {
	GOOGLE_MAP,
	createMapMark,
	zoomMap,
} from '../../../../utilities/map/mapAPI';

const onItemClick = (event, setFns) => {
	const Map = GOOGLE_MAP.map;
	const searchTarget = event.target.querySelector('p').innerText;
	const searchResult = TaiwanPeaksList.find(
		item => item.name === searchTarget
	);
	if (Map === null) {
		console.log('無法取得地圖資料');
	} else {
		createMapMark(searchResult);

		let openInfoBoxDelay = 1600;
		switch (GOOGLE_MAP.map?.getZoom()) {
			case 8:
				openInfoBoxDelay = 1600;
				break;
			case 9:
				openInfoBoxDelay = 1400;
				break;
			case 10:
				openInfoBoxDelay = 1200;
				break;
			case 11:
				openInfoBoxDelay = 1000;
				break;
			case 12:
				openInfoBoxDelay = 1000;
				break;
			case 13:
				openInfoBoxDelay = 1000;
				break;
			default:
				openInfoBoxDelay = 1600;
		}

		zoomMap(searchResult.coordinate, true);

		setFns.setSearchBar(false);
		setFns.setSearchInput('');
		setFns.setBackground(true, false, true);

		const searchMarkDOM = () =>
			setTimeout(() => {
				// adding map_mark_DOM to the UI is asynchronous.
				const markDOM = document.querySelector(
					`div[title="${searchTarget}"]`
				);
				if (!markDOM) {
					searchMarkDOM();
					return;
				}
				setTimeout(() => {
					const positionInfo = markDOM.getBoundingClientRect();
					setFns.setInfoBox(
						true,
						{
							x: positionInfo.x,
							y: positionInfo.y,
						},
						searchResult
					);
					setFns.setBackground(true, true, false);
				}, openInfoBoxDelay); // 決定何時開啟彈窗
			}, 200);

		searchMarkDOM();
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
				onClick={event => onItemClick(event, setFns)}
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
