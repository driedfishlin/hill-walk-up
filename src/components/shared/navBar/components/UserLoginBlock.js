// @flow
import * as React from 'react';
import UserLoginEntry from './UserLoginEntry';
import UserLoginForm from './UserLoginForm';

type propsType = {
	NavBarState: {
		isFormOpen: boolean,
		isOpen: boolean,
	},
	setNavBar: Function,
	setLoginForm: Function,
};

const UserLoginBlock = ({
	setNavBar,
	NavBarState,
	setLoginForm,
}: propsType): React.Node => {
	return (
		<div>
			{NavBarState.isFormOpen ? (
				<UserLoginForm setNavBar={setNavBar} />
			) : (
				<UserLoginEntry
					setLoginForm={setLoginForm}
					setNavBar={setNavBar}
				/>
			)}
		</div>
	);
};

export default UserLoginBlock;
