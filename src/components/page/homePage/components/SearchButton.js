// @flow
import * as React from 'react';
// faSearch
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch as icon } from '@fortawesome/free-solid-svg-icons/faSearch.js';

const SearchButton = (): React.Node => {
	return (
		<div className="absolute left-9 bottom-10 bg-t-green h-12 w-12 rounded-full flex justify-center items-center shadow-md">
			<FontAwesomeIcon icon={icon} className="text-white text-2xl" />
		</div>
	);
};

export default SearchButton;
