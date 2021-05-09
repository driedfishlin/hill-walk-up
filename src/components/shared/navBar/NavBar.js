// @flow
import * as React from 'react';

import NavBarHeader from './components/NavBarHeader';
import UserCard from './components/UserCard';
import NavList from './components/NavList';

const NavBar = function(): React.Node {
	return (
		<div className="z-40">
			<div className="absolute h-full w-full bg-black opacity-20" />
			<nav className="absolute right-0  h-full w-80 bg-t-gray-light  flex flex-col shadow-2xl">
				<div className="p-8">
					<NavBarHeader />
					<UserCard />
				</div>

				<NavList />
			</nav>
		</div>
	);
};
export default NavBar;
