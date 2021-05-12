// @flow
import * as React from 'react';
import { connect } from 'react-redux';

import Map from './components/Map';
import SearchSystem from './components/searchSystem/SearchSystem';
import MessageBubble from './components/MessageBubble';

import { createCloseHomePageBubbleAction } from '../../../store';
import { createToggleSearchBarAction } from '../../../store';
import { createSearchInputChangeAction } from '../../../store';

//SECTION>
const mapStateToProps = state => ({
	UIState: state.UIState,
	mapState: state.mapState,
});
const mapDispatchToProps = dispatch => {
	return {
		setFns: {
			setBubble: command => {
				dispatch(createCloseHomePageBubbleAction(command));
			},
			setSearchBar: command => {
				dispatch(createToggleSearchBarAction(command));
			},
			setSearchInput: command =>
				dispatch(createSearchInputChangeAction(command)),
		},
	};
};

//SECTION>
const HomePage = function({ UIState, setFns, mapState }): React.Node {
	return (
		<main className="relative bg-gray-200 flex-grow">
			<Map />
			<MessageBubble
				setBubble={setFns.setBubble}
				bubbleState={UIState.homePage.bubble}
			/>
			<SearchSystem
				UIState={UIState}
				mapState={mapState}
				setFns={setFns}
			/>
		</main>
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
