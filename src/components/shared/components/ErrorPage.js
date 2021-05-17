// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faMapMarkerAlt as markerIcon } from '@fortawesome/free-solid-svg-icons/faMapMarkerAlt';
import { faChevronCircleRight as arrow } from '@fortawesome/free-solid-svg-icons/faChevronCircleRight';

type propsType = {
	text: string,
	anchor?: string,
	link?: string | void,
	statusCode?: number,
};

const ErrorPage = ({
	text,
	anchor,
	link,
	statusCode,
}: propsType): React.Node => {
	return (
		<div className={`flex flex-col justify-center items-center h-full`}>
			{statusCode && (
				<p className={`text-t-green text-8xl mb-10 tracking-wider`}>
					{statusCode}
				</p>
			)}
			<div className={`flex items-center`}>
				<FontAwesomeIcon
					icon={markerIcon}
					className="text-red-500 text-3xl ml-0.5 mr-3 relative "
				/>
				<p className={`text-t-gray-dark tracking-wide`}>{text}</p>
			</div>
			{(anchor || link) && (
				<Link
					to={link || '/'}
					className={`text-sm text-t-gray-normal ${
						statusCode ? 'mt-5' : 'mt-10'
					}`}
				>
					{anchor} <FontAwesomeIcon icon={arrow} />
				</Link>
			)}
		</div>
	);
};

export default ErrorPage;
