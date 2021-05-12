// @flow
import * as React from 'react';
import SearchBar from './SearchBar';

type propsType = { UIState: Object, setFns: Object };

const SearchSystem = ({ UIState, setFns }: propsType): React.Node => {
	return (
		<div className={`absolute top-0 left-0`}>
			<SearchBar
				searchBarState={UIState.homePage.searchMode}
				setFns={setFns}
			/>
		</div>
	);
};

export default SearchSystem;
