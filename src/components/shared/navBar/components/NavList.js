// @flow
import * as React from 'react';
import { NavLink } from 'react-router-dom';

type propsType = {
	isFormOpen: boolean,
	isLoginState: boolean,
	setNavBar: Function,
	userIdFromStore: string | void,
};

const NavList = ({
	isFormOpen,
	isLoginState,
	setNavBar,
	userIdFromStore,
}: propsType): React.Node => {
	const list = [
		{ text: '地圖', private: false, link: '/' },
		{
			text: '口袋名單',
			private: true,
			link: userIdFromStore ? `/user/${userIdFromStore}/list` : '/',
		},
		{
			text: '我的紀錄',
			private: true,
			link: userIdFromStore ? `/user/${userIdFromStore}/records` : '/',
		},
		{
			text: '個人資料',
			private: true,
			link: userIdFromStore ? `/user/${userIdFromStore}` : '/',
		},
		{ text: '關於走走', private: false, link: '/about' },
	];
	return (
		<ul
			className={`bg-t-gray-dark text-t-gray-normal flex-grow flex flex-col py-7 overflow-y-auto mt-5 ${
				isFormOpen ? 'hidden' : ''
			}`}
		>
			{list.map(item => {
				// eslint-disable-next-line array-callback-return
				if (item.private && !isLoginState) return;
				return (
					<NavLink
						key={item.text}
						onClick={() => setNavBar(false)}
						to={item.link}
						className="my-0.5 py-1"
						activeClassName={`text-t-green bg-black bg-opacity-20`}
						exact
					>
						<li className="pl-14 py-2 text-md tracking-widest ">
							{item.text}
						</li>
					</NavLink>
				);
			})}
		</ul>
	);
};

export default NavList;
