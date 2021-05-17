// @flow
import * as React from 'react';
import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook as bookIcon } from '@fortawesome/free-solid-svg-icons/faBook.js';
// import { faBookmark as hollowMarkIcon } from '@fortawesome/free-solid-svg-icons/faBookmark.js';
import { faBookmark as solidMarkIcon } from '@fortawesome/free-solid-svg-icons/faBookmark.js';

import ListItem from './ListItem';
import SwitchButton from '../../../shared/components/UIElement/SwitchButton';
import YearsLine from './YearsLine';

const ListPages = (): React.Node => {
	const [switchListState, setSwitchState] = useState(true);
	return (
		<div className={`p-7`}>
			<div className={`flex justify-between`}>
				<h2 className={`h2-style`}>我的筆記</h2>
				<SwitchButton
					right={`目前紀錄`}
					wrong={`口袋清單`}
					finishState={[switchListState, setSwitchState]}
					customClass={`transform translate-y-1`}
				/>
			</div>
			<div className={`${switchListState ? 'block' : 'hidden'}`}>
				<div className={`flex items-center ml-1`}>
					<FontAwesomeIcon
						icon={bookIcon}
						className={`text-xl relative -top-0.5 mr-1`}
					/>
					<h3 className={`text-md font-medium mb-4 ml-1 mt-3`}>
						目前紀錄
					</h3>
				</div>
				<YearsLine />
				<ul className={`bg-white rounded-lg overflow-hidden`}>
					<ListItem />
					<ListItem />
					<ListItem />
					<ListItem />
					<ListItem />
					<ListItem />
					<ListItem />
				</ul>
			</div>
			{/**/}
			<div className={`${switchListState ? 'hidden' : 'block'}`}>
				<div className={`flex items-center ml-1`}>
					<FontAwesomeIcon
						icon={solidMarkIcon}
						className={`text-xl relative -top-0.5 mr-1`}
					/>
					<h3 className={`text-md font-medium mb-4 ml-1 mt-3`}>
						口袋清單
					</h3>
				</div>
				<ul className={`bg-white rounded-lg overflow-hidden`}>
					<ListItem />
					<ListItem />
					<ListItem />
					<ListItem />
					<ListItem />
					<ListItem />
					<ListItem />
				</ul>
			</div>
		</div>
	);
};

export default ListPages;
