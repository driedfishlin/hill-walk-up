// @flow
import * as React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import RegularButton from '../../components/UIElement/RegularButton';

const labelClass = `block text-t-gray-dark mb-2 text-sm`;
const inputClass = `block w-full h-10 mb-3 border opacity-80 rounded-lg shadow-inner focus:outline-none focus:ring-1`;

// input validation Function
const onInputBlur = (event, callback) => {
	if (!/^[a-zA-Z0-9]{6,15}$/.test(event.target.value)) callback(false);
};
const onInputChange = (event, callback) => {
	if (/^[a-zA-Z0-9]{6,15}$/.test(event.target.value)) callback(true);
};

const UserLoginForm = ({ setNavBar }: { setNavBar: Function }): React.Node => {
	const [accountInputState, setAccountInputState] = useState('');
	const [passwordInputState, setPasswordInputState] = useState('');
	const [accountValidationState, setAccountValidationState] = useState(true);
	const [passwordValidationState, setPasswordValidationState] = useState(
		true
	);

	return (
		<form
			className="bg-white py-8 px-5 rounded-lg shadow-lg"
			onSubmit={event => {
				event.preventDefault();
			}}
		>
			<label
				htmlFor={'nav_login_account_input'}
				className={labelClass}
				value={accountInputState}
			>
				帳號
			</label>
			<input
				onChange={event => {
					setAccountInputState(event.target.value);
					onInputChange(event, setAccountValidationState);
				}}
				onBlur={event => onInputBlur(event, setAccountValidationState)}
				// pattern={'[a-zA-Z0-9]{6,15}'}
				// title={'請輸入 6 至 15 個字元的英文字母或數字'}
				id={`nav_login_account_input`}
				type="text"
				className={
					inputClass +
					` ${
						accountValidationState
							? ' border-t-gray-normal focus:border-t-green focus:ring-t-green'
							: 'border-red-500 ring-red-500 focus:border-red-500 focus:ring-red-500'
					}`
				}
			/>
			<label htmlFor={`nav_login_password_input`} className={labelClass}>
				密碼
			</label>
			<input
				// pattern={'[a-zA-z0-9]{6,15}'}
				// title={'請輸入 6 至 15 個字元的英文字母或數字'}
				value={passwordInputState}
				onChange={event => {
					setPasswordInputState(event.target.value);
					onInputChange(event, setPasswordValidationState);
				}}
				onBlur={event => onInputBlur(event, setPasswordValidationState)}
				id={`nav_login_password_input`}
				type="password"
				className={
					inputClass +
					` ${
						passwordValidationState
							? ' border-t-gray-normal focus:border-t-green focus:ring-t-green'
							: 'border-red-500 ring-red-500 focus:border-red-500 focus:ring-red-500'
					}`
				}
			/>
			<p
				className={`text-xs text-red-500 pt-1 ${accountValidationState &&
					passwordValidationState &&
					`invisible`}`}
			>
				請輸入 6 至 15 個字元的英文字母或數字
			</p>
			<RegularButton customClass={'mt-4'} green>
				登入
			</RegularButton>
			<Link to={'/user/sign'} onClick={() => setNavBar(false)}>
				<RegularButton
					customClass={
						'mt-4 active:border-t-green active:text-t-green'
					}
					transparent
				>
					註冊
				</RegularButton>
			</Link>
		</form>
	);
};

export default UserLoginForm;
