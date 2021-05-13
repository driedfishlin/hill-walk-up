// @flow
import * as React from 'react';

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
				className={`flex items-center text-white ${
					UIState.homePage.background.icon ? 'visible' : 'invisible'
				}`}
			>
				<svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
					<path
						className="opacity-75"
						fill="currentColor"
						d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
					></path>
				</svg>
				<p>資料載入中</p>
			</div>
		</div>
	);
};

export default OverlayBackground;
