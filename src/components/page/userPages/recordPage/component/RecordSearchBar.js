// @flow
import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch as icon } from '@fortawesome/free-solid-svg-icons/faSearch.js';

type propsType = { useState: [string, Function] };

const RecordSearchBar = ({ useState }: propsType): React.Node => {
	const [inputState, setInputState] = useState;
	return (
		<div
			className={`flex justify-between items-center w-full h-10 rounded-full overflow-hidden bg-white md:mb-5 lg:w-1/2 lg:float-right`}
		>
			<input
				className={`h-full flex-grow pl-3.5 focus:outline-none `}
				placeholder={`請輸入山岳名稱或紀錄標題`}
				value={inputState}
				onChange={event => setInputState(event.target.value)}
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
