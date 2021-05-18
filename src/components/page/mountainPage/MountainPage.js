// @flow
import * as React from 'react';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import { createSubmitMountainDetailAction } from '../../../store';
import { createActiveMountainAction } from '../../../store';
import { createAddFavoriteMountainAction } from '../../../store';
import { createRemoveFavoriteMountainAction } from '../../../store';

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
		setAddFavoriteMountain: command =>
			dispatch(createAddFavoriteMountainAction(command)),
		setRemoveFavoriteMountain: command =>
			dispatch(createRemoveFavoriteMountainAction(command)),
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

	// 判斷 favorites 中是否有該項目，決定 icon 的顏色
	const favorites = userState.user?.tables?.favorites;
	const [isFavorite, setIsFavorite] = useState(false);
	useEffect(() => {
		if (favorites && activeMountain) {
			setIsFavorite(favorites.includes(activeMountain));
		}
	}, [activeMountain, favorites]);

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
						isFavorite={isFavorite}
						setFns={setFns}
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
