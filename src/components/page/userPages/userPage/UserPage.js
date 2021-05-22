// @flow
import * as React from 'react';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faEdit as editIcon } from '@fortawesome/free-regular-svg-icons/faEdit.js';

import ErrorPage from '../../../shared/components/ErrorPage';
import DataChart from './dataChart/DataChart';

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

type propsType = { userState: Object };

const UserPage = ({ userState }: propsType): React.Node => {
	const userIdFromParams = useParams().user_id;
	const { user } = userState;
	if (userIdFromParams !== user.account)
		return (
			<ErrorPage
				statusCode={404}
				text={`你沒有登入喔`}
				link="/user/sign"
				anchor={`請檢查網址，或註冊新會員`}
			/>
		);

	const avatar = avatarList.find(item => item.id === user.avatar)?.image;
	return (
		<div className={`p-7 text-t-gray-dark tracking-wide`}>
			<h2 className={`h2-style`}>個人資料</h2>
			<div className={`flex flex-col justify-center items-center`}>
				<div className={`flex justify-center mt-3 mb-5`}>
					<img
						className={`rounded-full  w-40`}
						alt="會員圖片"
						src={avatar}
					/>
				</div>
				<h6
					className={`text-center text-2xl font-medium mb-2  tracking-wider`}
				>
					{user.name}
				</h6>
				<p className={`text-center text-sm mb-10`}>{user.nickname}</p>
				<Link
					to={
						userIdFromParams
							? `/user/${userIdFromParams}/edit`
							: '/'
					}
					className={`text-xs text-t-gray-normal w-max focus:outline-none`}
				>
					編輯個人資料
					<FontAwesomeIcon
						icon={editIcon}
						className={`ml-2 relative`}
						style={{ top: '-1px' }}
					/>
				</Link>
			</div>
			<DataChart userState={userState} />
		</div>
	);
};

export default UserPage;
