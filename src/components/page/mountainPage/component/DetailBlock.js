// @flow
import * as React from 'react';
import { useEffect } from 'react';
import fetchWiki from '../../../utilities/wikiAPI/fetchWiki';
import LoadingText from '../../../shared/components/UIElement/LoadingText';

const DetailBlock = ({
	mountain,
	setFns,
	mountainText,
}: {
	mountain: string,
	setFns: Object,
	mountainText: string,
}): React.Node => {
	useEffect(() => {
		setFns.setMountainDetail('');
		fetchWiki(mountain, request => {
			setFns.setMountainDetail(request);
		});
	}, [setFns, mountain]);
	// 記得做錯誤處理

	return (
		<div
			className={`relative bg-t-green transform -translate-y-5 rounded-b-3xl w-full px-7 py-12 shadow-lg`}
		>
			{mountainText ? (
				<>
					<p className={`text-white text-sm text-justify `}>
						{mountainText}
					</p>
					<a
						href={`https://zh.wikipedia.org/wiki/${mountain}`}
						target="_blank"
						rel="noreferrer noopener"
						className={`text-white text-xs float-right mt-3`}
					>
						資料來源： 維基百科 →
					</a>
				</>
			) : (
				<div className="text-white flex justify-center mt-5 transform -translate-x-2">
					<LoadingText />
				</div>
			)}
		</div>
	);
};

export default DetailBlock;
