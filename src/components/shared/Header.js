// @flow
import * as React from 'react';

import { connect } from 'react-redux';
import { createToggleNavBarAction } from '../../store';

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
		<button
			onClick={() => {
				console.log(123);
				setNavBar(true);
			}}
			className="flex flex-col justify-between py-2 px-1.5 text-white w-8 h-8 focus:outline-none"
		>
			<div className="w-full h-0.5 bg-white rounded-sm" />
			<div className="w-full h-0.5 bg-white rounded-sm" />
			<div className="w-full h-0.5 bg-white rounded-sm" />
		</button>
	);
};

const ConnectedButton = connect(null, mapDispatchToProps)(Button);

const Header = function(): React.Node {
	return (
		<header className="flex justify-between items-center px-6 py-4 bg-t-gray-dark">
			<h1 className="text-xl text-white tracking-wider noto-sans font-medium">
				走走山岳
				<span className="block text-xs tracking-wide">
					HELL WALK UP
				</span>
			</h1>
			<ConnectedButton />
		</header>
	);
};

export default Header;
