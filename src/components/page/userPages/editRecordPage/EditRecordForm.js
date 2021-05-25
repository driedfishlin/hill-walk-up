// @flow
import * as React from 'react';
import { useState, useEffect } from 'react';
import store from '../../../../store';
import { useLocation, Link, useHistory, useParams } from 'react-router-dom';
import { nanoid } from 'nanoid';

import SwitchButton from '../../../shared/components/UIElement/SwitchButton';
import RegularButton from '../../../shared/components/UIElement/RegularButton';
import WarningBoard from './component/WarningBoard';

//SECTION> CSS class
const label_class = `block text-sm mb-2 mt-5 font-medium`;
const input_class = `w-full focus:outline-none`;
const sm_input_class = `rounded-lg my-1`;
const record_class = `bg-transparent px-0 focus:ring-0 focus:border-0 py-2`;
const hr_class = `border-t-gray-dark`;
const button_class = `my-2`;

//SECTION> Function
const recordsList = store.getState().userState.user.tables?.records;
// 用於檢查是否有重複 ID
const createNewId = () => {
	let newId = nanoid();
	if (recordsList && recordsList.includes(item => item.id === newId))
		createNewId();
	return newId;
};

// single date input validation (檢查格式與數值是否合法)
const dateValidate = input => {
	if (input.length < 10) return false;
	const filteredString: Array<string> = input.split('/');
	const newDate: Array<string> = new Date()
		.toISOString()
		.split('T')[0]
		.split('-');
	const year: number = Number(filteredString[0]);
	const month: number = Number(filteredString[1]);
	const day: number = Number(filteredString[2]);
	if (!year || year < 1900 || year > +newDate[0]) return false;
	if (!month || month < 1 || month > 12) return false;
	if (!day || day < 1 || day > 31) return false;
	if (year === +newDate[0] && month > +newDate[1]) return false;
	if (year === +newDate[0] && month === +newDate[1] && day > +newDate[2])
		return false;

	return true;
};

// validate both date input（檢查日期先後順序有效）
const dateValidateBoth = (startDate: string, endDate: string) => {
	if (startDate.length === 0 || endDate.length === 0) return;
	const startNum = Number(startDate.split('/').join(''));
	const endNum = Number(endDate.split('/').join(''));
	if (endNum - startNum < 0) return false;
	return true;
};

// 填寫日期表單時自動分割字串
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
	const result = arr.join('');
	return result;
};

//SECTION> Component Type
type oldRecordType = {
	title: string,
	startDate: string,
	endDate: string,
	text: string,
	finish: boolean,
	id?: string,
};

type propsType = {
	action: string,
	setFns: Object,
	useWarningBoardState: [boolean, Function],
	targetMountain: string,
	// null 傳進來會 crash ↓
	oldRecord?: oldRecordType | {} | null,
	setOverwriteFlagState: Function,
};

