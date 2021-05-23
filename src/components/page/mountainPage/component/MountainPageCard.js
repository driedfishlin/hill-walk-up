// @flow
import * as React from 'react';

import DetailBlock from './DetailBlock';
import MountainCard from '../../../shared/components/UIElement/MountainCard';

const MountainPageCard = ({
	setFns,
	mapState,
	activeMountainInfo,
	userState,
}: {
	setFns: Object,
	mapState: Object,
	activeMountainInfo: Object,
	userState: Object,
}): React.Node => {
	return (
		<section className={`relative z-0`}>
			<MountainCard
				name={activeMountainInfo.name || null}
				elevation={activeMountainInfo.elevation || null}
				location={activeMountainInfo.location || null}
				coordinate={activeMountainInfo.coordinate || null}
				link={'/'}
				anchor={'返回地圖'}
				userState={userState}
			>
				<DetailBlock
					mountain={activeMountainInfo.name}
					setFns={setFns}
					mountainText={mapState.mountainDetailText}
				/>
			</MountainCard>
		</section>
	);
};

export default MountainPageCard;
