// @flow
import * as React from 'react';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import MountainElement from '../../../shared/components/UIElement/MountainElement';

import TaiwanPeaksList from '../../../utilities/data/100_peaks_of_taiwan';

import { faMapMarkerAlt as markerIcon } from '@fortawesome/free-solid-svg-icons/faMapMarkerAlt';
import { faChevronCircleRight as arrow } from '@fortawesome/free-solid-svg-icons/faChevronCircleRight';

const info_p_class = `text-sm flex justify-between mt-1`;
const info_span_class = `text-t-green`;
const info_sub_span_class = ``;
// const info_sm_span_class = `text-t-green text-sm`;

const MountainCard = ({ mapState }): React.Node => {
	const params = useParams();
	const activeMountain = params.mountain;
	const activeMountainInfo = TaiwanPeaksList.filter(item => {
		console.log(item.name, activeMountain, item.name === activeMountain);
		return item.name === activeMountain;
	});

	//TODO> 要做網址的錯誤處理

	return (
		<article className={`relative z-0`}>
			<div
				className={`relative bg-white text-t-gray-dark p-7 flex flex-col justify-between rounded-2xl z-10 shadow-lg pb-24 overflow-hidden`}
			>
				<div>
					<Link
						to="/"
						className={`text-t-gray-dark opacity-70 py-0.5 px-1 rounded-md text-xs float-right mb-3`}
					>
						返回地圖 <FontAwesomeIcon icon={arrow} />
					</Link>
				</div>
				<div>
					<h2 className={`text-2xl font-medium mb-3 tracking-wider`}>
						<FontAwesomeIcon
							icon={markerIcon}
							className="text-red-500 text-3xl ml-0.5 mr-3 relative "
						/>
						{activeMountainInfo[0]?.name || null}
					</h2>
					<div>
						<p className={`${info_p_class}`}>
							<span className={` ${info_sub_span_class}`}>
								海拔
							</span>
							<span className={`  ${info_span_class}`}>
								{activeMountainInfo[0]?.elevation || null} 公尺
							</span>
						</p>
						<p className={`${info_p_class}`}>
							<span className={`${info_sub_span_class}`}>
								座標
							</span>
							<span
								className={`${info_span_class} text-xs leading-5`}
							>
								N
								{activeMountainInfo[0]?.coordinate?.lat || null}
								° , E
								{activeMountainInfo[0]?.coordinate?.lng || null}
								°
							</span>
						</p>
						<p className={`${info_p_class}`}>
							<span className={` ${info_sub_span_class}`}>
								位置
							</span>
							<span className={`  ${info_span_class}`}>
								{activeMountainInfo[0]?.location || null}
							</span>
						</p>
					</div>
					<div>
						<MountainElement />
					</div>
				</div>
			</div>
			<div
				className={`relative bg-t-green transform -translate-y-5 rounded-b-2xl w-full px-7 py-10 pb-12 shadow-lg`}
			>
				<p className={`text-white `}>
					sdfjksh faksdjf lsdgfhj akegfak seloremsdf jkshfaksdjfl
					sdgfhjakegfa kseygfdgsdf gdfgdflor emsdfjkshfaksd
					jflsdgfhjakegfaks eygfdgsdfg gfdgsdf gdfgdflor
					emsdfjkshfaksd jflsdgfhjakegfaks eygfdgsdfg gfdgsdf
					gdfgdflor emsdfjkshfaksd jflsdgfhjakegfaks eygfdgsdfg
					dfgdflorem sdfjkshfaks
				</p>
				<a href="#" className={`text-white text-xs float-right mt-3`}>
					資料來源： 維基百科 →
				</a>
			</div>
		</article>
	);
};

export default MountainCard;
