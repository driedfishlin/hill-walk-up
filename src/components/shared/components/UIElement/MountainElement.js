// @flow
import * as React from 'react';
import { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag as flag } from '@fortawesome/free-solid-svg-icons/faFlag';

const MountainElement = ({
	user,
	mountain,
	overwriteFlagState,
}: {
	user?: Object | void,
	mountain?: Object | void,
	overwriteFlagState?: boolean | null,
}): React.Node => {
	// make sure the flag icon should be visible
	const [flagState, setFlagState] = useState(false);
	useEffect(() => {
		if (overwriteFlagState) {
			setFlagState(overwriteFlagState);
			return;
		}
		if (user?.tables?.records?.length) {
			const searchResult = user?.tables?.records.some(
				item => item.location === mountain && item.finish === true
			);
			console.log(searchResult);
			setFlagState(Boolean(searchResult));
		}
		console.log(user?.tables?.records?.length);
	}, [user, flagState, setFlagState, mountain, overwriteFlagState]);

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
			>
				<div
					className={`max-w-max absolute -top-5 -left-2 transform -translate-x-1/2 -rotate-45`}
				>
					<div
						className={`relative transition-all transform origin-bottom ${
							flagState
								? 'opacity-100 duration-300 animate-jump-out-delay'
								: 'opacity-0 duration-500'
						}`}
					>
						<FontAwesomeIcon
							className={`text-red-500 text-lg relative transform left-1.5 top-1`}
							icon={flag}
						/>
					</div>
				</div>
			</div>
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
