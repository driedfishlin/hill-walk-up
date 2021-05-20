// @flow
import * as React from 'react';

import UserForm from './UserForm';

type propsType = {
	userState: Object,
	// setNewUser: Function,
	setEditUserData: Function,
};

const UserEditPage = ({
	userState,
	// setNewUser,
	setEditUserData,
}: propsType): React.Node => {
	return (
		<div className={`p-7`}>
			<h2 className={`h2-style mb-7`}>註冊會員</h2>
			<UserForm userState={userState} setEditUserData={setEditUserData} />
		</div>
	);
};

export default UserEditPage;
