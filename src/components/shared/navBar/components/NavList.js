// @flow
import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen as folder } from '@fortawesome/free-solid-svg-icons/faFolderOpen.js';
import { faFileAlt as file } from '@fortawesome/free-solid-svg-icons/faFileAlt';
import { faFileSignature as write } from '@fortawesome/free-solid-svg-icons/faFileSignature';
import { faAddressCard as about } from '@fortawesome/free-solid-svg-icons/faAddressCard';

const list = [
	{ text: '地圖', icon: file, private: false },
	{ text: '口袋名單', icon: folder, private: true },
	{ text: '我的筆記', icon: file, private: true },
	{ text: '新增筆記', icon: write, private: true },
	{ text: '關於走走', icon: about, private: false },
];

type propsType = {
	isFormOpen: boolean,
	isLoginState: boolean,
};

const NavList = ({ isFormOpen, isLoginState }: propsType): React.Node => {
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
						<a href="./" className="text-white">
							{item.text}
						</a>
					</li>
				);
			})}
		</ul>
	);
};

export default NavList;
