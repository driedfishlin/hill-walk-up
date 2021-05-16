// @flow
import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit as icon } from '@fortawesome/free-regular-svg-icons/faEdit.js';

const RecordCard = (): React.Node => {
	return (
		<div
			className={`bg-white rounded-xl shadow-md mt-7 mx-0.5  tracking-wide overflow-hidden`}
		>
			<div className={`bg-t-gray-dark text-white  p-5 `}>
				<h3 className={`text-xl font-medium mb-1.5`}>
					很辛苦但是很值得
				</h3>
				<p className={`text-md font-medium mb-0.5`}>拉拉山</p>
				<p className={`text-xs`}>2020/01/01-2020/01/01</p>
			</div>
			<p className={` p-5 `}>
				很辛苦但是很值得很辛苦但是很值得很辛苦但是很值得很辛苦但是很值得很辛苦但是很值得很辛苦但是很值得很辛苦但是很值得很辛苦但是很值得很辛苦但是很值得很辛苦但是很值得
			</p>
			{/* <div className={`flex justify-end mt-2`}>
				<FontAwesomeIcon icon={icon} className={`text-t-gray-normal`} />
			</div> */}
		</div>
	);
};

export default RecordCard;
