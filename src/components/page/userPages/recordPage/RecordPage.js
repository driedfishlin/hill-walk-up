// @flow
import * as React from 'react';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import MountainCard from '../../../shared/components/UIElement/MountainCard';
import LoadingText from '../../../shared/components/UIElement/LoadingText';
import ErrorPage from '../../../shared/components/ErrorPage';

import taiwanPacksInfo from '../../../utilities/data/100_peaks_of_taiwan';

import { faEdit as editIcon } from '@fortawesome/free-regular-svg-icons/faEdit.js';

//SECTION> Component
type propsType = { mapState: Object, userState: Object };
const RecordPage = ({ mapState, userState }: propsType): React.Node => {
	const recordId = useParams().file_id;
	const userIdFromParams = useParams().user_id;
	const { user } = userState;

	if (userIdFromParams !== user.account)
		return (
			<ErrorPage
				statusCode={404}
				text={`你沒有登入喔`}
				link="/user/sign"
				anchor={`請檢查網址，或註冊新會員`}
			/>
		);

	if (!recordId || !userIdFromParams)
		return (
			<ErrorPage
				text={'發生內部錯誤'}
				statusCode={500}
				anchor={'返回地圖'}
				link={'/'}
			/>
		);

	const records = userState.user.tables?.records;
	if (!records)
		return (
			<ErrorPage
				text={'你還沒有建立任何記錄喔'}
				anchor={'返回地圖'}
				link={'/'}
			/>
		);

	// 沒有 router 早於 dispatch 的問題？
	const [activeRecord] = records.filter(item => item.id === recordId);
	if (!activeRecord)
		return (
			<ErrorPage
				text={'找不到該筆紀錄'}
				statusCode={404}
				anchor={'返回地圖'}
				link={'/'}
			/>
		);

	const activeMountain = activeRecord.location;
	const [mountainInfo] = taiwanPacksInfo.filter(
		item => item.name === activeMountain
	);

	return (
		<div>
			<div className={`relative p-7 z-0 lg:max-w-5xl lg:mx-auto`}>
				<h2 className={`h2-style md:mb-14`}>我的紀錄</h2>
				<div className={`md:w-3/5 md:mx-auto lg:relative`}>
					<div
						className={`lg:w-1/2 lg:transform lg:-translate-x-1/5 lg:z-10 lg:relative`}
					>
						<MountainCard
							anchor={'所有紀錄'}
							link={`/user/${userIdFromParams}/records`}
							name={mountainInfo?.name}
							elevation={mountainInfo?.elevation}
							coordinate={mountainInfo?.coordinate}
							location={mountainInfo?.location}
							userState={userState}
						/>
					</div>
					<div
						className={`relative bg-t-gray-dark text-t-gray-light transform -translate-y-5 rounded-b-3xl w-full px-7 py-12 shadow-lg z-0 lg:rounded-t-3xl lg:relative lg:translate-x-14`}
					>
						{true ? (
							<>
								<h4
									className={`text-2xl font-medium tracking-wider mb-3 overflow-ellipsis overflow-hidden`}
								>
									{activeRecord.title}
								</h4>
								<p className={`text-sm mb-7`}>
									<span className={`inline-block`}>
										{activeRecord.startDate}
									</span>{' '}
									-{' '}
									<span className={`inline-block`}>
										{activeRecord.endDate}
									</span>
								</p>
								<p
									className={`mb-5 overflow-ellipsis overflow-hidden`}
								>
									{activeRecord.text}
								</p>
								<Link
									onClick={() =>
										document
											.querySelector('body')
											?.scrollTo({ top: 0 })
									}
									to={{
										pathname: `/user/${userIdFromParams}/records/${recordId}/edit`,
										state: {
											action: `edit`,
										},
									}}
								>
									<FontAwesomeIcon
										className={`text-t-gray-light float-right `}
										icon={editIcon}
									/>
								</Link>
							</>
						) : (
							<div className="text-white flex justify-center mt-5 transform -translate-x-2">
								<LoadingText />
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default RecordPage;
