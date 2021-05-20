// @flow
import * as React from 'react';
// import { useState } from 'react';

import UserForm from './UserForm';

// import { Link } from 'react-router-dom';
// import { nanoid } from 'nanoid';
// import avatar_1 from '../../../../image/avatars/avatar_1.jpg';
// import avatar_2 from '../../../../image/avatars/avatar_2.jpg';
// import avatar_3 from '../../../../image/avatars/avatar_3.jpg';
// import avatar_4 from '../../../../image/avatars/avatar_4.jpg';

// import RegularButton from '../../../shared/components/UIElement/RegularButton';

// const avatarList = [
// 	{ id: 'avatar_1', image: avatar_1 },
// 	{ id: 'avatar_2', image: avatar_2 },
// 	{ id: 'avatar_3', image: avatar_3 },
// 	{ id: 'avatar_4', image: avatar_4 },
// ];

const SignUpPage = ({
	setNewUser,
}: // userState,
{
	setNewUser: Function,
	// userState: Object,
}): React.Node => {
	// const [activeAvatar, setActiveAvatar] = useState(null);
	// const [userNameState, setUserNameState] = useState('');
	// const [accountState, setAccountState] = useState('');
	// const [passwordState, setPasswordState] = useState('');
	// const [nicknameInputState, setNicknameInputState] = useState('');
	// const resetForm = () => {
	// 	setActiveAvatar(null);
	// 	setUserNameState('');
	// 	setAccountState('');
	// 	setPasswordState('');
	// 	setNicknameInputState('');
	// };

	return (
		<div className={`p-7`}>
			<h2 className={`h2-style mb-7`}>註冊會員</h2>

			<UserForm setNewUser={setNewUser} />
			{/* <form onSubmit={event => event.preventDefault()}>
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
					<div className={`flex items-center`}>
						<input
							onChange={() => setNicknameInputState(`健行初心者`)}
							id="sign_up_radio_type_1"
							type="radio"
							name={`nickname`}
							value={`健行初心者`}
							className={`mr-1 text-t-green focus:border-t-green focus:ring-t-green`}
						/>
						<label
							htmlFor="sign_up_radio_type_1"
							className={`text-xs mr-4`}
						>
							健行初心者
						</label>
					</div>
					<div className={`flex items-center`}>
						<input
							onChange={() => setNicknameInputState(`登山能手`)}
							id="sign_up_radio_type_2"
							type="radio"
							name={`nickname`}
							value={`登山能手`}
							className={`mr-1 text-t-green focus:border-t-green focus:ring-t-green`}
						/>
						<label
							htmlFor="sign_up_radio_type_2"
							className={`text-xs mr-4`}
						>
							登山能手
						</label>
					</div>
					<div className={`flex items-center`}>
						<input
							onChange={() => setNicknameInputState(`百岳達人`)}
							id="sign_up_radio_type_3"
							type="radio"
							name={`nickname`}
							value={`百岳達人`}
							className={`mr-1 text-t-green focus:border-t-green focus:ring-t-green`}
						/>
						<label
							htmlFor="sign_up_radio_type_3"
							className={`text-xs mr-4`}
						>
							百岳達人
						</label>
					</div>
				</div>
				<div className={`flex items-center mb-8`}>
					<input
						id="sign_up_radio_type_4"
						type="radio"
						name={`nickname`}
						value={``}
						className={`mr-1 text-t-green focus:border-t-green focus:ring-t-green`}
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
						}}
						// value={nicknameInputState}
						onChange={event =>
							setNicknameInputState(event.target.value)
						}
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
				<input
					id="sign_up_input_account"
					value={accountState}
					onChange={event => setAccountState(event.target.value)}
					type="text"
					className={`w-full rounded-md h-10 px-3 mb-8 border-none focus:outline-none focus:ring-t-green`}
				/>
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
									account: accountState,
									password: passwordState,
									id: nanoid(),
									nickname: nicknameInputState,
									signUpTime: new Date()
										.toISOString()
										.split('T')[0],
								};
								setNewUser(data);
								resetForm();
								document
									.querySelector('body')
									?.scrollTo({ top: 0 });
							}}
						>
							註冊
						</RegularButton>
					</Link>
					<Link to={`/`} onClick={() => resetForm()}>
						<RegularButton transparent>取消</RegularButton>
					</Link>
				</div>
			</form> */}
		</div>
	);
};

export default SignUpPage;
