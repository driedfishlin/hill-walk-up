// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit as editIcon } from '@fortawesome/free-regular-svg-icons/faEdit.js';
import { faBookmark as hollowMarkIcon } from '@fortawesome/free-regular-svg-icons/faBookmark.js';
import { faBookmark as solidMarkIcon } from '@fortawesome/free-solid-svg-icons/faBookmark.js';

const iconStyle = `my-2 mx-1.5`;

const IconArea = ({
	activeMountainInfo,
	setFns,
	isFavorite,
}: {
	activeMountainInfo: Object,
	setFns: Object,
	isFavorite: boolean,
}): React.Node => {
	return (
		<div
			className={`text-3xl mr-2 flex justify-end items-center text-t-gray-normal`}
		>
			<button
				onClick={
					isFavorite
						? () =>
								setFns.setRemoveFavoriteMountain(
									activeMountainInfo.name
								)
						: () =>
								setFns.setAddFavoriteMountain(
									activeMountainInfo.name
								)
				}
				title="新增到口袋清單"
				className={`w-10 h-10 focus:outline-none  hover:text-t-gray-dark`}
			>
				<FontAwesomeIcon
					icon={solidMarkIcon}
					className={`${iconStyle} text-red-500 transform scale-90 absolute ${
						isFavorite ? 'opacity-1' : 'opacity-0'
					}`}
				/>
				<FontAwesomeIcon
					icon={hollowMarkIcon}
					className={`${iconStyle} relative`}
				/>
			</button>
			<Link
				to={{
					pathname: '/user/:user_id/records/new',
					state: {
						from: `/mountains/${activeMountainInfo.name}`,
						location: activeMountainInfo.name,
						action: 'new',
					},
				}}
				onClick={() => {
					setFns.setActiveMountain(activeMountainInfo.name);
					document.querySelector('body')?.scrollTo({ top: 0 });
				}}
				title="撰寫新紀錄"
				className={`w-10 h-10 hover:text-t-gray-dark`}
			>
				<FontAwesomeIcon
					icon={editIcon}
					className={`${iconStyle} relative -top-0.5`}
				/>
			</Link>
		</div>
	);
};

export default IconArea;
