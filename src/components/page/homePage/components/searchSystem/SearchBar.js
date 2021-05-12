// @!flow
import * as React from 'react';
import { useRef } from 'react';

import SearchButton from './SearchButton';

const buttonSize = 48;

const SearchBar = ({ UIState, setFns }): React.Node => {
	const bar = useRef(null);
	return (
		<div className={`w-full p-7`}>
			<div ref={bar} className={`w-full overflow-hidden rounded-full`}>
				<div
					className={`relative flex justify-end bg-white shadow-md transition-transform w-full duration-300`}
					style={{
						right: '100%',
						transform:
							bar.current === null
								? ''
								: UIState.homePage.searchBar
								? `translateX(
                                    ${parseFloat(
										window.getComputedStyle(bar.current)
											.width
									) - buttonSize}px)`
								: `translateX(0%)`,
					}}
				>
					<SearchButton
						buttonSize={buttonSize}
						clickFn={setFns.setSearchBar}
					/>
				</div>
			</div>
		</div>
	);
};

export default SearchBar;