//SECTION> Component
const EditRecordForm = ({
	action,
	setFns,
	targetMountain,
	oldRecord,
	useWarningBoardState,
	setOverwriteFlagState,
}: propsType): React.Node => {
	const userIdFromParams = useParams().user_id;
	const [warningBoardState, setWarningBoardState] = useWarningBoardState;
	const { setNewRecord, setUpdateRecord } = setFns;
	const {
		title,
		startDate,
		endDate,
		text,
		finish,
	}: oldRecordType = oldRecord;

	// input state
	const [finishState, setFinishState] = useState(
		action === 'edit' ? finish || false : false
	);
	const [titleState, setTitleState] = useState(
		action === 'edit' ? title || '' : ''
	);
	const [startDateState, setStartDateState] = useState(
		action === 'edit' ? startDate || '' : ''
	);
	const [endDateState, setEndDateState] = useState(
		action === 'edit' ? endDate || '' : ''
	);
	const [textState, setTextState] = useState(
		action === 'edit' ? text || '' : ''
	);

	// input validation state
	const [titleValidateState, setTitleValidateState] = useState(true);
	const [startDateValidateState, setStartValidateState] = useState(true);
	const [endDateValidateState, setEndValidateState] = useState(true);

	const errorMessage = () => {
		if (!titleValidateState) return '請填入標題';
		if (!startDateValidateState || !endDateValidateState)
			return '請填寫正確的時間格式';
		return '';
	};
	const submitButtonVisible = () => {
		if (
			!titleValidateState ||
			!startDateValidateState ||
			!endDateValidateState
		)
			return false;
		if (!titleState || !startDateState || !endDateState) return false;
		return true;
	};

	// 'new' or 'edit' from state of Link.
	const currentPath = useLocation().state?.action;
	let id = null;
	if (currentPath === 'new') id = createNewId();
	if (currentPath === 'edit') id = oldRecord?.id;

	const history = useHistory();

	useEffect(() => {
		setOverwriteFlagState(finishState);
	}, [finishState, setOverwriteFlagState]);

	return (
		<>
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
				<div className={'md:w-1/2 md:mx-auto'}>
					<label className={`${label_class}`}>標題</label>
					<input
						type="text"
						className={`${input_class} ${sm_input_class} ${
							titleValidateState
								? 'border-transparent focus:border-t-green focus:ring-t-green'
								: 'focus:ring-red-500 border-red-500 focus:border-red-500'
						}`}
						value={titleState}
						onChange={event => {
							let title = event.target.value;
							if (title.length > 20) title = title.slice(0, 20);
							setTitleState(title);
							if (title.length > 0) setTitleValidateState(true);
						}}
						onBlur={event => {
							if (event.target.value.length === 0)
								setTitleValidateState(false);
						}}
					/>
					<label className={`${label_class}`}>日期區間</label>
					<input
						type="text"
						className={`${input_class} ${sm_input_class} ${
							startDateValidateState
								? 'border-transparent focus:border-t-green focus:ring-t-green'
								: 'focus:ring-red-500 border-1 border-red-500 focus:border-red-500'
						}`}
						value={startDateState}
						placeholder={new Date().toISOString().split('T')[0]}
						onChange={event => {
							setStartDateState(prevState =>
								onDateInputChange(event, prevState)
							);
							if (dateValidate(event.target.value))
								setStartValidateState(true);
						}}
						onBlur={event => {
							if (!dateValidate(event.target.value))
								return setStartValidateState(false);
							if (!dateValidateBoth(startDateState, endDateState))
								return setStartValidateState(false);
							if (dateValidate(endDateState))
								setEndValidateState(true);
							setStartValidateState(true);
						}}
					/>
					<input
						type="text"
						className={`${input_class} ${sm_input_class} ${
							endDateValidateState
								? 'border-transparent focus:border-t-green focus:ring-t-green'
								: 'focus:ring-red-500 border-1 border-red-500 focus:border-red-500'
						}`}
						value={endDateState}
						placeholder={new Date().toISOString().split('T')[0]}
						onChange={event => {
							setEndDateState(prevState =>
								onDateInputChange(event, prevState)
							);
							if (dateValidate(event.target.value))
								setEndValidateState(true);
						}}
						onBlur={event => {
							if (!dateValidate(event.target.value))
								return setEndValidateState(false);
							if (!dateValidateBoth(startDateState, endDateState))
								return setEndValidateState(false);
							if (dateValidate(startDateState))
								setStartValidateState(true);
							setEndValidateState(true);
						}}
					/>
				</div>
				<label className={`${label_class}`}>紀錄</label>
				<hr className={`${hr_class} mt-3`} />
				<textarea
					rows="6"
					placeholder="寫下你的健行記述吧！"
					className={`${input_class} ${record_class}  border-none`}
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
				<p className={`text-center text-red-500 text-sm`}>
					{errorMessage()}
				</p>
				<div className={`p-3`}>
					<Link
						className={`${
							submitButtonVisible()
								? ''
								: 'opacity-50 pointer-events-none'
						}`}
						replace
						to={{
							pathname: `/user/${userIdFromParams}/records/${id}`,
							state: { from: currentPath },
						}}
					>
						<RegularButton
							customClass={`${button_class}`}
							green
							clickFn={event => {
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
							clickFn={event => history.go(-1)}
							transparent
						>
							取消
						</RegularButton>
						{action === 'edit' && (
							<RegularButton
								clickFn={() => useWarningBoardState[1](true)}
								customClass={`${button_class}  ml-2`}
							>
								刪除
							</RegularButton>
						)}
					</div>
				</div>
			</form>
			{warningBoardState && (
				<WarningBoard
					setState={setWarningBoardState}
					setFns={setFns}
					id={id}
					userIdFromParams={userIdFromParams}
				/>
			)}
		</>
	);
};

export default EditRecordForm;
