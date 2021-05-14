// @flow
import { createStore, combineReducers } from 'redux';

//SECTION> ACTIONS

const TOGGLE_NAV_BAR = 'TOGGLE_NAV_BAR';
const TOGGLE_IS_LOGIN = 'TOGGLE_IS_LOGIN';
const TOGGLE_LOGIN_FORM_SHOW = 'TOGGLE_LOGIN_FORM_SHOW';
const HOMEPAGE_BUBBLE_MESSAGE_SHOW = 'HOMEPAGE_BUBBLE_MESSAGE_SHOW';
const TOGGLE_SEARCH_BAR = 'TOGGLE_SEARCH_BAR';
const SEARCH_INPUT_CHANGE = 'SEARCH_INPUT_CHANGE';
const TOGGLE_INFO_BOX_SHOW = 'TOGGLE_INFO_BOX_SHOW';
const TOGGLE_BACKGROUND_SHOW = 'TOGGLE_BACKGROUND_SHOW';
const ADD_SEARCH_TARGET = 'ADD_SEARCH_TARGET';
const REMOVE_SEARCH_TARGET = 'REMOVE_SEARCH_TARGET';
const SPECIFY_ACTIVE_MOUNTAIN = 'SPECIFY_ACTIVE_MOUNTAIN';

// type ActionsType =
// 	| { type: string, command: boolean }
// 	| { type: 'SEARCH_INPUT_CHANGE', command: string }
// 	| {
// 			type: 'TOGGLE_INFO_BOX_SHOW',
// 			position: {
// 				x: number,
// 				y: number,
// 			},
// 			command: boolean,
// 	  };

type ActionsType =
	| { type: 'TOGGLE_NAV_BAR', command: boolean }
	| { type: 'TOGGLE_IS_LOGIN', command: boolean }
	| { type: 'TOGGLE_LOGIN_FORM_SHOW', command: boolean }
	| { type: 'HOMEPAGE_BUBBLE_MESSAGE_SHOW', command: boolean }
	| { type: 'TOGGLE_SEARCH_BAR', command: boolean }
	| { type: 'SEARCH_INPUT_CHANGE', command: string }
	| {
			type: 'TOGGLE_INFO_BOX_SHOW',
			position: { x: number, y: number } | null,
			command: boolean,
			targetInfo?: Object,
	  }
	| {
			type: 'TOGGLE_BACKGROUND_SHOW',
			command: boolean,
			clickable: boolean,
			icon?: boolean,
	  }
	| { type: 'ADD_SEARCH_TARGET', command: string }
	| { type: 'REMOVE_SEARCH_TARGET', command: string }
	| { type: 'SPECIFY_ACTIVE_MOUNTAIN', command: string };

// toggle navigation bar display
export const createToggleNavBarAction = (command: boolean): ActionsType => ({
	type: TOGGLE_NAV_BAR,
	command,
});
// switch user login status
export const createToggleIsLoginAction = (command: boolean): ActionsType => ({
	type: TOGGLE_IS_LOGIN,
	command,
});
// toggle login field display
export const createToggleLoginFormShowAction = (
	command: boolean
): ActionsType => ({
	type: TOGGLE_LOGIN_FORM_SHOW,
	command,
});
// close the home Page bubble massage
export const createCloseHomePageBubbleAction = (
	command: boolean
): ActionsType => ({
	type: HOMEPAGE_BUBBLE_MESSAGE_SHOW,
	command,
});
// toggle search bar show
export const createToggleSearchBarAction = (command: boolean): ActionsType => ({
	type: TOGGLE_SEARCH_BAR,
	command,
});
export const createSearchInputChangeAction = (
	command: string
): ActionsType => ({
	type: SEARCH_INPUT_CHANGE,
	command,
});
export const createToggleInfoBoxShowAction = (
	command: boolean,
	position?: { x: number, y: number } | null = null,
	targetInfo?: Object
): ActionsType => ({
	type: TOGGLE_INFO_BOX_SHOW,
	position,
	command,
	targetInfo,
});
export const createToggleBackgroundAction = (
	command: boolean,
	clickable: boolean,
	icon?: boolean
): ActionsType => ({
	type: TOGGLE_BACKGROUND_SHOW,
	command,
	clickable,
	icon,
});
export const createAddSearchTargetAction = (command: string): ActionsType => ({
	type: ADD_SEARCH_TARGET,
	command,
});
export const createRemoveSearchTargetAction = (
	command: string
): ActionsType => ({
	type: REMOVE_SEARCH_TARGET,
	command,
});
export const createActiveMountainAction = (command: string): ActionsType => ({
	type: SPECIFY_ACTIVE_MOUNTAIN,
	command,
});

