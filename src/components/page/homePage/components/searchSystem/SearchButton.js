// @flow
import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch as icon } from '@fortawesome/free-solid-svg-icons/faSearch.js';

type propsType = {
	setFns: Object,
	searchBarState: boolean,
	sibling: Object,
};

const SearchButton = ({
	setFns,
	searchBarState,
	sibling,
}: propsType): React.Node => {
	window.bbb = sibling;
	return (
		<button
			onClick={() => {
				setFns.setSearchBar(true);
				setFns.setBubble(false);
			}}
			className={`absolute ml-7 h-12 w-12 bg-t-green rounded-full flex justify-center items-center transition-transform duration-300 focus:outline-none ${
				searchBarState ? '' : 'shadow-lg'
			}`}
			// 螢幕尺寸變動時需調整位置
			style={{
				transform:
					sibling.current === null
						? ''
						: searchBarState
						? `translateX(${parseFloat(
								window.getComputedStyle(sibling.current).width
						  ) - 48}px)`
						: 'translateX(0px)',
			}}
		>
			<FontAwesomeIcon icon={icon} className="text-white text-2xl" />
		</button>
	);
};

export default SearchButton;
