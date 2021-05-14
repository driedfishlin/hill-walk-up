// @flow
import * as React from 'react';
import LoadingText from './UIElement/LoadingText';
type propsType = { setFns: Object, UIState: Object };

const OverlayBackground = ({ setFns, UIState }: propsType): React.Node => {
	return (
		<div
			onClick={event => {
				if (!UIState.homePage.background.clickable) {
					event.stopPropagation();
				} else {
					setFns.setSearchBar(false);
					setFns.setInfoBox(false);
					setFns.setBackground(false, false);
					setFns.setSearchInput('');
				}
			}}
			className={`absolute top-0 left-0 w-full h-full bg-t-gray-dark bg-opacity-30 flex items-center justify-center ${
				UIState.homePage.background.show ? 'block' : 'hidden'
			} 
            `}
		>
			<div
				className={`text-white ${
					UIState.homePage.background.icon ? 'visible' : 'invisible'
				}`}
			>
				<LoadingText />
			</div>
		</div>
	);
};

export default OverlayBackground;
