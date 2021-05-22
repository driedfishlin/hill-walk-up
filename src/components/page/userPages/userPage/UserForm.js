// @flow
import * as React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import RegularButton from '../../../shared/components/UIElement/RegularButton';

import avatar_1 from '../../../../image/avatars/avatar_1.jpg';
import avatar_2 from '../../../../image/avatars/avatar_2.jpg';
import avatar_3 from '../../../../image/avatars/avatar_3.jpg';
import avatar_4 from '../../../../image/avatars/avatar_4.jpg';

const avatarList = [
	{ id: 'avatar_1', image: avatar_1 },
	{ id: 'avatar_2', image: avatar_2 },
	{ id: 'avatar_3', image: avatar_3 },
	{ id: 'avatar_4', image: avatar_4 },
];

const defaultNickname = ['健行初心者', '登山能手', '百岳達人'];
const isDefaultNickname = string =>
	string === defaultNickname[0] ||
	string === defaultNickname[1] ||
	string === defaultNickname[2];

// input validation Function
const onInputBlurValidate = (event, callback) => {
	if (!/^[a-zA-Z0-9]{6,15}$/.test(event.target.value)) callback(false);
};
const onInputChangeValidate = (event, callback) => {
	if (/^[a-zA-Z0-9]{6,15}$/.test(event.target.value)) callback(true);
};

//SECTION> Component

type propsType = {
	setNewUser?: Function,
	userState?: Object,
	setEditUserData?: Function,
};

