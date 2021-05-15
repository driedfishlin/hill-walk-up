// @flow
import * as React from 'react';

const buttonClass = `w-full text-xl border-2 py-1 px-2 h-12 tracking-wider select-none rounded-lg focus:outline-none`;

const RegularButton = ({
	children,
	customClass,
	clickFn,
	transparent,
	green,
}: {
	children: any,
	customClass?: string,
	clickFn?: Function,
	transparent?: boolean,
	green?: boolean,
}): React.Node => {
	return (
		<button
			onClick={clickFn}
			// 除了 customClass，在 props 帶上顏色的 keyword 將直接套用該樣式，預設套用黑色
			className={
				buttonClass +
				' ' +
				(customClass ? customClass : '') +
				` ${
					!(transparent || green)
						? 'border-t-gray-dark bg-t-gray-dark text-white'
						: ''
				} ${transparent ? 'border-t-gray-dark' : ''} ${
					green ? 'border-t-green bg-t-green text-white' : ''
				}`
			}
		>
			{children}
		</button>
	);
};

export default RegularButton;
