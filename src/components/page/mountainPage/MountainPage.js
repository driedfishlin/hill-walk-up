// @flow
import * as React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import { createSubmitMountainDetailAction } from '../../../store';
import { createActiveMountainAction } from '../../../store';

import TaiwanPeaksList from '../../utilities/data/100_peaks_of_taiwan';

import MountainPageCard from './component/MountainPageCard';
import IconArea from './component/IconArea';
import ErrorPage from '../../shared/components/ErrorPage';

const mapStateToProps = state => ({
	mapState: state.mapState,
	userState: state.userState,
});

const mapDispatchToProps = dispatch => ({
	setFns: {
		setMountainDetail: command =>
			dispatch(createSubmitMountainDetailAction(command)),
		setActiveMountain: command =>
			dispatch(createActiveMountainAction(command)),
	},
});

const MountainPage = ({
	setFns,
	mapState,
	userState,
}: {
	setFns: Object,
	mapState: Object,
	userState: Object,
}): React.Node => {
	const params = useParams();
	const activeMountain: string | null | void = params.mountain;

	const activeMountainInfo = TaiwanPeaksList.filter(item => {
		return item.name === activeMountain;
	});
	useEffect(() => {
		setFns.setActiveMountain(activeMountain);
	}, [setFns, activeMountain]);

	if (activeMountainInfo[0])
		return (
			<main className={`relative bg-t-gray-light p-7`}>
				<MountainPageCard
					setFns={setFns}
					mapState={mapState}
					activeMountainInfo={activeMountainInfo[0]}
				/>
				{userState.isLogin ? (
					<IconArea
						setActiveMountain={setFns.setActiveMountain}
						activeMountainInfo={activeMountainInfo[0]}
					/>
				) : null}
			</main>
		);
	return (
		<ErrorPage
			text={'找不到對應的結果！'}
			statusCode={404}
			anchor={`去逛逛地圖`}
			link="/"
		/>
	);
};

const connectedComponentCreator: Function = connect(
	mapStateToProps,
	mapDispatchToProps
);
const ConnectedComponent: Object = connectedComponentCreator(MountainPage);
export default ConnectedComponent;
// export default MountainPage;
