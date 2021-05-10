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
			<div className="absolute h-full w-full bg-black opacity-20" />
			<nav
				className={`absolute ${
					NavBarState ? 'right-0' : '-right-full'
				} h-full w-80 bg-t-gray-light  flex flex-col shadow-2xl`}
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
