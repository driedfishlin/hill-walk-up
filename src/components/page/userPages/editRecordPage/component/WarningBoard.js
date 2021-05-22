// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';
import RegularButton from '../../../../shared/components/UIElement/RegularButton';

type propsType = {
	setState: Function,
	setFns: Object,
	id: string,
	userIdFromParams: string,
};

const WarningBoard = ({
	setState,
	setFns,
	id,
	userIdFromParams,
}: propsType): React.Node => {
	return (
		<div className={`fixed top-0 left-0 w-screen h-screen`}>
			<div
				className={`bg-black absolute top-0 left-0 w-full h-full opacity-20`}
			></div>
			<div
				className={`relative w-full h-full flex items-center justify-center`}
			>
				<div className={`bg-t-gray-light p-7 rounded-xl`}>
					<p
						className={`text-lg text-t-gray-dark tracking-wide py-3`}
					>
						確定刪除紀錄嗎？
					</p>
					<div className={`mt-3`}>
						<Link
							to={`/user/${userIdFromParams}/records`}
							onClick={() => {
								setFns.setRemoveOldRecord(id);
								setState(false);
								document
									.querySelector('body')
									?.scrollTo({ top: 0 });
							}}
						>
							<RegularButton black customClass={`my-1`}>
								刪除
							</RegularButton>
						</Link>
						<RegularButton
							clickFn={() => setState(false)}
							transparent
							customClass={`my-1`}
						>
							取消
						</RegularButton>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WarningBoard;
