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
const SUBMIT_MOUNTAIN_DETAIL = 'SUBMIT_MOUNTAIN_DETAIL';
const USER_LOGOUT = 'USER_LOGOUT';
const CREATE_NEW_RECORD = 'CREATE_NEW_RECORD';
const UPDATE_RECORD = 'UPDATE_RECORD';
const ADD_FAVORITE_MOUNTAIN = 'ADD_FAVORITE_MOUNTAIN';
const REMOVE_FAVORITE_MOUNTAIN = 'REMOVE_FAVORITE_MOUNTAIN';
const DELETE_OLD_RECORD = 'DELETE_OLD_RECORD';
const CREATE_NEW_USER = 'CREATE_NEW_USER';
const EDIT_USER_DATA = 'EDIT_USER_DATA';
const GUEST_MODE = 'GUEST_MODE';

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
	| { type: 'SPECIFY_ACTIVE_MOUNTAIN', command: string }
	| { type: 'SUBMIT_MOUNTAIN_DETAIL', command: string }
	| { type: 'USER_LOGOUT' }
	| {
			type: 'CREATE_NEW_RECORD',
			data: {
				title: string,
				startDate: number,
				endDate: number,
				finish: boolean,
				id: string,
				text: string,
			},
	  }
	| {
			type: 'UPDATE_RECORD',
			data: {
				title: string,
				startDate: number,
				endDate: number,
				finish: boolean,
				text: string,
			},
			id: string,
	  }
	| { type: 'ADD_FAVORITE_MOUNTAIN', command: string }
	| { type: 'REMOVE_FAVORITE_MOUNTAIN', command: string }
	| { type: 'DELETE_OLD_RECORD', id: string }
	| {
			type: 'CREATE_NEW_USER',
			data: {
				name: string,
				avatar: string,
				account: string,
				password: string,
				id: string,
				nickname: string,
				signUpTime: string,
			},
	  }
	| {
			type: 'EDIT_USER_DATA',
			data: {
				name: string,
				avatar: string,
				password: string,
				nickname: string,
			},
	  }
	| { type: 'GUEST_MODE', data: Object };

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
export const createSubmitMountainDetailAction = (
	command: string
): ActionsType => ({
	type: SUBMIT_MOUNTAIN_DETAIL,
	command,
});
export const createUserLogoutAction = (): ActionsType => ({
	type: USER_LOGOUT,
});
export const createNewRecordAction = (data: Object): ActionsType => ({
	type: CREATE_NEW_RECORD,
	data,
});
export const createUpdateRecordAction = (
	data: Object,
	id: string
): ActionsType => ({
	type: UPDATE_RECORD,
	data,
	id,
});
export const createAddFavoriteMountainAction = (
	command: string
): ActionsType => ({
	type: ADD_FAVORITE_MOUNTAIN,
	command,
});

export const createRemoveFavoriteMountainAction = (
	command: string
): ActionsType => ({
	type: REMOVE_FAVORITE_MOUNTAIN,
	command,
});
export const createDeleteOldRecordAction = (id: string): ActionsType => ({
	type: DELETE_OLD_RECORD,
	id,
});
export const createNewUserAction = (data: {
	name: string,
	avatar: string,
	account: string,
	password: string,
	id: string,
	nickname: string,
	signUpTime: string,
}): ActionsType => ({
	type: CREATE_NEW_USER,
	data: {
		name: data.name,
		avatar: data.avatar,
		account: data.account,
		password: data.password,
		id: data.id,
		nickname: data.nickname,
		signUpTime: data.signUpTime,
	},
});
export const createEditUserDataAction = (data: {
	name: string,
	avatar: string,
	password: string,
	nickname: string,
}): ActionsType => ({
	type: EDIT_USER_DATA,
	data,
});
export const createGuestModeAction = (data: Object): ActionsType => ({
	type: GUEST_MODE,
	data,
});

//SECTION> DATA STRUCTURE