const UserForm = ({
	userState,
	setNewUser,
	setEditUserData,
}: propsType): React.Node => {
	const user = userState?.user;

	// input value state
	const [activeAvatar, setActiveAvatar] = useState(user?.avatar || null);
	const [userNameState, setUserNameState] = useState(user?.name || '');
	const [accountState, setAccountState] = useState(user?.account || '');
	const [passwordState, setPasswordState] = useState(user?.password || '');
	const [nicknameState, setNicknameState] = useState(
		user?.nickname || '健行初心者'
	);
	const [nicknameInputState, setNicknameInputState] = useState(
		isDefaultNickname(user?.nickname) ? '' : user?.nickname
	);
	const resetForm = () => {
		setActiveAvatar(null);
		setUserNameState('');
		setAccountState('');
		setPasswordState('');
		setNicknameState('');
	};

	// input validation state
	const [nameValidateState, setNameValidateState] = useState(true);
	const [nicknameValidateState, setNicknameValidateState] = useState(true);
	const [accountValidateState, setAccountValidateState] = useState(true);
	const [passwordValidateState, setPasswordValidateState] = useState(true);

	// 用於表單未驗證通過時鎖定按鈕
	let validationIsValid: boolean = false;
	// 表單輸入的使用者防呆提示
	const errorMessage = () => {
		if (!accountValidateState || !passwordValidateState)
			return '帳號與密碼為 6-15 位英文字母或數字';
		if (!nameValidateState) return '未填寫使用者名稱';
		if (!nicknameValidateState) return '未填寫稱號';
		if (!userNameState || !accountState || !passwordState) return;
		if (!activeAvatar) return '未選擇大頭貼';
		validationIsValid = true;
		return '';
	};

	return (
		<form onSubmit={event => event.preventDefault()}>
			<label className={`block mb-3 text-sm`}>．選擇你的大頭貼</label>
			<div className={`grid grid-cols-2 gap-4 mb-10`}>
				{avatarList.map(item => (
					<button
						className={` focus:outline-none`}
						key={item.id}
						onClick={() => setActiveAvatar(item.id)}
					>
						<img
							className={`rounded-md ${
								activeAvatar === null ||
								activeAvatar === item.id
									? 'opacity-100'
									: 'opacity-50'
							}`}
							src={item.image}
							alt={item.id}
						/>
					</button>
				))}
			</div>
			<label
				htmlFor="sign_up_input_username"
				className={`block mb-3 text-sm`}
			>
				．使用者名稱
			</label>
			<input
				id="sign_up_input_username"
				value={userNameState}
				onBlur={event => {
					if (!event.target.value.length) setNameValidateState(false);
				}}
				onChange={event => {
					setUserNameState(event.target.value);
					if (event.target.value.length) setNameValidateState(true);
				}}
				type="text"
				className={`w-full rounded-md h-10 px-3 mb-8 ${
					nameValidateState
						? 'border-none focus:outline-none focus:ring-t-green'
						: 'border border-red-500 focus:border-red-500 focus:outline-none focus:ring-red-500'
				}`}
			/>
			<label className={`block mb-5 text-sm`}>．稱號</label>
			<div className={`flex flex-wrap mb-3`}>
				{defaultNickname.map((item, index) => (
					<div className={`flex items-center`} key={item}>
						<input
							checked={nicknameState === item ? true : false}
							onChange={() => {
								setNicknameState(item);
								setNicknameValidateState(true);
							}}
							id={`sign_up_radio_type_${index + 1}`}
							type="radio"
							name={`nickname`}
							value={item}
							className={`mr-1 text-t-green focus:border-t-green focus:ring-t-green`}
						/>
						<label
							htmlFor={`sign_up_radio_type_${index + 1}`}
							className={`text-xs mr-4`}
						>
							{item}
						</label>
					</div>
				))}
			</div>
			<div className={`flex items-center mb-8`}>
				<input
					id="sign_up_radio_type_4"
					type="radio"
					name={`nickname`}
					value={``}
					className={`mr-1 text-t-green focus:border-t-green focus:ring-t-green`}
					checked={
						nicknameState === '自訂' ||
						!isDefaultNickname(nicknameState)
							? true
							: false
					}
					onChange={() => {
						setNicknameState('自訂');
					}}
				/>
				<label
					htmlFor="sign_up_radio_type_4"
					className={`text-xs flex-grow whitespace-nowrap mr-2`}
				>
					自訂：
				</label>
				<input
					onFocus={() => {
						const dom = document.querySelector(
							'#sign_up_radio_type_4'
						);
						if (dom) dom.checked = true;
						setNicknameState('自訂');
					}}
					value={nicknameInputState}
					onChange={event => {
						setNicknameInputState(event.target.value);
						setNicknameState('自訂');
						setNicknameValidateState(true);
					}}
					onBlur={event => {
						if (!event.target.value)
							setNicknameValidateState(false);
					}}
					type="text"
					className={`w-full text-center rounded-full h-10 px-3 ${
						nicknameValidateState
							? 'border-none focus:outline-none focus:ring-t-green'
							: 'border border-red-500 focus:border-red-500 focus:outline-none focus:ring-red-500'
					}`}
				/>
			</div>
			<label
				htmlFor="sign_up_input_account"
				className={`block mb-3 text-sm`}
			>
				．帳號
			</label>
			{user ? (
				<input
					disabled
					id="sign_up_input_account"
					value={accountState}
					type="text"
					className={`w-full rounded-md h-10 px-3 mb-8 border-none focus:outline-none focus:ring-t-green`}
				/>
			) : (
				<input
					id="sign_up_input_account"
					value={accountState}
					onChange={event => {
						setAccountState(event.target.value);
						onInputChangeValidate(event, setAccountValidateState);
					}}
					onBlur={event =>
						onInputBlurValidate(event, setAccountValidateState)
					}
					type="text"
					className={`w-full rounded-md h-10 px-3 mb-8 ${
						accountValidateState
							? 'border-none focus:outline-none focus:ring-t-green'
							: 'border border-red-500 focus:border-red-500 focus:outline-none focus:ring-red-500'
					}`}
				/>
			)}
			<label
				className={`block mb-3 text-sm`}
				htmlFor="sign_up_input_password"
			>
				．密碼
			</label>
			<input
				id="sign_up_input_password"
				value={passwordState}
				onChange={event => {
					setPasswordState(event.target.value);
					onInputChangeValidate(event, setPasswordValidateState);
				}}
				onBlur={event =>
					onInputBlurValidate(event, setPasswordValidateState)
				}
				type="password"
				className={`w-full rounded-md h-10 px-3 mb-4 ${
					passwordValidateState
						? 'border-none focus:outline-none focus:ring-t-green'
						: 'border border-red-500 focus:border-red-500 focus:outline-none focus:ring-red-500'
				}`}
			/>
			<p className={`text-sm text-red-500 text-center mb-4 h-5`}>
				{errorMessage()}
			</p>
			<div className={`grid grid-rows-2 gap-3`}>
				<Link
					className={
						validationIsValid
							? ''
							: `pointer-events-none opacity-50`
					}
					to={`/user/${user?.account ? user?.account : accountState}`}
				>
					<RegularButton
						green
						clickFn={() => {
							if (!accountValidateState && passwordValidateState)
								return;
							const data = {
								name: userNameState,
								avatar: activeAvatar,
								password: passwordState,
								nickname:
									nicknameState === '自訂'
										? nicknameInputState
										: nicknameState,
							};
							if (user && setEditUserData) {
								setEditUserData(data);
							} else if (setNewUser) {
								data.account = accountState;
								data.signUpTime = new Date()
									// that's ok ↑
									.toISOString()
									.split('T')[0];
								setNewUser(data);
							}
							resetForm();
							document
								.querySelector('body')
								?.scrollTo({ top: 0 });
						}}
					>
						{user ? '確認修改' : '註冊'}
					</RegularButton>
				</Link>
				<Link to={`/`} onClick={() => resetForm()}>
					<RegularButton transparent>取消</RegularButton>
				</Link>
			</div>
		</form>
	);
};

export default UserForm;
