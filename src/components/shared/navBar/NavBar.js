// @!flow
import * as React from 'react';

import { connect } from 'react-redux';
import { createToggleNavBarAction } from '../../../store';
import { createToggleLoginFormShowAction } from '../../../store';

import Background from './components/Background';
import NavBarHeader from './components/NavBarHeader';
import UserLoginBlock from './components/UserLoginBlock';
import UserCard from './components/UserCard';
import NavList from './components/NavList';

//SECTION>

const mapStateToProps = state => {
	return {
		NavBarState: state.UIState.navBar,
		isLoginState: state.userState.isLogin,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		setNavBar: command => {
			dispatch(createToggleNavBarAction(command));
		},
		setLoginForm: command => {
			dispatch(createToggleLoginFormShowAction(command));
		},
	};
};

//SECTION>

type propsType = {
	NavBarState: {
		isOpen: boolean,
		isFormOpen: boolean,
	},
	setNavBar: Function,
	isLoginState: boolean,
	setLoginForm: Function,
};

const NavBar = function({
	NavBarState,
	setNavBar,
	isLoginState,
	setLoginForm,
}: propsType) {
	return (
		<div className="z-40">
			<Background NavBarState={NavBarState} />
			<nav
				className={`absolute right-0 h-full w-80 bg-t-gray-light  flex flex-col shadow-2xl ${
					NavBarState.isOpen
						? 'transform translate-x-0'
						: 'transform translate-x-full'
				} transition-transform`}
			>
				<div className="p-8">
					<NavBarHeader
						isLoginState={isLoginState}
						NavBarState={NavBarState}
						setNavBar={setNavBar}
						setLoginForm={setLoginForm}
					/>
					{isLoginState ? (
						<UserCard />
					) : (
						<UserLoginBlock
							NavBarState={NavBarState}
							setLoginForm={setLoginForm}
						/>
					)}
				</div>
				<NavList
					isFormOpen={NavBarState.isFormOpen}
					isLoginState={isLoginState}
				/>
			</nav>
		</div>
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
