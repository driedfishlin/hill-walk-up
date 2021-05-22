// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, Switch } from 'react-router-dom';

import EditRecordPage from './editRecordPage/EditRecordPage';
import ListPages from './listsPage/ListPage';
import RecordPage from './recordPage/RecordPage';
import RecordsPage from './recordPage/RecordsPage';
import SignUpPage from './userPage/SignUpPage';
import UserPage from './userPage/UserPage';
import UserEditPage from './userPage/UserEditPage';

import { createNewRecordAction } from './../../../store';
import { createActiveMountainAction } from './../../../store';
import { createUpdateRecordAction } from './../../../store';
import { createRemoveFavoriteMountainAction } from './../../../store';
import { createDeleteOldRecordAction } from './../../../store';
import { createNewUserAction } from './../../../store';
// import { createToggleIsLoginAction } from './../../../store';
import { createEditUserDataAction } from './../../../store';

const mapStateToProps = state => ({
	mapState: state.mapState,
	UIState: state.UIState,
	userState: state.userState,
});

const mapDispatchToProps = dispatch => ({
	setFns: {
		setNewRecord: (data: Object) => dispatch(createNewRecordAction(data)),
		setActiveMountain: (command: string) =>
			dispatch(createActiveMountainAction(command)),
		setUpdateRecord: (data, id) =>
			dispatch(createUpdateRecordAction(data, id)),
		setRemoveFavorite: (command: string) =>
			dispatch(createRemoveFavoriteMountainAction(command)),
		setRemoveOldRecord: (id: string) =>
			dispatch(createDeleteOldRecordAction(id)),
		setNewUser: (data: {
			name: string,
			avatar: string,
			account: string,
			password: string,
			id: string,
			nickname: string,
			signUpTime: string,
		}) => dispatch(createNewUserAction(data)),
		// setLogin: (command: boolean): Object =>
		// 	dispatch(createToggleIsLoginAction(true)),
		setEditUserData: data => dispatch(createEditUserDataAction(data)),
	},
});

type propsType = {
	mapState: Object,
	UIState: Object,
	userState: Object,
	setFns: Object,
};

const UserPages = ({ userState, mapState, setFns }: propsType): React.Node => {
	return (
		<>
			<Switch>
				<Route path="/user/sign" exact>
					{userState.isLogin ? <Redirect to="/" /> : null}
					<SignUpPage
						setNewUser={setFns.setNewUser}
						userState={userState}
					/>
				</Route>
				{userState.isLogin ? null : <Redirect to="/" />}
				<Route path="/user/:user_id" exact>
					<UserPage userState={userState} />
				</Route>
				<Route path="/user/:user_id/edit" exact>
					<UserEditPage
						userState={userState}
						setEditUserData={setFns.setEditUserData}
					/>
				</Route>
				<Route path="/user/:user_id/list" exact>
					<ListPages setFns={setFns} userState={userState} />
				</Route>
				<Route path="/user/:user_id/records" exact>
					<RecordsPage userState={userState} />
				</Route>
				<Route path="/user/:user_id/records/new" exact>
					<EditRecordPage
						mapState={mapState}
						setFns={setFns}
						userState={userState}
					/>
				</Route>
				<Route path="/user/:user_id/records/:file_id" exact>
					<RecordPage mapState={mapState} userState={userState} />
				</Route>
				<Route path="/user/:user_id/records/:file_id/edit" exact>
					<EditRecordPage
						mapState={mapState}
						setFns={setFns}
						userState={userState}
					/>
				</Route>
			</Switch>
		</>
	);
};

const connectComponentCreator: Function = connect(
	mapStateToProps,
	mapDispatchToProps
);
const connectedComponent: Object = connectComponentCreator(UserPages);
export default connectedComponent;
