// @flow
import * as React from 'react';
import SearchBar from './SearchBar';
import ResultBoard from './ResultBoard';

type propsType = { UIState: Object, setFns: Object, mapState: Object };

const SearchSystem = ({ UIState, setFns, mapState }: propsType): React.Node => {
	return (
		<div
			className={`absolute top-0 left-0 ${
				UIState.homePage.background.icon ||
				UIState.homePage.infoBox.show
					? 'pointer-events-none opacity-50'
					: ''
			}`}
		>
			<ResultBoard
				searchMode={UIState.homePage.searchMode}
				setFns={setFns}
				inputState={mapState.searchInput}
			/>
			<SearchBar
				searchBarState={UIState.homePage.searchMode}
				setFns={setFns}
				mapState={mapState}
				UIState={UIState}
			/>
		</div>
	);
};

export default SearchSystem;
