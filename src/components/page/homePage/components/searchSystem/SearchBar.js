// @flow
import * as React from 'react';
import { useRef } from 'react';

import SearchButton from './SearchButton';

type propsType = { UIState: Object, setFns: Object, mapState: Object };

const SearchBar = ({ UIState, setFns, mapState }: propsType): React.Node => {
	const barDOM = useRef(null);
	const inputDOM = useRef(null);
	const searchBarState = UIState.homePage.searchMode;
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
					ref={barDOM}
					className={`w-full h-12 overflow-hidden rounded-full transition-shadow delay-300 ${
						searchBarState ? 'shadow-md' : 'shadow-none'
					} lg:w-1/3`}
				>
					<div
						className={`flex items-center relative h-12 w-full bg-white shadow-xl transition-transform duration-400 transform ${
							searchBarState
								? 'translate-x-0'
								: '-translate-x-full'
						}`}
					>
						<button
							onClick={() => {
								setFns.setSearchBar(false);
								setFns.setSearchInput('');
								setFns.setBackground(false, false);
							}}
							className={`h-12 w-8 pl-3 -mr-1 relative bottom-0.5 text-2xl text-t-gray-normal focus:outline-none transition-opacity delay-400 duration-300 ${
								searchBarState ? 'opacity-1' : 'opacity-0'
							}`}
						>
							×
						</button>
						<input
							ref={inputDOM}
							className={`h-12 text-lg text-t-gray-dark border-none focus:outline-none focus:ring-transparent transition-opacity delay-400 duration-300 ${
								searchBarState ? 'opacity-1' : 'opacity-0'
							}`}
							type="text"
							placeholder={'輸入地區或山岳名稱'}
							value={mapState.searchInput}
							onChange={event =>
								setFns.setSearchInput(event.target.value.trim())
							}
						/>
					</div>
				</div>
			</div>
			<SearchButton
				UIState={UIState}
				setFns={setFns}
				siblings={{ barDOM, inputDOM }}
			/>
		</div>
	);
};

export default SearchBar;
