// !@flow
import { createStore, combineReducers } from 'redux';

// actions
const TOGGLE_NAV_BAR = 'TOGGLE_NAV_BAR';
export const createToggleNavBarAction = command => ({
	type: TOGGLE_NAV_BAR,
	command,
});

// reducers

// 儲存頁面狀態的 state
const initUIState = {
	isNavBarOpen: true,
};

const UIStateReducer = (prevState = initUIState, action) => {
	console.log(prevState, action);
	switch (action.type) {
		case 'TOGGLE_NAV_BAR':
			return { ...prevState, isNavBarOpen: action.command };
		default:
			return prevState;
	}
};

const reducers = combineReducers({
	UIState: UIStateReducer,
});

// store
export default createStore(reducers);
