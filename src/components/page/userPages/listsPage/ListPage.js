// @flow
import * as React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook as bookIcon } from '@fortawesome/free-solid-svg-icons/faBook.js';
import { faBookmark as solidMarkIcon } from '@fortawesome/free-solid-svg-icons/faBookmark.js';

import ListItem from './component/ListItem';
import SwitchButton from '../../../shared/components/UIElement/SwitchButton';
import YearsLine from './component/YearsLine';
import ErrorPage from '../../../shared/components/ErrorPage';

//SECTION> Function
// 將 records 資料按時間倒序排列，並於畫面上以年份分區渲染多個 <ul>
const createRecordsList = arr => {
	const sorted = arr.sort(
		(prev, next) =>
			next.startDate.split('/')[0] - prev.startDate.split('/')[0]
	);
	let year = null;
	const result = [];
	const register = [];
	let colorCount = 0;
	sorted.forEach((item, index) => {
		if (year === null) {
			year = item.startDate.split('/')[0];
			result.push(<YearsLine year={year} key={year} />);
		}
		if (year !== item.startDate.split('/')[0]) {
			let children = [...register];
			let ul = (
				<ul
					key={year + '_ul'}
					className={`bg-white rounded-lg overflow-hidden mb-4 shadow-md`}
				>
					{children}
				</ul>
			);
			colorCount = 0;
			result.push(ul);
			register.length = 0;
			year = item.startDate.split('/')[0];
			result.push(<YearsLine year={year} key={year} />);
		}
		register.push(
			<ListItem
				type={'record'}
				key={item.id}
				location={item.location}
				start={item.startDate}
				end={item.endDate}
				id={item.id}
				gbColor={colorCount % 2 === 0 ? 'bg-white' : 'bg-t-gray-dark'}
				textColor={
					colorCount % 2 === 1 ? 'text-white' : 'text-t-gray-dark'
				}
			/>
		);
		if (index + 1 === sorted.length)
			result.push(
				<ul
					className={`bg-white rounded-lg overflow-hidden shadow-md`}
					key={year + '_ul'}
				>
					{register}
				</ul>
			);
		colorCount += 1;
	});
	return result;
};

//SECTION> Component
type propsType = { userState: Object, setFns: Object };

const ListPages = ({ userState, setFns }: propsType): React.Node => {
	const userIdFromParams = useParams().user_id;
	const { user } = userState;

	const [switchListState, setSwitchState] = useState(false);
	const tables = user.tables;
	const emptyList = (
		<div className={`flex items-center justify-center py-28`}>
			<p>目前沒有紀錄！</p>
		</div>
	);
	if (user.account !== userIdFromParams)
		return (
			<ErrorPage
				statusCode={404}
				text={`你沒有登入喔`}
				link="/user/sign"
				anchor={`請檢查網址，或註冊新會員`}
			/>
		);
	return (
		<div className={`p-7`}>
			<div className={`flex justify-between`}>
				<h2 className={`h2-style text-t-gray-dark`}>我的筆記</h2>
				<SwitchButton
					right={`目前紀錄`}
					wrong={`口袋名單`}
					finishState={[switchListState, setSwitchState]}
					customClass={`transform translate-y-1`}
				/>
			</div>
			<div
				className={`${
					switchListState ? 'block' : 'hidden'
				}  text-t-gray-dark`}
			>
				<div className={`flex items-center ml-1`}>
					<FontAwesomeIcon
						icon={bookIcon}
						className={`text-xl relative -top-0.5 mr-1 `}
					/>
					<h3 className={`text-md font-medium mb-4 ml-1 mt-3`}>
						目前紀錄
					</h3>
				</div>
				{tables.records.length
					? createRecordsList(tables.records)
					: emptyList}
			</div>
			{/**/}
			<div
				className={`${
					switchListState ? 'hidden' : 'block'
				}  text-t-gray-dark`}
			>
				<div className={`flex items-center ml-1`}>
					<FontAwesomeIcon
						icon={solidMarkIcon}
						className={`text-xl relative -top-0.5 mr-1`}
					/>
					<h3 className={`text-md font-medium mb-4 ml-1 mt-3`}>
						口袋名單
					</h3>
				</div>
				{tables.favorites.length ? (
					<ul
						className={`bg-white rounded-lg overflow-hidden shadow-md`}
					>
						{tables.favorites.map((item, index) => (
							<ListItem
								setFns={setFns}
								key={item}
								location={item}
								type={'favorite'}
								gbColor={
									index % 2 === 0
										? 'bg-white'
										: 'bg-t-gray-dark'
								}
								textColor={
									index % 2 === 1
										? 'text-white'
										: 'text-t-gray-dark'
								}
							/>
						))}
					</ul>
				) : (
					emptyList
				)}
			</div>
		</div>
	);
};

export default ListPages;
