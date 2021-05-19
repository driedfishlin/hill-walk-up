// @flow
import * as React from 'react';
import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen as folder } from '@fortawesome/free-solid-svg-icons/faFolderOpen.js';
import { faFileAlt as file } from '@fortawesome/free-solid-svg-icons/faFileAlt';
// import { faFileSignature as write } from '@fortawesome/free-solid-svg-icons/faFileSignature';
import { faAddressCard as about } from '@fortawesome/free-solid-svg-icons/faAddressCard';

const list = [
	{ text: '地圖', icon: file, private: false, link: '/' },
	{
		text: '口袋名單',
		icon: folder,
		private: true,
		link: '/user/:user_id/list',
	},
	{
		text: '我的紀錄',
		icon: file,
		private: true,
		link: '/user/:user_id/records',
	},
	{ text: '關於走走', icon: about, private: false, link: '/about' },
];

type propsType = {
	isFormOpen: boolean,
	isLoginState: boolean,
	setNavBar: Function,
};

const NavList = ({
	isFormOpen,
	isLoginState,
	setNavBar,
}: propsType): React.Node => {
	return (
		<ul
			className={`bg-t-green flex-grow flex flex-col p-8 overflow-y-auto relative  ${
				isFormOpen ? 'transform translate-y-full' : 'translate-y-0'
			}`}
		>
			{list.map(item => {
				// eslint-disable-next-line array-callback-return
				if (item.private && !isLoginState) return;
				return (
					<li
						key={item.text}
						className=" py-4 px-9 text-xl tracking-widest text-t-gray-dark my-0.5 flex items-center "
					>
						<div className="w-10 ">
							<FontAwesomeIcon
								icon={item.icon}
								className="text-white mr-5"
							/>
						</div>
						<NavLink
							onClick={() => setNavBar(false)}
							to={item.link}
							className="text-white"
						>
							{item.text}
						</NavLink>
					</li>
				);
			})}
		</ul>
	);
};

export default NavList;
