// @flow
import * as React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import TaiwanPeaksList from '../../../utilities/data/100_peaks_of_taiwan';

import DetailBlock from './DetailBlock';
import MountainCard from '../../../shared/components/UIElement/MountainCard';

const MountainPageCard = ({
	setFns,
	mapState,
}: {
	setFns: Object,
	mapState: Object,
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
		<section className={`relative z-0`}>
			<MountainCard
				name={activeMountainInfo[0]?.name || null}
				elevation={activeMountainInfo[0]?.elevation || null}
				location={activeMountainInfo[0]?.location || null}
				coordinate={activeMountainInfo[0]?.coordinate || null}
				link={'/'}
				anchor={'返回地圖'}
			>
				<DetailBlock
					mountain={activeMountain}
					setFns={setFns}
					mountainText={mapState.mountainDetailText}
				/>
			</MountainCard>
		</section>
	);
};

export default MountainPageCard;
