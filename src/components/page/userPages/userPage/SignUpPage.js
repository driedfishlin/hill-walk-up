// @flow
import * as React from 'react';

import UserForm from './UserForm';

const SignUpPage = ({ setNewUser }: { setNewUser: Function }): React.Node => {
	return (
		<div className={`lg:flex lg:justify-center`}>
			<div
				className={`p-7 md:flex md:flex-col md:h-full justify-center md:p-12 lg:p-14 lg:max-w-5xl`}
			>
				<h2 className={`h2-style mb-7 md:max-w-max md:mb-14`}>
					註冊會員
				</h2>

				<UserForm setNewUser={setNewUser} />
			</div>
		</div>
	);
};

export default SignUpPage;
