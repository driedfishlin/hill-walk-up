// @flow
import * as React from 'react';

const SwitchButton = ({
	right,
	wrong,
	customClass,
	finishState,
}: {
	wrong: string,
	right: string,
	customClass?: string,
	finishState: [boolean, Function],
}): React.Node => {
	const [state, setState] = finishState;
	return (
		<div
			onClick={() => setState(preState => !preState)}
			className={`rounded-full h-8 py-1 px-1 transition-colors duration-300 w-28 cursor-pointer ${
				state ? 'bg-t-green' : 'bg-t-gray-dark'
			} ${customClass || ''}`}
		>
			<div className={`relative w-full h-full`}>
				<button
					className={`rounded-full h-6 w-6 py-1 px-2.5  absolute top-0 focus:outline-none ${
						state ? 'left-20' : 'left-0'
					} bg-white`}
					style={{ transition: 'left 0.5s' }}
				/>
				<p
					className={`text-white text-sm font-medium tracking-wide absolute left-3 top-1/2 transform -translate-y-1/2 transition-opacity ${
						state ? 'opacity-1 delay-200 duration-300' : 'opacity-0'
					}`}
				>
					{right}
				</p>
				<p
					className={`text-white text-sm font-medium tracking-wide absolute right-3 top-1/2 transform -translate-y-1/2 transition-opacity ${
						state ? 'opacity-0' : 'opacity-1 delay-200 duration-300'
					}`}
				>
					{wrong}
				</p>
			</div>
		</div>
	);
};

export default SwitchButton;
