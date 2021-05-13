// @flow
import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch as icon } from '@fortawesome/free-solid-svg-icons/faSearch.js';

type propsType = {
	setFns: Object,
	UIState: Object,
	siblings: Object,
};

const SearchButton = ({ setFns, UIState, siblings }: propsType): React.Node => {
	const searchBarState = UIState.homePage.searchMode;
	return (
		<button
			onClick={() => {
				setFns.setSearchBar(true);
				setFns.setBubble(false);
				setFns.setBackground(true, false);
				setTimeout(() => setFns.setBackground(true, true), 700);
				if (siblings.inputDOM.current)
					setTimeout(() => siblings.inputDOM.current.focus(), 500);
			}}
			className={`absolute ml-7 h-12 w-12 bg-t-green rounded-full flex justify-center items-center transition-transform duration-300 focus:outline-none ${
				searchBarState ? '' : 'shadow-lg'
			}`}
			// 螢幕尺寸變動時需調整位置
			style={{
				transform:
					siblings.barDOM.current === null
						? ''
						: searchBarState
						? `translateX(${parseFloat(
								window.getComputedStyle(siblings.barDOM.current)
									.width
						  ) - 48}px)`
						: 'translateX(0px)',
			}}
		>
			<FontAwesomeIcon icon={icon} className="text-white text-2xl" />
		</button>
	);
};

export default SearchButton;
