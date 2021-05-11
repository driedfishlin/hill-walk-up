// @!flow
import { createStore, combineReducers } from 'redux';

//SECTION> ACTIONS

const TOGGLE_NAV_BAR = 'TOGGLE_NAV_BAR';
const TOGGLE_IS_LOGIN = 'TOGGLE_LOGIN';
const TOGGLE_LOGIN_FORM_SHOW = 'TOGGLE_LOGIN_FORM_SHOW';

type ActionsType =
	| { type: 'TOGGLE_NAV_BAR', command: boolean }
	| { type: 'TOGGLE_IS_LOGIN', command: boolean }
	| { type: 'TOGGLE_LOGIN_FORM_SHOW', command: boolean };

// toggle navigation bar display
export const createToggleNavBarAction = (command: boolean): Actions => ({
	type: TOGGLE_NAV_BAR,
	command,
});
// switch user login status
export const createToggleIsLoginAction = (command: boolean): Actions => ({
	type: TOGGLE_IS_LOGIN,
	command,
});
// toggle login field display
export const createToggleLoginFormShowAction = (command: boolean): Actions => ({
	type: TOGGLE_LOGIN_FORM_SHOW,
	command,
});

//SECTION> DATA STRUCTURE

// 儲存頁面狀態的 state
const initUIState = {
	navBar: {
		isOpen: false,
		isFormOpen: false,
	},
};
type UIStateType = {
	navBar: {
		isOpen: boolean,
		isFormOpen: boolean,
	},
};
// 紀錄使用者個人狀態的 state
const initUserState = {
	isLogin: false,
};
type userStateType = {
	isLogin: boolean,
};

//SECTION> REDUCERS

const UIStateReducer = (
	prevState: UIStateType = initUIState,
	action: ActionsType
) => {
	let newState;
	switch (action.type) {
		case 'TOGGLE_NAV_BAR':
			newState = JSON.parse(JSON.stringify(prevState));
			newState.navBar.isOpen = action.command;
			return newState;
		case 'TOGGLE_LOGIN_FORM_SHOW':
			newState = JSON.parse(JSON.stringify(prevState));
			newState.navBar.isFormOpen = action.command;
			return newState;
		default:
			return prevState;
	}
};

const userStateReducer = (
	prevState: userStateType = initUserState,
	action: ActionsType
) => {
	switch (action) {
		case 'TOGGLE_LOGIN':
			return { ...prevState, isLogin: action.command };
		default:
			return prevState;
	}
};

const reducers = combineReducers({
	UIState: UIStateReducer,
	userState: userStateReducer,
});

//SECTION> STORE
const store = createStore(reducers);
export default store;
window.STORE = store;
