// !@flow
import * as React from 'react';

import { connect } from 'react-redux';
import { createToggleNavBarAction } from '../../../store';

import NavBarHeader from './components/NavBarHeader';
import UserCard from './components/UserCard';
import NavList from './components/NavList';

//SECTION>

const mapStateToProps = state => {
	return { NavBarState: state.UIState.isNavBarOpen };
};

const mapDispatchToProps = dispatch => {
	return {
		setNavBar: command => {
			dispatch(createToggleNavBarAction(command));
		},
	};
};

const NavBar = function({ NavBarState, setNavBar }): React.Node {
	return (
		<div className="z-40">
			<div
				className={`${
					NavBarState ? 'block' : 'hidden'
				} absolute h-full w-full bg-black opacity-20`}
			/>
			<nav
				className={`absolute right-0 h-full w-80 bg-t-gray-light  flex flex-col shadow-2xl ${
					NavBarState
						? 'transform translate-x-0'
						: 'transform translate-x-full'
				} transition-transform`}
			>
				<div className="p-8">
					<NavBarHeader setNavBar={setNavBar} />
					<UserCard />
				</div>

				<NavList />
			</nav>
		</div>
	);
};
// export default NavBar;
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
