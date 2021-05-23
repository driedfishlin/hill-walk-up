// @flow
import * as React from 'react';
import UserLoginEntry from './UserLoginEntry';
import UserLoginForm from './UserLoginForm';

type propsType = {
	NavBarState: {
		isFormOpen: boolean,
		isOpen: boolean,
	},
	setFns: Object,
};

const UserLoginBlock = ({ NavBarState, setFns }: propsType): React.Node => {
	return (
		<div>
			{NavBarState.isFormOpen ? (
				<UserLoginForm setFns={setFns} />
			) : (
				<UserLoginEntry
					setLoginForm={setFns.setLoginForm}
					setNavBar={setFns.setNavBar}
				/>
			)}
		</div>
	);
};

export default UserLoginBlock;
