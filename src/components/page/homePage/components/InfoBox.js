// @flow
import * as React from 'react';

type propsType = { UIState: Object, setFns: Object };

const InfoBox = ({ UIState, setFns }: propsType): React.Node => {
	const markPosition = UIState.homePage.infoBox.position;
	const setInfoBox = setFns.setInfoBox;
	return (
		<div className={`fixed top-1/2 left-1/2`}>
			<div
				className={`absolute bottom-0 right-1/2 transform translate-x-1/2 w-56 bg-white rounded-2xl shadow-xl overflow-hidden`}
			>
				<button
					onClick={() => setInfoBox(false)}
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
							能高山
						</h3>
						<p className={`text-sm mb-0.5`}>
							海拔 <span>3025</span> 公尺
						</p>
						<p className={`text-xs mb-0.5`}>
							位置：<span>台東縣、台中市、高雄市</span>
						</p>
					</div>
					<div className={`mt-2 flex justify-around`}>
						<button
							className={`text-xs border-t-gray-dark text-t-gray-dark border rounded-md px-1 py-0.5 focus:outline-none`}
						>
							移除座標
						</button>
						<button
							className={`text-xs border-t-green-dark text-t-green-dark border rounded-md px-1 py-0.5 focus:outline-none`}
						>
							更多資料→
						</button>
					</div>
				</section>
				<div
					className={`w-full h-full absolute top-0 left-0 pointer-events-none`}
				>
					<div
						class={`bg-t-green-light absolute bottom-0 transform rotate-45 translate-y-2/3 left-1/2 -translate-x-3/4`}
						style={{
							width: '100px',
							height: '100px',
						}}
					></div>
					<div
						class={`bg-t-green absolute bottom-0 transform rotate-45 translate-y-1/2 left-1/2 -translate-x-1/4`}
						style={{
							width: '100px',
							height: '100px',
						}}
					></div>
				</div>
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
