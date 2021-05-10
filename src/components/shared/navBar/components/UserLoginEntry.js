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
					text="登入"
					clickFn={() => {
						setLoginForm(true);
					}}
					customClass={
						'bg-t-gray-dark text-t-gray-light active:bg-t-green'
					}
				/>
				<RegularButton
					text="註冊"
					customClass={'text-t-gray-dark active:text-t-green'}
				/>
			</div>
		</div>
	);
};

export default UserLoginEntry;
