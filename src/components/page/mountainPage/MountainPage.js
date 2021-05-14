// @flow
import * as React from 'react';
import { connect } from 'react-redux';

import { createSubmitMountainDetailAction } from '../../../store';
import { createActiveMountainAction } from '../../../store';

import MountainCard from './component/MountainCard';

const mapStateToProps = state => ({
	mapState: state.mapState,
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
}: {
	setFns: Object,
	mapState: Object,
}): React.Node => {
	return (
		<main className={`relative mt-20 bg-t-gray-light p-7`}>
			<MountainCard setFns={setFns} mapState={mapState} />
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
