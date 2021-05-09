// @flow
import * as React from 'react';

const Button = function(): React.Node {
	return (
		<button className="flex flex-col justify-between py-2 px-1.5 text-white w-8 h- focus:outline-none">
			<div className="w-full h-0.5 bg-white rounded-sm" />
			<div className="w-full h-0.5 bg-white rounded-sm" />
			<div className="w-full h-0.5 bg-white rounded-sm" />
		</button>
	);
};

const Header = function(): React.Node {
	return (
		<header className="flex justify-between px-3 py-2 bg-t-green shadow-sm">
			<h1 className="text-xl text-white tracking-wider noto-sans font-medium">
				走走山岳
				<span className="text-xs tracking-wide ml-1">HELL WALK UP</span>
			</h1>
			<Button />
		</header>
	);
};

export default Header;
