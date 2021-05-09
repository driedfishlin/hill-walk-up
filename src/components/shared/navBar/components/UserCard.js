// @flow
import * as React from 'react';

const UserCard = (): React.Node => {
	return (
		<div className="bg-white mt-8 mb-2 px-9 py-8 flex justify-between items-center rounded-xl">
			<div className="h-20 w-20 bg-red-600 rounded-full" />
			<div>
				<button className="text-xl tracking-widest my-1">使用者</button>
				<p className="text-t-gray-normal text-sm my-1 tracking-wide">
					健行初心者
				</p>
			</div>
		</div>
	);
};

export default UserCard;
