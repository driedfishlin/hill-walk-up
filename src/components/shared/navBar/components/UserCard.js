// @flow
import * as React from 'react';

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

const UserCard = ({ userState }: { userState: Object }): React.Node => {
	const { user } = userState;
	const avatar = avatarList.find(item => item.id === user.avatar)?.image;
	return (
		<div className="bg-white mt-8 mb-2 px-9 py-8 flex justify-between items-center rounded-xl shadow-xl">
			<div className="h-20 w-20 flex-shrink-0 bg-red-600 rounded-full overflow-hidden">
				{avatar && <img src={avatar} alt="大頭貼" />}
			</div>
			<div className={`flex flex-col flex-grow items-start ml-3`}>
				<h6 className="text-xl tracking-widest my-1">
					{user.name || '使用者'}
				</h6>
				<p className="text-t-gray-normal text-sm my-1 tracking-wide">
					{user.nickname || '健行初心者'}
				</p>
			</div>
		</div>
	);
};

export default UserCard;
