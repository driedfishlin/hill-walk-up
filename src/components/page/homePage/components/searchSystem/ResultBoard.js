// @flow
import * as React from 'react';

const ResultBoard = ({
	searchMode,
	setFns,
}: {
	searchMode: boolean,
	setFns: Object,
}): React.Node => {
	return (
		<div
			className={`fixed top-0 left-0 w-full h-full transform ${
				searchMode
					? 'translate-y-0'
					: '-translate-y-full transition-transform delay-1200'
			}`}
		>
			<div
				onClick={() => setFns.setSearchBar(false)}
				className={`absolute top-0 left-0 w-full h-full bg-t-gray-dark bg-opacity-30 ${
					searchMode ? 'block' : 'hidden'
				}`}
			></div>
			<div
				className={`absolute top-0 w-full left-0 h-1/2 bg-t-gray-light rounded-b-2xl shadow-lg transition-transform duration-500  transform ${
					searchMode
						? 'translate-y-0 delay-700'
						: '-translate-y-full delay-0'
				}`}
			></div>
		</div>
	);
};

export default ResultBoard;
