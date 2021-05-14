// @flow
import * as React from 'react';

const MountainElement = (): React.Node => {
	return (
		<div
			className={`w-full h-full absolute top-0 left-0 pointer-events-none`}
		>
			<div
				className={`bg-t-green-light absolute bottom-0 transform rotate-45 translate-y-2/3 left-1/2 -translate-x-3/4`}
				style={{
					width: '100px',
					height: '100px',
				}}
			></div>
			<div
				className={`bg-t-green absolute bottom-0 transform rotate-45 translate-y-1/2 left-1/2 -translate-x-1/4`}
				style={{
					width: '100px',
					height: '100px',
				}}
			></div>
		</div>
	);
};

export default MountainElement;
