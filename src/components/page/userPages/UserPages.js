// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, Switch } from 'react-router-dom';

import EditRecordPage from './editRecordPage/EditRecordPage';
import ListPages from './listsPage/ListPage';
import RecordPage from './recordPage/RecordPage';
import RecordsPage from './recordPage/RecordsPage';

import { createNewRecordAction } from './../../../store';
import { createActiveMountainAction } from './../../../store';
import { createUpdateRecordAction } from './../../../store';

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
				<Route path="/user/sign" exact></Route>
				{userState.isLogin ? null : <Redirect to="/" />}
				<Route path="/user/:user_id" exact></Route>
				<Route path="/user/:user_id/list" exact>
					<ListPages userState={userState} />
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
