// @flow
import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch as icon } from '@fortawesome/free-solid-svg-icons/faSearch.js';

type propsType = { clickFn: Function, buttonSize: number };

const SearchButton = ({ clickFn, buttonSize }: propsType): React.Node => {
	return (
		<div
			className={`relative bg-white rounded-tr-full rounded-br-full`}
			style={{ left: buttonSize + 'px' }}
		>
			<button
				onClick={() => {
					clickFn(true);
				}}
				className={`h-12 w-12 bg-t-green  rounded-full flex justify-center items-center focus:outline-none `}
			>
				<FontAwesomeIcon icon={icon} className="text-white text-2xl" />
			</button>
		</div>
	);
};

export default SearchButton;
