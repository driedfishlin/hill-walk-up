// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';

import Map from './components/Map';
import SearchSystem from './components/searchSystem/SearchSystem';
import MessageBubble from './components/MessageBubble';
import InfoBox from './components/InfoBox';
import OverlayBackground from '../../shared/components/OverlayBackground';

import { createCloseHomePageBubbleAction } from '../../../store';
import { createToggleSearchBarAction } from '../../../store';
import { createSearchInputChangeAction } from '../../../store';
import { createToggleInfoBoxShowAction } from '.././../../store';
import { createToggleBackgroundAction } from '../../../store';
import { createRemoveSearchTargetAction } from '../../../store';
import { createActiveMountainAction } from '../../../store';

//SECTION>
const mapStateToProps = state => ({
	UIState: state.UIState,
	mapState: state.mapState,
	userState: state.userState,
});
const mapDispatchToProps = dispatch => {
	return {
		setFns: {
			setBubble: command =>
				dispatch(createCloseHomePageBubbleAction(command)),
			setSearchBar: command =>
				dispatch(createToggleSearchBarAction(command)),
			setSearchInput: command =>
				dispatch(createSearchInputChangeAction(command)),
			setInfoBox: (command, position, targetInfo) =>
				dispatch(
					createToggleInfoBoxShowAction(command, position, targetInfo)
				),
			setBackground: (command, clickable, icon) =>
				dispatch(
					createToggleBackgroundAction(command, clickable, icon)
				),
			setRemoveMark: (command: string) =>
				dispatch(createRemoveSearchTargetAction(command)),
			setActiveMountain: (command: string) =>
				dispatch(createActiveMountainAction(command)),
		},
	};
};

//SECTION>

//SECTION>
const HomePage = function({
	UIState,
	setFns,
	mapState,
	userState,
}): React.Node {
	const location = useLocation();
	// 因為地圖依賴於 id="map"，因此必須渲染至 html 上並參與所有路由
	const isMapShouldShow = location.pathname === '/' ? true : false;

	// for MessageBubble
	let achievementCount = 0;
	const records = userState.user.tables?.records;
	if (records) {
		const recordTitles = records.map(item => item.location);
		const setLocation = [...new Set(recordTitles)];
		achievementCount = setLocation.length;
	}

	return (
		<main
			className={`relative bg-gray-200 flex-grow z-30 h-full w-full ${
				isMapShouldShow ? '' : 'hidden'
			}`}
		>
			<Map />
			<OverlayBackground UIState={UIState} setFns={setFns} />
			{userState.isLogin && (
				<MessageBubble
					setBubble={setFns.setBubble}
					bubbleState={UIState.homePage.bubble}
					rateNum={achievementCount || 0}
				/>
			)}
			<SearchSystem
				UIState={UIState}
				mapState={mapState}
				setFns={setFns}
			/>
			<InfoBox UIState={UIState} setFns={setFns} />
		</main>
	);
};

const connectedComponentCreator: Function = connect(
	mapStateToProps,
	mapDispatchToProps
);

const ConnectedComponent: Object = connectedComponentCreator(HomePage);

export default ConnectedComponent;
