// @flow
import * as React from 'react';
import UserLoginEntry from './UserLoginEntry';
import UserLoginForm from './UserLoginForm';

type propsType = {
	NavBarState: {
		isFormOpen: boolean,
		isOpen: boolean,
	},
	setLoginForm: Function,
};

const UserLoginBlock = ({
	NavBarState,
	setLoginForm,
}: propsType): React.Node => {
	return (
		<div>
			{NavBarState.isFormOpen ? (
				<UserLoginForm />
			) : (
				<UserLoginEntry setLoginForm={setLoginForm} />
			)}
		</div>
	);
};

export default UserLoginBlock;
