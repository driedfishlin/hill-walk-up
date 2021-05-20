// @flow
import * as React from 'react';

import RegularButton from '../../components/UIElement/RegularButton';

const labelClass = `block text-t-gray-dark mb-2 text-sm`;
const inputClass = `block w-full h-10 mb-3 border border-t-gray-normal opacity-80 rounded-lg shadow-inner focus:outline-none focus:border-t-green focus:ring-t-green focus:ring-1`;

const UserLoginForm = (): React.Node => {
	return (
		<form
			className="bg-white py-8 px-5 rounded-lg shadow-lg"
			onSubmit={event => event.preventDefault()}
		>
			<label className={labelClass}>帳號</label>
			<input type="text" className={inputClass} />
			<label className={labelClass}>密碼</label>
			<input type="password" className={inputClass} />

			<RegularButton customClass={'mt-4'} green>
				登入
			</RegularButton>
			<RegularButton
				customClass={'mt-4 active:border-t-green active:text-t-green'}
				transparent
			>
				註冊
			</RegularButton>
		</form>
	);
};

export default UserLoginForm;
