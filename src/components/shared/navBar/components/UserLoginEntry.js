// @flow
import * as React from 'react';

import RegularButton from '../../components/UIElement/RegularButton';

const UserLoginEntry = ({
	setLoginForm,
}: {
	setLoginForm: Function,
}): React.Node => {
	return (
		<div className=" px-10 py-8">
			<p className="mb-6 text-t-gray-dark">請登入以使用更多功能！</p>
			<div className="flex justify-between flex-col h-28">
				<RegularButton
					clickFn={() => {
						setLoginForm(true);
					}}
					customClass={'active:bg-t-green'}
					black
				>
					登入
				</RegularButton>
				<RegularButton
					transparent
					customClass={'active:border-t-green active:text-t-green'}
				>
					註冊
				</RegularButton>
			</div>
		</div>
	);
};

export default UserLoginEntry;
