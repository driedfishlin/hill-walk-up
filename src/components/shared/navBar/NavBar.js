// @!flow
import * as React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { createToggleNavBarAction } from '../../../store';
import { createToggleLoginFormShowAction } from '../../../store';
import { createUserLogoutAction } from '../../../store';
import { createGuestModeAction } from '../../../store';
import { createToggleIsLoginAction } from '../../../store';

import Background from './components/Background';
import NavBarHeader from './components/NavBarHeader';
import UserLoginBlock from './components/UserLoginBlock';
import UserCard from './components/UserCard';
import NavList from './components/NavList';

//SECTION>

const mapStateToProps = state => {
	return {
		NavBarState: state.UIState.navBar,
		userState: state.userState,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		setFns: {
			setNavBar: command => {
				dispatch(createToggleNavBarAction(command));
			},
			setLoginForm: command => {
				dispatch(createToggleLoginFormShowAction(command));
			},
			setLogOut: () => dispatch(createUserLogoutAction()),
			setGuestMode: data => dispatch(createGuestModeAction(data)),
			setIsLogin: command => dispatch(createToggleIsLoginAction(command)),
		},
	};
};

//SECTION>

type propsType = {
	NavBarState: {
		isOpen: boolean,
		isFormOpen: boolean,
	},
	userState: Object,
	setFns: Object,
	setNavBar: Function,
	setLoginForm: Function,
};

const NavBar = function({ NavBarState, userState, setFns }: propsType) {
	return (
		<div
			className={`fixed top-0 left-0 z-40 h-screen w-screen ${!NavBarState.isOpen &&
				'pointer-events-none'}`}
		>
			<Background NavBarState={NavBarState} />
			<nav
				className={`absolute right-0 h-full w-80 bg-t-gray-light  flex flex-col shadow-2xl z-40 transform ${
					NavBarState.isOpen
						? `transform translate-x-0`
						: `transform translate-x-full`
				} transition-transform`}
			>
				<div className="px-7 pt-8 pb-5 h-auto max-h-full">
					<NavBarHeader
						isLoginState={userState.isLogin}
						NavBarState={NavBarState}
						setNavBar={setFns.setNavBar}
						setLoginForm={setFns.setLoginForm}
						setLogOut={setFns.setLogOut}
					/>
				</div>
				{console.log(NavBarState.isFormOpen)}
				<div
					className={`px-7 pt-3 pb-7 ${NavBarState.isFormOpen &&
						'overflow-y-auto'}`}
				>
					{userState.isLogin ? (
						<Link
							to={
								userState.user.account
									? `/user/${userState.user.account}`
									: '/'
							}
							onClick={() => setFns.setNavBar(false)}
						>
							<UserCard userState={userState} />
						</Link>
					) : (
						<UserLoginBlock
							NavBarState={NavBarState}
							setFns={setFns}
						/>
					)}
				</div>
				<NavList
					isFormOpen={NavBarState.isFormOpen}
					isLoginState={userState.isLogin}
					userIdFromStore={userState.user.account}
					setNavBar={setFns.setNavBar}
				/>
			</nav>
		</div>
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
