// @flow
import * as React from 'react';
import { useState } from 'react';
import store from '../../../../store';
import { useLocation, Link } from 'react-router-dom';
import { nanoid } from 'nanoid';

import SwitchButton from '../../../shared/components/UIElement/SwitchButton';
import RegularButton from '../../../shared/components/UIElement/RegularButton';

//SECTION> CSS class
const label_class = `block text-sm mb-2 mt-5 font-medium`;
const input_class = `w-full focus:outline-none border-none`;
const sm_input_class = `focus:ring-t-green rounded-lg my-1`;
const record_class = `bg-transparent px-0 focus:ring-0 focus:border-0 py-2`;
const hr_class = `border-t-gray-dark`;
const button_class = `my-2`;

//SECTION> Function
const recordsList = store.getState().userState.user?.tables?.records;
// 用於檢查是否有重複 ID
const createNewId = () => {
	let newId = nanoid();
	if (recordsList.includes(item => item.id === newId)) createNewId();
	return newId;
};

// 自動分割日期字串
const onDateInputChange = (event, preState) => {
	const input = event.target.value;
	const filteredString = input
		.split('')
		.filter(item => !(item === '/' || item === '-'))
		.join('');
	if (!/^[0-9]*$/.test(filteredString)) return preState;
	let arr = filteredString.split('');
	if (arr.length >= 5) arr.splice(4, 0, '/');
	if (arr.length >= 8) arr.splice(7, 0, '/');
	if (arr.length > 10) arr.length = 10;
	return arr.join('');
};

//SECTION> Component
type oldRecordType = {
	title: string,
	startDate: string,
	endDate: string,
	text: string,
	finish: boolean,
	id?: string,
};
const EditRecordForm = ({
	action,
	setFns,
	targetMountain,
	oldRecord,
}: {
	action: string,
	setFns: Object,
	targetMountain: string,
	// null 傳進來會 crash ↓
	oldRecord?: oldRecordType | {} | null,
}): React.Node => {
	const { setNewRecord, setUpdateRecord } = setFns;
	const {
		title,
		startDate,
		endDate,
		text,
		finish,
	}: oldRecordType = oldRecord;
	const [finishState, setFinishState] = useState(
		action === 'edit' ? finish || false : false
	);
	const [titleState, setTitleState] = useState(
		action === 'edit' ? title || '' : ''
	);
	const [startDateState, setStartDateState] = useState(
		action === 'edit' ? startDate || '' : ''
	);
	// console.log(startDateState);
	const [endDateState, setEndDateState] = useState(
		action === 'edit' ? endDate || '' : ''
	);
	const [textState, setTextState] = useState(
		action === 'edit' ? text || '' : ''
	);

	// 'new' or 'edit' from state of Link.
	const currentPath = useLocation().state?.action;
	let id = null;
	if (currentPath === 'new') id = createNewId();
	if (currentPath === 'edit') id = oldRecord?.id;

	return (
		<form
			className={`p-3 text-t-gray-dark`}
			onSubmit={event => event.preventDefault()}
		>
			<div className={`flex justify-center mt-8`}>
				<SwitchButton
					wrong={'再接再厲'}
					right={`成功攀登`}
					finishState={[finishState, setFinishState]}
				/>
			</div>

			<label className={`${label_class}`}>標題</label>
			<input
				type="text"
				className={`${input_class} ${sm_input_class}`}
				value={titleState}
				onChange={event => {
					let title = event.target.value;
					if (title > 20) title = title.slice(0, 20);
					setTitleState(title);
				}}
			/>
			<label className={`${label_class}`}>日期區間</label>
			<input
				//TODO> 須實作驗證：小於目前日期、出發日小於回程日
				type="text"
				className={`${input_class} ${sm_input_class}`}
				value={startDateState}
				placeholder={new Date().toISOString().split('T')[0]}
				onChange={event =>
					setStartDateState(prevState =>
						onDateInputChange(event, prevState)
					)
				}
			/>
			<input
				type="text"
				className={`${input_class} ${sm_input_class}`}
				value={endDateState}
				placeholder={new Date().toISOString().split('T')[0]}
				onChange={event =>
					setEndDateState(prevState =>
						onDateInputChange(event, prevState)
					)
				}
			/>
			<label className={`${label_class}`}>紀錄</label>
			<hr className={`${hr_class} mt-3`} />
			<textarea
				rows="6"
				placeholder="寫下你的健行記述吧！"
				className={`${input_class} ${record_class}`}
				value={textState}
				onChange={event => {
					let text = event.target.value;
					if (text > 500) text = text.slice(0, 500);
					setTextState(text);
				}}
			></textarea>
			<p className={`float-right text-xs`}>{textState.length}/500</p>
			<p className="clear-both" />
			<hr className={`${hr_class} mt-0.5 mb-7`} />
			<div className={`p-3`}>
				<Link
					replace
					to={{
						pathname: `/user/:user_id/records/${id}`,
						state: { from: currentPath },
					}}
				>
					<RegularButton
						customClass={`${button_class}`}
						green
						clickFn={event => {
							//TODO> 未實作資料驗證
							const data = {
								title: titleState,
								startDate: startDateState,
								endDate: endDateState,
								finish: finishState,
								text: textState,
								location: targetMountain,
							};
							// 新建資料才給予 id
							if (currentPath === 'new') {
								data.id = id;
								setNewRecord(data);
							}
							if (currentPath === 'edit') {
								setUpdateRecord(data, id);
							}
							document
								.querySelector('body')
								?.scrollTo({ top: 0 });
						}}
					>
						完成送出
					</RegularButton>
				</Link>
				<div className={`flex`}>
					<RegularButton
						customClass={`${button_class}`}
						onClick={event => event.preventDefault()}
						transparent
					>
						取消
					</RegularButton>
					{action === 'edit' && (
						<RegularButton
							customClass={`${button_class}  ml-2`}
							onClick={event => event.preventDefault()}
						>
							刪除
						</RegularButton>
					)}
				</div>
			</div>
		</form>
	);
};

export default EditRecordForm;
