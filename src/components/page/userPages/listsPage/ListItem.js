// @flow
import * as React from 'react';

const ListItem = (): React.Node => {
	return (
		<li className={`filter drop-shadow-sm bg-white mb-0.5`}>
			{/* 用LINK代替 */}
			<div className={`flex justify-between items-end px-2 py-3`}>
				<h6 className={`leading-5`}>馬伯拉斯山</h6>
				<p className={`text-sm leading-2`}>01/01 - 01/01</p>
			</div>
		</li>
	);
};

export default ListItem;
