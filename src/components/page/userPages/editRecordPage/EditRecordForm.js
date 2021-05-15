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

const EditRecordForm = (): React.Node => {
	const [accessState, setAccessState] = useState(false);
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
			<input type="text" className={`${input_class} ${sm_input_class}`} />
			<label className={`${label_class}`}>日期區間</label>
			<input type="date" className={`${input_class} ${sm_input_class}`} />
			<input type="date" className={`${input_class} ${sm_input_class}`} />
			<label className={`${label_class}`}>紀錄</label>
			<hr className={`${hr_class} mt-3`} />
			<textarea
				rows="6"
				placeholder="寫下你的健行記述吧！"
				className={`${input_class} ${record_class}`}
			></textarea>
			<p className={`float-right text-xs`}>500/500</p>
			<p className="clear-both" />
			<hr className={`${hr_class} mt-0.5 mb-7`} />
			<div className={`p-3`}>
				<RegularButton
					customClass={`${button_class}`}
					green
					onClick={event => event.preventDefault()}
				>
					完成
				</RegularButton>
				<div className={`flex`}>
					<RegularButton
						customClass={`${button_class} mr-2`}
						onClick={event => event.preventDefault()}
						transparent
					>
						取消
					</RegularButton>
					<RegularButton
						customClass={`${button_class}`}
						onClick={event => event.preventDefault()}
					>
						刪除
					</RegularButton>
				</div>
			</div>
		</form>
	);
};

export default EditRecordForm;
