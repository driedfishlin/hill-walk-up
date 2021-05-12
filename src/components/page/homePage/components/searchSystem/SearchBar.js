// @flow
import * as React from 'react';
import { useRef } from 'react';

import SearchButton from './SearchButton';

type propsType = { searchBarState: boolean, setFns: Object };

const SearchBar = ({ searchBarState, setFns }: propsType): React.Node => {
	const bar = useRef(null);
	return (
		<div className={`absolute top-7`}>
			<div
				className={`absolute w-screen px-7 
				${searchBarState ? '' : 'invisible'}`}
			>
				<div
					ref={bar}
					className={`w-full h-12 overflow-hidden rounded-full`}
				>
					<div
						className={`relative h-12 w-full bg-white shadow-xl transition-transform duration-300 transform ${
							searchBarState
								? 'translate-x-0'
								: '-translate-x-full'
						}`}
					>
						<button
							onClick={() => setFns.setSearchBar(false)}
							className={`h-12 w-8 pl-3 -mr-1 transform text-2xl text-t-gray-normal focus:outline-none`}
						>
							×
						</button>
						<input
							className={`h-12 text-lg text-t-gray-dark border-none focus:outline-none focus:ring-transparent`}
							type="text"
							placeholder={'附近有什麼山呢？'}
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
