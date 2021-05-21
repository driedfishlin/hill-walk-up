// @flow
import * as React from 'react';
import { useParams } from 'react-router-dom';
import ErrorPage from '../../../shared/components/ErrorPage';
import UserForm from './UserForm';

type propsType = {
	userState: Object,
	setEditUserData: Function,
};

const UserEditPage = ({
	userState,
	setEditUserData,
}: propsType): React.Node => {
	const { user } = userState;
	const userIdFromParams = useParams().user_id;
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
			<h2 className={`h2-style mb-7`}>註冊會員</h2>
			<UserForm userState={userState} setEditUserData={setEditUserData} />
		</div>
	);
};

export default UserEditPage;
