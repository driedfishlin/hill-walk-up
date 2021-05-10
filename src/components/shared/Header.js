// @flow
import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { connect } from 'react-redux';
import { createToggleNavBarAction } from '../../store';

import { faMountain as logo } from '@fortawesome/free-solid-svg-icons/faMountain';

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
		<div className=" flex-grow">
			<button
				onClick={() => {
					console.log(123);
					setNavBar(true);
				}}
				className="float-right flex flex-col justify-between py-2 px-1.5 text-white w-8 h-8 focus:outline-none"
			>
				<div className="w-full h-0.5 bg-white rounded-sm" />
				<div className="w-full h-0.5 bg-white rounded-sm" />
				<div className="w-full h-0.5 bg-white rounded-sm" />
			</button>
		</div>
	);
};

const ConnectedButton = connect(null, mapDispatchToProps)(Button);

const Header = function(): React.Node {
	return (
		<header className="flex items-center px-6 py-4 bg-t-gray-dark">
			<a className="flex items-center">
				<FontAwesomeIcon
					icon={logo}
					className="text-white text-3xl mr-3 relative top-0.5"
				/>
				<h1 className="text-xl text-white tracking-wider noto-sans font-medium">
					走走山岳
					<span className="block text-xs tracking-wide">
						HELL WALK UP
					</span>
				</h1>
			</a>
			<ConnectedButton />
		</header>
	);
};

export default Header;
