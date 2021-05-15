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
	const activeMountain: string = params.mountain;
	// console.log(activeMountain);
	const activeMountainInfo = TaiwanPeaksList.filter(item => {
		return item.name === activeMountain;
	});
	useEffect(() => {
		setFns.setActiveMountain(activeMountain);
	}, [setFns, activeMountain]);

	//TODO> 要做網址的錯誤處理(非符合條件的網址)
	return (
		<main className={`relative bg-t-gray-light p-7`}>
			<MountainPageCard
				setFns={setFns}
				mapState={mapState}
				activeMountainInfo={activeMountainInfo[0]}
			/>
			{userState.isLogin ? (
				<IconArea activeMountainInfo={activeMountainInfo[0]} />
			) : null}
		</main>
	);
};

const connectedComponentCreator: Function = connect(
	mapStateToProps,
	mapDispatchToProps
);
const ConnectedComponent: Object = connectedComponentCreator(MountainPage);
export default ConnectedComponent;
// export default MountainPage;
