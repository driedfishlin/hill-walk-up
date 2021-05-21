// @flow
import * as React from 'react';

import UserForm from './UserForm';

const SignUpPage = ({ setNewUser }: { setNewUser: Function }): React.Node => {
	return (
		<div className={`p-7`}>
			<h2 className={`h2-style mb-7`}>註冊會員</h2>

			<UserForm setNewUser={setNewUser} />
		</div>
	);
};

export default SignUpPage;
