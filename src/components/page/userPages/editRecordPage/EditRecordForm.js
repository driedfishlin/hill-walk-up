// @flow
import * as React from 'react';
import { useState } from 'react';
import SwitchButton from '../../../shared/components/UIElement/SwitchButton';
import RegularButton from '../../../shared/components/UIElement/RegularButton';

const label_class = `block text-sm mb-2 mt-5 font-medium`;
const input_class = `w-full focus:outline-none border-none`;
const sm_input_class = `focus:ring-t-green rounded-lg my-1`;
const record_class = `bg-transparent px-0 focus:ring-0 focus:border-0 py-2`;
const hr_class = `border-t-gray-dark`;
const button_class = `my-2`;

const EditRecordForm = ({
	prevPageAction,
	setFns,
	mountainNameFromLink,
}: {
	prevPageAction: string | void,
	setFns: Object,
	mountainNameFromLink: string,
}): React.Node => {
	const [accessState, setAccessState] = useState(false);
	const { setNewRecord } = setFns;

	const [titleState, setTitleState] = useState('');
	const [startDateState, setStartDateState] = useState('');
	const [endDateState, setEndDateState] = useState('');
	const [textState, setTextState] = useState('');

	return (
		<form
			className={`p-3 text-t-gray-dark`}
			onSubmit={event => event.preventDefault()}
		>
			<div className={`flex justify-center mt-8`}>
				<SwitchButton
					wrong={'再接再厲'}
					right={`成功攀登`}
					accessState={[accessState, setAccessState]}
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
				type="date"
				className={`${input_class} ${sm_input_class}`}
				value={startDateState}
				onChange={event => setStartDateState(event.target.value)}
			/>
			<input
				type="date"
				className={`${input_class} ${sm_input_class}`}
				value={endDateState}
				onChange={event => setEndDateState(event.target.value)}
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
				<RegularButton
					customClass={`${button_class}`}
					green
					clickFn={event => {
						//FIXME> 未實作資料驗證
						const data = {
							title: titleState,
							startDate: startDateState,
							endDate: endDateState,
							finish: accessState,
							//FIXME> id 未實作
							text: textState,
							location: mountainNameFromLink,
						};
						setNewRecord(data);
					}}
				>
					完成送出
				</RegularButton>
				<div className={`flex`}>
					<RegularButton
						customClass={`${button_class}`}
						onClick={event => event.preventDefault()}
						transparent
					>
						取消
					</RegularButton>
					{prevPageAction === 'edit' && (
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
