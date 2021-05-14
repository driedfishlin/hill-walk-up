// @flow
import * as React from 'react';
import { connect } from 'react-redux';

import MountainCard from './component/MountainCard';

const mapStateToProps = state => ({
	mapState: state.mapState,
});

const MountainPage = ({ mapState }): React.Node => {
	return (
		<main className={`relative mt-20 bg-t-gray-light p-7`}>
			<MountainCard mapState={mapState} />
		</main>
	);
};

const connectedComponentCreator: Function = connect(mapStateToProps);
const ConnectedComponent: Object = connectedComponentCreator(MountainPage);
export default ConnectedComponent;
// export default MountainPage;
