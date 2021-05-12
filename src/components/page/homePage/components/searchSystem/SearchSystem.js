// @!flow
import * as React from 'react';
import SearchBar from './SearchBar';

const SearchSystem = ({ UIState, setFns }): React.Node => {
	return (
		<div className={`absolute top-0 left-0 w-full`}>
			<SearchBar UIState={UIState} setFns={setFns} />
		</div>
	);
};

export default SearchSystem;
