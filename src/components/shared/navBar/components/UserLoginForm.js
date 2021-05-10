// @flow
import * as React from 'react';

import RegularButton from '../../components/UIElement/RegularButton';

const labelClass = `block text-t-gray-dark mb-2 text-sm`;
const inputClass = `block w-full h-10 mb-3 border border-t-gray-normal opacity-80 rounded-lg focus:outline-none focus:border-t-green focus:ring-t-green focus:ring-1`;

const UserLoginForm = (): React.Node => {
	return (
		<form
			className="bg-white py-8 px-5 rounded-lg shadow-lg"
			onSubmit={event => event.preventDefault()}
		>
			<label className={labelClass}>電子信箱</label>
			<input type="email" className={inputClass} />
			<label className={labelClass}>密碼</label>
			<input type="password" className={inputClass} />

			<RegularButton
				text={'登入'}
				customClass={
					'mt-4 bg-t-gray-dark text-t-gray-light active:bg-t-green'
				}
			/>
			<RegularButton
				text={'註冊'}
				customClass={'mt-4 text-t-gray-dark active:text-t-green'}
			/>
		</form>
	);
};

export default UserLoginForm;
