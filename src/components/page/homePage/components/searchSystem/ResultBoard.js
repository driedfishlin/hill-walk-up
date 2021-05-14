// @flow
import * as React from 'react';
import { useEffect, useState } from 'react';
import TaiwanPeaksList from '../../../../utilities/data/100_peaks_of_taiwan';

import ResultItem from './ResultItem';

const errorMessages = [
	'找不到符合條件的山喔',
	'沒有結果 OQ',
	'試試別的關鍵字吧',
];
const greetingMessages = [
	'附近有什麼山呢？',
	'週末想去哪裡晃晃？',
	'想找哪一座山？',
	'最近上山了嗎？',
	'多久沒出去走走了？',
];

const Message = ({ inputState, searchMode }) => {
	return (
		<div
			className={`h-full py-12 ${searchMode ? 'opacity-1' : 'opacity-0'}`}
		>
			<p className={`text-center text-t-gray-dark tracking-wide`}>
				{inputState.length === 0
					? greetingMessages[
							parseInt(Math.random() * greetingMessages.length)
					  ]
					: inputState.includes(' ')
					? '關鍵字中不能有空格喔'
					: errorMessages[
							parseInt(Math.random() * errorMessages.length)
					  ]}
			</p>
		</div>
	);
};

const ResultBoard = ({
	searchMode,
	setFns,
	inputState,
}: {
	searchMode: boolean,
	setFns: Object,
	inputState: string,
}): React.Node => {
	// const [resultList, setResultList] = useState(TaiwanPeaksList);
	const [resultList, setResultList] = useState([]);

	useEffect(() => {
		// show search result based on user input
		const result = TaiwanPeaksList.filter(
			item =>
				item.name.includes(inputState) ||
				item.location.includes(inputState)
		);
		if (inputState.length === 0 || result.length === 0)
			// return setResultList(TaiwanPeaksList);
			return setResultList([]);
		// 限制資料顯示筆數
		result.length = 20;
		setResultList(result);
		// setResultList(TaiwanPeaksList);
	}, [inputState]);

	return (
		// location point
		<div
			className={`fixed top-0 left-0 w-full h-1/2 transform ${
				searchMode
					? 'translate-y-0'
					: '-translate-y-full transition-transform delay-1200'
			}`}
		>
			{/* main */}
			<div
				className={`absolute top-0 w-full left-0 h-full bg-t-gray-light rounded-b-2xl shadow-lg overflow-hidden transition-transform duration-500  transform ${
					searchMode
						? 'translate-y-0 delay-700'
						: '-translate-y-full delay-0'
				}`}
			>
				<div
					className={` bg-opacity-30 pt-28 pb-12 h-full overflow-y-scroll`}
				>
					<ul
						className={`px-7 transition-opacity duration-500 ${
							searchMode ? 'opacity-100 delay-1000' : 'opacity-0'
						}`}
					>
						{resultList.length === 0 ? (
							<Message
								searchMode={searchMode}
								inputState={inputState}
							/>
						) : (
							resultList.map(item => (
								<ResultItem
									item={item}
									key={item.id}
									TaiwanPeaksList={TaiwanPeaksList}
									setFns={setFns}
								/>
							))
						)}
					</ul>
				</div>
				<div
					className={`bg-t-gray-light w-full h-24 absolute top-0 `}
					style={{
						boxShadow: 'rgb(244 244 244) 0px 0px 5px 5px',
					}}
				></div>
				<div
					className={`bg-t-gray-light w-full h-7 absolute bottom-0 pointer-events-none`}
					style={{
						boxShadow: 'rgb(244 244 244) 0px 0px 20px 20px',
					}}
				></div>
			</div>
		</div>
	);
};

export default ResultBoard;
