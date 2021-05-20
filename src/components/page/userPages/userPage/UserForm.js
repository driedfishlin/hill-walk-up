// @flow
import * as React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { nanoid } from 'nanoid';

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

type propsType = {
	setNewUser?: Function,
	userState?: Object,
	setEditUserData: Function,
};

const UserForm = ({
	userState,
	setNewUser,
	setEditUserData,
}: propsType): React.Node => {
	const user = userState?.user;

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
				onChange={event => setUserNameState(event.target.value)}
				type="text"
				className={`w-full rounded-md h-10 px-3 mb-8 border-none focus:outline-none focus:ring-t-green`}
			/>
			<label className={`block mb-5 text-sm`}>．稱號</label>
			<div className={`flex flex-wrap mb-3`}>
				{defaultNickname.map((item, index) => (
					<div className={`flex items-center`} key={item}>
						<input
							checked={nicknameState === item ? true : false}
							onChange={() => setNicknameState(item)}
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
					}}
					type="text"
					className={`w-full text-center rounded-full h-10 px-3  border-none focus:outline-none focus:ring-t-green`}
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
					onChange={event => setAccountState(event.target.value)}
					type="text"
					className={`w-full rounded-md h-10 px-3 mb-8 border-none focus:outline-none focus:ring-t-green`}
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
				onChange={event => setPasswordState(event.target.value)}
				type="password"
				className={`w-full rounded-md h-10 px-3 mb-10 border-none focus:outline-none focus:ring-t-green`}
			/>
			<div className={`grid grid-rows-2 gap-3`}>
				<Link to={`/`}>
					<RegularButton
						green
						clickFn={() => {
							const data = {
								name: userNameState,
								avatar: activeAvatar,
								password: passwordState,
								nickname:
									nicknameState === '自訂'
										? nicknameInputState
										: nicknameState,
							};
							if (user) {
								setEditUserData(data);
							} else {
								data.account = accountState;
								data.id = nanoid();
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