//SECTION> DATA STRUCTURE

// 儲存頁面狀態的 state
const initUIState = {
	navBar: {
		isOpen: false,
		isFormOpen: false,
	},
	homePage: {
		background: {
			clickable: true,
			show: false,
			icon: false,
		},
		bubble: true,
		searchMode: false,
		infoBox: {
			position: {
				x: 0,
				y: 0,
			},
			show: false,
			targetInfo: {},
		},
	},
};
type UIStateType = {
	navBar: {
		isOpen: boolean,
		isFormOpen: boolean,
	},
	homePage: {
		background: {
			clickable: boolean,
			show: boolean,
			icon: boolean,
		},
		bubble: boolean,
		searchMode: boolean,
		infoBox: {
			position: {
				x: number,
				y: number,
			},
			show: boolean,
			targetInfo?: Object,
		},
	},
};
// 紀錄使用者個人狀態的 state
const initUserState = {
	isLogin: false,
};
type userStateType = {
	isLogin: boolean,
};
// 紀錄地圖與公開資料
const initMapState = {
	searchInput: '',
	searchTargets: [],
	activeMountain: '',
};
type initMapType = {
	searchInput: string,
	searchTargets: Array<string>,
	activeMountain: string,
};

//SECTION> REDUCERS

const UIStateReducer = (
	prevState: UIStateType = initUIState,
	action: ActionsType
) => {
	let newState = null;
	switch (action.type) {
		case 'TOGGLE_NAV_BAR':
			newState = JSON.parse(JSON.stringify(prevState));
			newState.navBar.isOpen = action.command;
			return newState;
		case 'TOGGLE_LOGIN_FORM_SHOW':
			newState = JSON.parse(JSON.stringify(prevState));
			newState.navBar.isFormOpen = action.command;
			return newState;
		case 'HOMEPAGE_BUBBLE_MESSAGE_SHOW':
			newState = JSON.parse(JSON.stringify(prevState));
			newState.homePage.bubble = action.command;
			return newState;
		case 'TOGGLE_SEARCH_BAR':
			newState = JSON.parse(JSON.stringify(prevState));
			newState.homePage.searchMode = action.command;
			return newState;
		case 'TOGGLE_INFO_BOX_SHOW':
			newState = JSON.parse(JSON.stringify(prevState));
			if (action.position)
				newState.homePage.infoBox.position = {
					x: action.position.x,
					y: action.position.y,
				};
			newState.homePage.infoBox.show = action.command;
			if (action.targetInfo !== undefined)
				newState.homePage.infoBox.targetInfo = action.targetInfo;
			return newState;
		case 'TOGGLE_BACKGROUND_SHOW':
			newState = JSON.parse(JSON.stringify(prevState));
			newState.homePage.background.show = action.command;
			newState.homePage.background.clickable = action.clickable;
			if (action.icon !== undefined)
				newState.homePage.background.icon = action.icon;
			return newState;
		default:
			return prevState;
	}
};

const userStateReducer = (
	prevState: userStateType = initUserState,
	action: ActionsType
) => {
	switch (action.type) {
		case 'TOGGLE_IS_LOGIN':
			return { ...prevState, isLogin: action.command };
		default:
			return prevState;
	}
};

const mapStateReducer = (
	prevState: initMapType = initMapState,
	action: ActionsType
) => {
	let newState = null;
	switch (action.type) {
		case 'SEARCH_INPUT_CHANGE':
			newState = JSON.parse(JSON.stringify(prevState));
			newState.searchInput = action.command;
			return newState;
		case 'ADD_SEARCH_TARGET':
			newState = JSON.parse(JSON.stringify(prevState));
			newState.searchTargets.push(action.command);
			return newState;
		case 'REMOVE_SEARCH_TARGET':
			newState = JSON.parse(JSON.stringify(prevState));
			newState.searchTargets.splice(
				newState.searchTargets.indexOf(action.command),
				1
			);
			return newState;
		case 'SPECIFY_ACTIVE_MOUNTAIN':
			newState = JSON.parse(JSON.stringify(prevState));
			newState.activeMountain = action.command;
			return newState;
		default:
			return prevState;
	}
};

const reducers = combineReducers({
	UIState: UIStateReducer,
	userState: userStateReducer,
	mapState: mapStateReducer,
});

//SECTION> STORE
const store: Object = createStore(reducers);
export default store;
window.STORE = store;
