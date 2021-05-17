// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faMapMarkerAlt as markerIcon } from '@fortawesome/free-solid-svg-icons/faMapMarkerAlt';

const RecordCard = ({ record }: { record: Object }): React.Node => {
	return (
		<Link
			to={`/user/:user_id/records/${record.id}`}
			onClick={() => document.querySelector('body').scrollTo({ top: 0 })}
			className={`block bg-white rounded-xl shadow-md mt-7 mx-0.5  tracking-wide overflow-hidden`}
		>
			<div className={`bg-t-green text-white  p-5 `}>
				<div className={`flex items-start`}>
					<FontAwesomeIcon
						icon={markerIcon}
						className="text-red-400 text-lg ml-0.5 mr-2 relative"
						style={{ top: '4px' }}
					/>
					<h3 className={`text-xl font-medium mb-1.5`}>
						{record.title}
					</h3>
				</div>
				<p className={`text-md font-medium mb-0.5 text-right mr-3`}>
					{record.location}
				</p>
				<p className={`text-xs text-right mr-3`}>
					{record.startDate}-{record.endDate}
				</p>
			</div>
			<p className={` p-5 `}>
				{record.text.length > 50
					? record.text.slice(0, 50) + '...'
					: record.text}
			</p>
		</Link>
	);
};

export default RecordCard;
