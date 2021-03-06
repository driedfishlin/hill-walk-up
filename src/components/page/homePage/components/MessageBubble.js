// @!flow
import * as React from 'react';
import { useRef, useEffect } from 'react';

//PART>

const DragButton = ({ buttonRef, bubbleRef, setBubble }): React.Node => {
	useEffect(() => {
		// calculate the drag distance and decide whether to close the message box
		const button = buttonRef.current;
		const bubble = bubbleRef.current;

		// -- event test
		// window.addEventListener('click', () => console.log('click'));
		// window.addEventListener('touchstart', () => console.log('touchstart'));
		// window.addEventListener('touchmove', () => console.log('touchmove'));
		// window.addEventListener('touchend', () => console.log('touchend'));
		// window.addEventListener('mousedown', () => console.log('mousedown'));
		// window.addEventListener('mousemove', () => console.log('mousemove'));
		// window.addEventListener('mouseup', () => console.log('mouseup'));
		//

		// -- use touch events (on Mobile)
		let touchPosition = null;
		let bubbleHeightOnMobile = null;
		const onTouchStart = event => {
			touchPosition = event.touches[0].pageY;
			bubbleHeightOnMobile = parseFloat(
				window.getComputedStyle(bubble).height
			);
			window.addEventListener('touchmove', onTouchMove);
			window.addEventListener('touchend', onTouchEnd);
		};
		const onTouchEnd = () => {
			const distance = parseFloat(
				bubble.style.transform
					.replace('translateY(', '')
					.replace('px)', '')
			);
			window.removeEventListener('touchmove', onTouchMove);
			window.removeEventListener('touchend', onTouchEnd);
			if (distance > (bubbleHeightOnMobile * 2) / 3) {
				button.removeEventListener('touchstart', onTouchStart);
				bubble.style.transition = 'transform 0.5s';
				bubble.style.transform = 'translateY(120%)';
				setBubble(false);
			} else {
				bubble.style.transition = 'transform 0.5s';
				bubble.style.transform = 'translateY(0)';
				setTimeout(() => (bubble.style.transition = ''), 500);
			}
		};
		const onTouchMove = event => {
			const num = event.touches[0].pageY - touchPosition;
			if (num > 0) {
				bubble.style.transform = `translateY(${num}px)`;
			}
		};
		button.addEventListener('touchstart', onTouchStart);

		// -- use mouse events (on Table)
		let MousePosition = null;
		let bubbleHeightOnTable = null;
		const onMouseDown = event => {
			MousePosition = event.pageY;
			bubbleHeightOnTable = parseFloat(
				window.getComputedStyle(bubble).height
			);
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
			if (distance > (bubbleHeightOnTable * 2) / 3) {
				button.removeEventListener('mousedown', onMouseDown);
				bubble.style.transition = 'transform 0.5s';
				bubble.style.transform = 'translateY(120%)';
				setBubble(false);
			} else {
				bubble.style.transition = 'transform 0.5s';
				bubble.style.transform = 'translateY(0)';
				setTimeout(() => (bubble.style.transition = ''), 500);
			}
		};
		const onMouseMove = event => {
			const num = event.pageY - MousePosition;
			if (num > 0) {
				bubble.style.transform = `translateY(${num}px)`;
			}
		};
		button.addEventListener('mousedown', onMouseDown);

		//
		return () => {
			button.removeEventListener('mousedown', onMouseDown);
			button.removeEventListener('touchstart', onTouchStart);
		};
	}, [buttonRef, bubbleRef, setBubble]);
	return (
		<div
			ref={buttonRef}
			className="p-5 box-content absolute -top-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
		>
			<div className="w-20 h-2 bg-white opacity-90 rounded-full shadow-md  "></div>
		</div>
	);
};

//PART>

const ProgressBar = ({ rateNum }): React.Node => {
	return (
		<div className="relative h-7 w-full rounded-xl bg-t-gray-light shadow-inner overflow-hidden">
			<div
				className="absolute bg-t-green shadow-inner top-0 left-0  h-7 w-full rounded-lg transform rotate-360 overflow-hidden"
				style={{ left: `-${100 - rateNum}%` }}
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

//PART>

type propsType = {
	setBubble: Function,
	bubbleState: boolean,
};

const MessageBubble = ({
	setBubble,
	bubbleState,
	rateNum,
}: propsType): React.Node => {
	const bubble = useRef(null);
	const button = useRef(null);
	return (
		<div
			ref={bubble}
			className={`absolute bottom-0 bg-white w-full flex justify-between items-center p-7 px-6 opacity-90 ${
				bubbleState ? '' : 'hidden'
			} md:w-2/3 md:rounded-3xl md:ml-7 md:mb-5 lg:w-2/5`}
		>
			<div className="flex-grow pr-5">
				<p className="text-sm text-t-gray-dark opacity-70 font-medium mb-2 ml-1">
					?????????????????????
				</p>
				<ProgressBar rateNum={rateNum} />
			</div>
			<div>
				<p className="text-xl text-t-green-dark font-medium transform translate-y-1">
					<span className="text-3xl">{rateNum}</span>
					{' %'}
				</p>
			</div>
			<DragButton
				buttonRef={button}
				bubbleRef={bubble}
				setBubble={setBubble}
			/>
		</div>
	);
};

export default MessageBubble;
