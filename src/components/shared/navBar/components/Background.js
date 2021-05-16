import * as React from 'react';
import { headerHeight } from '../../../../index';

const Background = ({ NavBarState }): React.Node => (
	<div
		className={`${
			NavBarState.isOpen ? 'block' : 'hidden'
		} absolute h-full w-full bg-black opacity-20 transform z-40 ${
			headerHeight[3]
		}`}
	/>
);

export default Background;
