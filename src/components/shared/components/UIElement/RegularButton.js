// @flow
import * as React from 'react';

const buttonClass = `text-xl border-2 border-t-gray-dark py-1 px-2 h-12 w-full tracking-wider select-none rounded-lg focus:outline-none active:border-t-green`;

const RegularButton = ({
	text,
	customClass,
	clickFn,
}: {
	text: string,
	customClass?: string,
	clickFn?: Function,
}): React.Node => {
	return (
		<button
			onClick={clickFn}
			className={buttonClass + ' ' + (customClass ? customClass : '')}
		>
			{text}
		</button>
	);
};

export default RegularButton;
