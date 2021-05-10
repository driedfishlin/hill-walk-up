// @flow
import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Some problems will occur when tree-shaking of fontawesome,
// so provided the full path.
import { faChevronCircleRight as arrow } from '@fortawesome/free-solid-svg-icons/faChevronCircleRight';

const buttonClass =
	'float-right border py-1 px-2 font-light rounded-md border-t-gray-dark text-t-gray-dark focus:outline-none active:text-t-green active:border-t-green';

//SECTION>

type propsType = {
	setNavBar: Function,
	isLoginState: boolean,
	NavBarState: {
		isFormOpen: boolean,
		isOpen: boolean,
	},
	setLoginForm: Function,
};

//SECTION> REACT COMPONENT
const NavBarHeader = ({
	setNavBar,
	isLoginState,
	NavBarState,
	setLoginForm,
}: propsType): React.Node => {
	return (
		<div className="flex items-center justify-between mb-8">
			<FontAwesomeIcon
				onClick={() => {
					setNavBar(false);
					setTimeout(() => setLoginForm(false), 200);
				}}
				icon={arrow}
				className="text-4xl text-t-green cursor-pointer"
			/>
			<div className="flex-grow">
				{NavBarState.isFormOpen && !isLoginState ? (
					<button
						onClick={() => setLoginForm(false)}
						className={buttonClass}
					>
						取消
					</button>
				) : null}

				{isLoginState ? (
					<button className={buttonClass}>登出</button>
				) : null}
			</div>
		</div>
	);
};
export default NavBarHeader;
