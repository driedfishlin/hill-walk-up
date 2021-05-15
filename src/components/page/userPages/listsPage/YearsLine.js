// @flow
import * as React from 'react';

const YearsLine = (): React.Node => {
	return (
		<div className={`flex justify-center items-center mb-3 px-10`}>
			<hr className={`flex-grow border-t-green mx-1`} />
			<p
				className={`text-center text-xs mx-3 tracking-widest text-t-green font-medium`}
			>
				2021
			</p>
			<hr className={`flex-grow border-t-green mx-1`} />
		</div>
	);
};

export default YearsLine;
