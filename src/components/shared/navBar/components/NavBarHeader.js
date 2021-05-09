// @flow
import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Some problems will occur when tree-shaking of fontawesome,
// so provided the full path.
import { faChevronCircleRight as arrow } from '@fortawesome/free-solid-svg-icons/faChevronCircleRight';

const NavBarHeader = (): React.Node => {
	return (
		<div className="flex items-center justify-between mb-8">
			<FontAwesomeIcon icon={arrow} className="text-4xl text-t-green" />
			<div className="flex-grow">
				<button className="float-right border py-1 px-2 font-light rounded-md border-t-gray-dark text-t-gray-dark focus:outline-none active:text-t-green active:border-t-green">
					登出
				</button>
			</div>
		</div>
	);
};
export default NavBarHeader;
