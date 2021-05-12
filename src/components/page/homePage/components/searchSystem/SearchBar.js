// @flow
import * as React from 'react';
import { useRef } from 'react';

import SearchButton from './SearchButton';

type propsType = { searchBarState: boolean, setFns: Object, mapState: Object };

const SearchBar = ({
	searchBarState,
	setFns,
	mapState,
}: propsType): React.Node => {
	const bar = useRef(null);
	return (
		<div
			className={`absolute transition-transform delay-300 duration-300 transform ${
				searchBarState ? '-translate-y-12' : 'translate-y-7'
			}`}
		>
			<div
				className={`absolute w-screen px-7 
				${searchBarState ? '' : 'invisible'}`}
			>
				<div
					ref={bar}
					className={`w-full h-12 overflow-hidden rounded-full transition-shadow delay-300 ${
						searchBarState ? 'shadow-md' : 'shadow-none'
					}`}
				>
					<div
						className={`relative h-12 w-full bg-white shadow-xl transition-transform duration-400 transform ${
							searchBarState
								? 'translate-x-0'
								: '-translate-x-full'
						}`}
					>
						<button
							onClick={() => setFns.setSearchBar(false)}
							className={`h-12 w-8 pl-3 -mr-1 transform text-2xl text-t-gray-normal focus:outline-none transition-opacity delay-400 duration-300 ${
								searchBarState ? 'opacity-1' : 'opacity-0'
							}`}
						>
							×
						</button>
						<input
							className={`h-12 text-lg text-t-gray-dark border-none focus:outline-none focus:ring-transparent transition-opacity delay-400 duration-300 ${
								searchBarState ? 'opacity-1' : 'opacity-0'
							}`}
							type="text"
							placeholder={'附近有什麼山呢？'}
							value={mapState.searchInput}
							onChange={event =>
								setFns.setSearchInput(event.target.value)
							}
						/>
					</div>
				</div>
			</div>
			<SearchButton
				setFns={setFns}
				searchBarState={searchBarState}
				sibling={bar}
			/>
		</div>
	);
};

export default SearchBar;