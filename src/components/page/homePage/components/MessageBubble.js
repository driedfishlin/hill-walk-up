// @!flow
import * as React from 'react';
import { useRef, useEffect } from 'react';

// dummy info
const data = 60;

const DragButton = ({ buttonRef, bubbleRef }): React.Node => {
	useEffect(() => {
		// calculate the drag distance and decide whether to close the message box
		const button = buttonRef.current;
		const bubble = bubbleRef.current;
		let clickPosition = null;
		let bubbleHeight = null;
		const onMouseDown = event => {
			clickPosition = event.pageY;
			bubbleHeight = parseFloat(window.getComputedStyle(bubble).height);
			window.addEventListener('mousemove', onMouseMove);
			window.addEventListener('mouseup', onMouseUp);
		};
		const onMouseUp = () => {
			const distance = parseFloat(
				bubble.style.transform
					.replace('translateY(', '')
					.replace('px)', '')
			);
			window.removeEventListener('mousemove', onMouseMove);
			window.removeEventListener('mouseup', onMouseUp);
			if (distance > (bubbleHeight * 2) / 3) {
				button.removeEventListener('mousedown', onMouseDown);
				bubble.style.transition = 'transform 0.5s';
				bubble.style.transform = 'translateY(120%)';
			} else {
				bubble.style.transition = 'transform 0.5s';
				bubble.style.transform = 'translateY(0)';
				setTimeout(() => (bubble.style.transition = ''), 500);
			}
		};
		const onMouseMove = event => {
			const num = event.pageY - clickPosition;
			if (num > 0) {
				bubble.style.transform = `translateY(${num}px)`;
			}
		};
		button.addEventListener('mousedown', onMouseDown);
		return () => {
			button.removeEventListener('mousedown', onMouseDown);
		};
	}, [buttonRef, bubbleRef]);
	return (
		<div
			ref={buttonRef}
			className="p-5 box-content absolute -top-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
		>
			<div className="w-20 h-2 bg-white opacity-90 rounded-full shadow-md  "></div>
		</div>
	);
};

const ProgressBar = (): React.Node => {
	return (
		<div className="relative h-7 w-full rounded-xl bg-t-gray-light shadow-inner overflow-hidden">
			<div
				className="absolute bg-t-green shadow-inner top-0 left-0  h-7 w-full rounded-lg transform rotate-360 overflow-hidden"
				style={{ left: -100 + data }}
			>
				<div className="w-max">
					{Array.from({ length: 10 }, (_, index) => (
						<div
							key={index}
							className="relative bottom-3 w-5 h-14 bg-white opacity-20 inline-block mx-3 transform rotate-30"
						/>
					))}
				</div>
				<div className="absolute bg-white opacity-40 w-full h-1 top-0.5 right-1 rounded-full transform rotate-180" />
				<div className="absolute bg-gradient-to-r from-white opacity-40 w-full h-2 top-1 right-1 rounded-full transform rotate-180" />
				<div className="absolute bg-t-gray-dark opacity-10 w-full h-1 bottom-0 right-1 rounded-full transform rotate-180" />
			</div>
			<div className="absolute shadow-inner top-0 left-0  h-7 w-full rounded-xl transform rotate-360"></div>
		</div>
	);
};

const MessageBubble = (): React.Node => {
	const bubble = useRef(null);
	const button = useRef(null);
	return (
		<div
			ref={bubble}
			className="absolute bottom-0 bg-white w-full flex justify-between items-center p-7 px-6 opacity-90"
		>
			<div className="flex-grow pr-5">
				<p className="text-sm font-medium mb-2 ml-1">百岳完攻進度：</p>
				<ProgressBar />
			</div>
			<div>
				<p className="text-xl font-medium transform translate-y-1">
					<span className="text-3xl">{data}</span>
					{' %'}
				</p>
			</div>
			<DragButton buttonRef={button} bubbleRef={bubble} />
		</div>
	);
};

export default MessageBubble;
