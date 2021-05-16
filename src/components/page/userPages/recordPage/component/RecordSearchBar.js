// @flow
import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch as icon } from '@fortawesome/free-solid-svg-icons/faSearch.js';

const RecordSearchBar = (): React.Node => {
	return (
		<div
			className={`flex justify-between items-center w-full h-10 rounded-full overflow-hidden bg-white`}
		>
			<input
				className={`h-full flex-grow pl-3.5 focus:outline-none `}
				placeholder={`請輸入山岳名稱或紀錄標題`}
			/>
			<button
				className={`h-10 w-10 rounded-full bg-t-gray-dark focus:outline-none`}
			>
				<FontAwesomeIcon icon={icon} className={`text-white `} />
			</button>
		</div>
	);
};

export default RecordSearchBar;
