// @flow
import * as React from 'react';
import { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleUp as arrow } from '@fortawesome/free-solid-svg-icons/faAngleDoubleUp';

import { headerHeight } from '../../../index';

const textStyle = `text-white text-basic pt-3 tracking-widest`;

const PromptFilter = (): React.Node => {
	const [countState, setCountState] = useState(0);
	useEffect(() => {
		setCountState(1);
	}, []);
	return (
		<div
			className={`h-screen w-screen absolute left-0 transition-opacity ${
				headerHeight[4]
			} ${
				countState === 0
					? 'opacity-0 duration-400 '
					: 'opacity-1 duration-200 '
			} ${countState === 4 && 'hidden'}`}
		>
			<div
				className={`bg-t-gray-dark opacity-40 absolute top-0 left-0 w-full h-full`}
			/>
			<div className={`absolute ${headerHeight[2]}  h-full w-full`}>
				<div className={`relative h-full w-full`}>
					<div
						className={`absolute top-24 left-10 flex flex-col items-center ${countState !==
							1 && 'invisible'}`}
					>
						<FontAwesomeIcon
							icon={arrow}
							className={`text-4xl text-white animate-bounce`}
						/>
						<p
							className={`${textStyle} pt-3 tracking-widest`}
							style={{ writingMode: 'vertical-rl' }}
						>
							在這邊輸入要尋找的山岳
						</p>
					</div>
					<div
						className={`absolute top-6 right-8 flex flex-col items-center ${countState !==
							2 && 'invisible'}`}
					>
						<FontAwesomeIcon
							icon={arrow}
							className={`text-4xl text-white animate-bounce`}
						/>
						<p
							className={`${textStyle}  pt-3 tracking-widest`}
							style={{ writingMode: 'vertical-rl' }}
						>
							打開表單使用更多功能
						</p>
					</div>
					<div
						className={`absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 flex flex-col items-center ${countState !==
							3 && 'invisible'}`}
					>
						<p
							className={`${textStyle} pb-6`}
							style={{ writingMode: 'horizontal-tb' }}
						>
							點選圖示查看地點
						</p>
						<div className={`animate-bounce`}>
							<FontAwesomeIcon
								icon={arrow}
								className={`text-4xl text-white transform rotate-180`}
							/>
						</div>
					</div>
					<div
						className={`absolute bottom-20 left-1/2 transform -translate-x-1/2`}
					>
						<button
							onClick={() => setCountState(prev => prev + 1)}
							className={`relative text-white text-sm border-2 border-white rounded-md px-1.5 py-0.5 focus:outline-none`}
						>
							下一步 ➜
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PromptFilter;
