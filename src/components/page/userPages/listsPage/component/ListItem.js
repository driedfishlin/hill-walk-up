// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';

const ListItem = ({ type, location, start, end, id }): React.Node => {
	if (type === 'record')
		return (
			<li className={`filter drop-shadow-sm bg-white mb-0.5`}>
				{console.log(id)}
				{/* 用LINK代替 */}
				<Link to={{ pathname: `/user/:user_id/records/${id}` }}>
					<div className={`flex justify-between items-end px-2 py-3`}>
						<h6 className={`leading-5`}>{location}</h6>
						<p className={`text-sm leading-2`}>
							{start.slice(5) + ' - ' + end.slice(5)}
						</p>
					</div>
				</Link>
			</li>
		);
	if (type === 'favorite')
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
