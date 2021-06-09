// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { createToggleNavBarAction } from '../../store';

import { headerHeight } from '../../index';

import { ReactComponent as Logo } from '../../image/mountain_logo.svg';

//SECTION>
const mapDispatchToProps = dispatch => {
	return {
		setNavBar: command => {
			dispatch(createToggleNavBarAction(command));
		},
	};
};

//SECTION>
const Button = function({ setNavBar }): React.Node {
	return (
		<div className="pr-3">
			<button
				onClick={() => {
					setNavBar(true);
				}}
				className="float-right flex flex-col justify-between py-2 px-1.5 text-white w-8 h-8 focus:outline-none">
				<div className="w-8 h-0.5 bg-white rounded-sm" />
				<div className="w-8 h-0.5 bg-white rounded-sm" />
				<div className="w-8 h-0.5 bg-white rounded-sm" />
			</button>
		</div>
	);
};

const ConnectedButton = connect(null, mapDispatchToProps)(Button);

const Header = function(): React.Node {
	return (
		<header className={`fixed top-0 left-0 w-full z-30 ${headerHeight[1]}`}>
			<div className="flex items-center justify-between h-full px-6 py-4 bg-t-gray-dark">
				<div>
					<Link to="/" className="flex items-center">
						<Logo
							className={`mr-3 relative`}
							style={{ fill: 'white', width: '43px', top: '2px' }}
						/>
						<h1 className="text-xl text-white tracking-wider noto-sans font-medium">
							走走山岳
							<span className="block text-xs tracking-wide">
								HELL WALK UP
							</span>
						</h1>
					</Link>
				</div>
				<ConnectedButton />
			</div>
		</header>
	);
};

export default Header;
