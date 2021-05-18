// @flow
import * as React from 'react';
import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook as bookIcon } from '@fortawesome/free-solid-svg-icons/faBook.js';
// import { faBookmark as hollowMarkIcon } from '@fortawesome/free-solid-svg-icons/faBookmark.js';
import { faBookmark as solidMarkIcon } from '@fortawesome/free-solid-svg-icons/faBookmark.js';

import ListItem from './component/ListItem';
import SwitchButton from '../../../shared/components/UIElement/SwitchButton';
import YearsLine from './component/YearsLine';

//SECTION>
// 將 records 資料按時間倒序排列，並於畫面上以年份分區渲染多個 <ul>
const createRecordsList = arr => {
	const sorted = arr.sort(
		(prev, next) =>
			next.startDate.split('/')[0] - prev.startDate.split('/')[0]
	);
	let year = null;
	const result = [];
	const register = [];
	sorted.forEach((item, index) => {
		if (year === null) {
			year = item.startDate.split('/')[0];
			result.push(<YearsLine year={year} />);
		}
		if (year !== item.startDate.split('/')[0]) {
			let children = [...register];
			let ul = (
				<ul className={`bg-white rounded-lg overflow-hidden mb-4`}>
					{children}
				</ul>
			);
			result.push(ul);
			register.length = 0;
			year = item.startDate.split('/')[0];
			result.push(<YearsLine year={year} />);
		}
		register.push(
			<ListItem
				type={'record'}
				key={item.id}
				location={item.location}
				start={item.startDate}
				end={item.endDate}
				id={item.id}
			/>
		);
		if (index + 1 === sorted.length)
			result.push(
				<ul className={`bg-white rounded-lg overflow-hidden`}>
					{register}
				</ul>
			);
	});
	return result;
};

//SECTION>
type propsType = { userState: Object };

const ListPages = ({ userState }: propsType): React.Node => {
	const [switchListState, setSwitchState] = useState(true);
	const tables = userState.user.tables;
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
				{/* <YearsLine /> */}
				{/* <ul className={`bg-white rounded-lg overflow-hidden`}> */}
				{/* //TODO> link, years */}
				{/* {tables.records.map(item => (
						<ListItem
							type={'record'}
							key={item.id}
							location={item.location}
							start={item.startDate}
							end={item.endDate}
							id={item.id}
						/>
					))} */}
				{createRecordsList(tables.records)}
				{/* </ul> */}
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
					<ListItem type={'favorite'} />
				</ul>
			</div>
		</div>
	);
};

export default ListPages;
