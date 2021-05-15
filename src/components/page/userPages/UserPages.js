// @flow
import * as React from 'react';
import { connect } from 'react-redux';
// import { Route, Redirect } from 'react-router-dom';
import { Route, Redirect, Switch } from 'react-router-dom';
import EditRecordPage from './editRecordPage/EditRecordPage';
import ListPages from './listsPage/ListPage';
import RecordPage from './recordPage/RecordPage';

const mapStateToProps = state => ({
	mapState: state.mapState,
	UIState: state.UIState,
	userState: state.userState,
});

type propsType = {
	mapState: Object,
	UIState: Object,
	userState: Object,
};

const UserPages = ({ userState, mapState }: propsType): React.Node => {
	return (
		<>
			<Switch>
				<Route path="/user/sign" exact></Route>
				{userState.isLogin ? null : <Redirect to="/" />}
				<Route path="/user/:id/list" exact>
					<ListPages />
				</Route>
				<Route path="/user/:id/list/:file_id" exact>
					<RecordPage mapState={mapState} />
				</Route>
				<Route path="/user/:id/records" exact></Route>
				<Route path="/user/:id" exact></Route>
				<Route path="/user/:id/:action" exact>
					<EditRecordPage mapState={mapState} />
				</Route>
			</Switch>
		</>
	);
};

const connectComponentCreator: Function = connect(mapStateToProps);
const connectedComponent: Object = connectComponentCreator(UserPages);
export default connectedComponent;
