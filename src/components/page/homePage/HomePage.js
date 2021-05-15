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
const HomePage = function({ UIState, setFns, mapState }): React.Node {
	const location = useLocation();
	// 因為地圖依賴於 id="map"，因此必須渲染至 html 上並參與所有路由
	const isMapShouldShow = location.pathname === '/' ? true : false;
	return (
		<main
			className={`relative bg-gray-200 flex-grow z-20 ${
				isMapShouldShow ? '' : 'hidden'
			}`}
		>
			<Map />
			<OverlayBackground UIState={UIState} setFns={setFns} />
			<MessageBubble
				setBubble={setFns.setBubble}
				bubbleState={UIState.homePage.bubble}
			/>
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

// export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
