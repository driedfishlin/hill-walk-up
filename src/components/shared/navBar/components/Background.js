import * as React from 'react';

const Background = ({ NavBarState }): React.Node => (
	<div
		className={`${
			NavBarState.isOpen ? 'block' : 'hidden'
		} absolute h-full w-full bg-black opacity-20 transform z-40`}
	/>
);

export default Background;
