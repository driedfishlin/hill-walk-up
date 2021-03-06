// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';

import { mapMarksList } from '../../../utilities/map/mapAPI';

import MountainElement from '../../../shared/components/UIElement/MountainElement';

const onRemoveButtonClick = targetName => {
	const targetIndex = mapMarksList.findIndex(
		item => item.title === targetName
	);
	if (!mapMarksList[targetIndex]?.setMap) return;
	mapMarksList[targetIndex].setMap(null);
	mapMarksList.splice(targetIndex, 1);
};

type propsType = { UIState: Object, setFns: Object };

const InfoBox = ({ UIState, setFns }: propsType): React.Node => {
	const markDisplay = UIState.homePage.infoBox.show;
	const markPosition = UIState.homePage.infoBox.position;
	const markTargetInfo = Array.isArray(UIState.homePage.infoBox.targetInfo)
		? UIState.homePage.infoBox.targetInfo[0]
		: UIState.homePage.infoBox.targetInfo;
	return (
		// 定位點，需要針對 icon 微調
		<div
			className={`fixed top-1/2 left-1/2 transition-opacity ${
				markDisplay
					? 'visible opacity-1 animate-jump-out'
					: 'invisible opacity-0'
			}`}
			style={{ left: markPosition.x + 17, top: markPosition.y - 50 }}
		>
			<div
				className={`absolute bottom-0 right-1/2 transform translate-x-1/2 w-56 bg-white rounded-2xl shadow-xl overflow-hidden`}
			>
				<button
					onClick={() => {
						setFns.setInfoBox(false);
						setFns.setBackground(false, false);
					}}
					className={`absolute top-0 right-2 text-t-gray-dark text-lg p-2 focus:outline-none`}
				>
					×
				</button>
				<section
					className={`w-full h-full p-7`}
					style={{ paddingBottom: '85px' }}
				>
					<div className={`mb-3.5`}>
						<h3
							className={`text-2xl tracking-wider font-medium mb-1`}
						>
							{markTargetInfo?.name || null}
						</h3>
						<p className={`text-xs mb-0.5`}>
							海拔{' '}
							<span>{markTargetInfo?.elevation || null}</span>{' '}
							公尺
						</p>
						<p className={`text-xs mb-0.5`}>
							位置：
							<span>{markTargetInfo?.location || null}</span>
						</p>
					</div>
					<div className={`mt-2 flex justify-around`}>
						<button
							onClick={() => {
								setFns.setInfoBox(false);
								setFns.setBackground(false, false);
								if (!markTargetInfo?.name) return;
								onRemoveButtonClick(markTargetInfo?.name);
								setFns.setRemoveMark(markTargetInfo?.name);
							}}
							className={`text-xs border-t-gray-dark text-t-gray-dark border rounded-md px-1 py-0.5 focus:outline-none`}
						>
							移除座標
						</button>
						<Link
							to={{
								pathname: `/mountains/${markTargetInfo?.name ||
									null}`,
								state: { from: '/' },
							}}
						>
							<button
								onClick={() => {
									setFns.setInfoBox(false);
									setFns.setBackground(false, false);
								}}
								className={`text-xs border-t-green-dark text-t-green-dark border rounded-md px-1 py-0.5 focus:outline-none`}
							>
								更多資料→
							</button>
						</Link>
					</div>
				</section>
				<MountainElement />
			</div>
			<div
				className={`absolute w-0 h-0 transform -translate-x-1/2 border-t-green border-solid`}
				style={{
					borderWidth: '15px 10px',
					borderRightColor: 'transparent',
					borderLeftColor: 'transparent',
					borderBottomColor: 'transparent',
				}}
			/>
		</div>
	);
};

export default InfoBox;