// ????????????????????? state
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
// ?????????????????????????????? state
const initUserState = {
	isLogin: false,
	loginFormInput: {
		account: '',
		password: '',
	},
	user: {},
};
type userStateType = {
	isLogin: boolean,
	loginFormInput: {
		account: string,
		password: string,
	},
	user: {
		name?: string,
		avatar?: string,
		account?: string,
		password?: string,
		nickname?: string,
		signUpTime?: string,
		tables?: {
			records: Array<{
				location: string,
				title: string,
				startDate: string,
				endDate: string,
				finish: boolean,
				id: string,
				text: string,
			}>,
			favorites: Array<string>,
		},
	},
};
// ???????????????????????????
const initMapState = {
	searchInput: '',
	searchTargets: [],
	activeMountain: '',
	mountainDetailText: '',
};
type initMapType = {
	searchInput: string,
	searchTargets: Array<string>,
	activeMountain: string,
	mountainDetailText: string,
};

//SECTION> REDUCERS

const UIStateReducer = (
	prevState: UIStateType = initUIState,
	action: ActionsType
) => {
	let newState = null;
	switch (action.type) {
		case TOGGLE_NAV_BAR:
			newState = JSON.parse(JSON.stringify(prevState));
			newState.navBar.isOpen = action.command;
			return newState;
		case TOGGLE_LOGIN_FORM_SHOW:
			newState = JSON.parse(JSON.stringify(prevState));
			newState.navBar.isFormOpen = action.command;
			return newState;
		case HOMEPAGE_BUBBLE_MESSAGE_SHOW:
			newState = JSON.parse(JSON.stringify(prevState));
			newState.homePage.bubble = action.command;
			return newState;
		case TOGGLE_SEARCH_BAR:
			newState = JSON.parse(JSON.stringify(prevState));
			newState.homePage.searchMode = action.command;
			return newState;
		case TOGGLE_INFO_BOX_SHOW:
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
		case TOGGLE_BACKGROUND_SHOW:
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
	let newState = JSON.parse(JSON.stringify(prevState));
	switch (action.type) {
		case TOGGLE_IS_LOGIN:
			return { ...prevState, isLogin: action.command };
		case USER_LOGOUT:
			return { ...prevState, isLogin: false, user: {} };
		case CREATE_NEW_RECORD:
			// ??????????????????????????????????????????
			newState.user.tables.records.push(action.data);
			return newState;
		case UPDATE_RECORD:
			{
				const record = newState.user.tables.records.find(
					item => item.id === action.id
				);
				for (const item in action.data) {
					record[item] = action.data[item];
				}
			}
			return newState;
		case ADD_FAVORITE_MOUNTAIN:
			newState.user.tables.favorites.push(action.command);
			newState.user.tables.favorites = [
				...new Set(newState.user.tables.favorites),
			];
			return newState;
		case REMOVE_FAVORITE_MOUNTAIN:
			newState.user.tables.favorites = new Set([
				...newState.user.tables.favorites,
			]);
			newState.user.tables.favorites.delete(action.command);
			newState.user.tables.favorites = [
				...newState.user.tables.favorites,
			];
			return newState;
		case DELETE_OLD_RECORD: {
			let index = newState.user.tables.records.findIndex(
				item => item.id === action.id
			);
			newState.user.tables.records.splice(index, 1);
			return newState;
		}
		case CREATE_NEW_USER: {
			//FIXME> ????????????????????????????????????????????? id ??????????????????????????????
			newState.user = {
				...action.data,
				tables: {
					records: [],
					favorites: [],
				},
			};
			newState.isLogin = true;
			return newState;
		}
		case EDIT_USER_DATA:
			newState.user = { ...newState.user, ...action.data };
			return newState;
		case GUEST_MODE:
			newState.user = action.data;
			return newState;
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
		case SEARCH_INPUT_CHANGE:
			newState = JSON.parse(JSON.stringify(prevState));
			newState.searchInput = action.command;
			return newState;
		case ADD_SEARCH_TARGET:
			newState = JSON.parse(JSON.stringify(prevState));
			newState.searchTargets.push(action.command);
			return newState;
		case REMOVE_SEARCH_TARGET:
			newState = JSON.parse(JSON.stringify(prevState));
			newState.searchTargets.splice(
				newState.searchTargets.indexOf(action.command),
				1
			);
			return newState;
		case SPECIFY_ACTIVE_MOUNTAIN:
			newState = JSON.parse(JSON.stringify(prevState));
			newState.activeMountain = action.command;
			return newState;
		case SUBMIT_MOUNTAIN_DETAIL:
			newState = JSON.parse(JSON.stringify(prevState));
			newState.mountainDetailText = action.command;
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
