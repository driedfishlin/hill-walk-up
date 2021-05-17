// @flow
import * as React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import MountainElement from '../../../shared/components/UIElement/MountainElement';

import { faMapMarkerAlt as markerIcon } from '@fortawesome/free-solid-svg-icons/faMapMarkerAlt';
import { faChevronCircleRight as arrow } from '@fortawesome/free-solid-svg-icons/faChevronCircleRight';

const info_p_class = `text-sm flex justify-between mt-1`;
const info_span_class = `text-t-green`;
const info_sub_span_class = ``;

const MountainCard = ({
	children,
	name,
	elevation,
	coordinate,
	location,
	link,
	anchor,
}: {
	children?: Object,
	name: string,
	elevation: number,
	coordinate: { lat: number, lng: number },
	location: string,
	link?: string,
	anchor?: string | void | null,
}): React.Node => {
	const Location = useLocation();
	const history = useHistory();
	return (
		<section className={`relative z-10`}>
			<div
				className={`relative bg-white text-t-gray-dark p-7 flex flex-col justify-between rounded-3xl z-10 shadow-lg pb-24 overflow-hidden`}
			>
				{anchor ? (
					<div>
						{link === 'back' ? (
							<button
								onClick={() => history.go(-1)}
								className={`text-t-gray-dark opacity-70 py-0.5 pl-1 rounded-md text-xs float-right mb-3 focus:outline-none`}
							>
								{anchor} <FontAwesomeIcon icon={arrow} />
							</button>
						) : (
							<Link
								to={link || '/'}
								// to={Location.state?.from || link || '/'}
								className={`text-t-gray-dark opacity-70 py-0.5 pl-1 rounded-md text-xs float-right mb-3`}
							>
								{anchor} <FontAwesomeIcon icon={arrow} />
							</Link>
						)}
					</div>
				) : null}

				<div>
					<h2 className={`text-2xl font-medium mb-3 tracking-wider`}>
						<FontAwesomeIcon
							icon={markerIcon}
							className="text-red-500 text-3xl ml-0.5 mr-3 relative "
						/>
						{name || null}
					</h2>
					<div>
						<p className={`${info_p_class}`}>
							<span className={` ${info_sub_span_class}`}>
								海拔
							</span>
							<span className={`  ${info_span_class}`}>
								{elevation || null} 公尺
							</span>
						</p>
						<p className={`${info_p_class}`}>
							<span className={`${info_sub_span_class}`}>
								座標
							</span>
							<span
								className={`${info_span_class} text-xs leading-5`}
							>
								N{coordinate?.lat || null}° , E
								{coordinate?.lng || null}°
							</span>
						</p>
						<p className={`${info_p_class}`}>
							<span className={` ${info_sub_span_class}`}>
								位置
							</span>
							<span className={`${info_span_class}`}>
								{location || null}
							</span>
						</p>
					</div>

					<div>
						<MountainElement />
					</div>
				</div>
			</div>
			{children}
		</section>
	);
};

export default MountainCard;
