// @flow
import * as React from 'react';
// import { initMap } from '../../../utilities/map/mapAPI';
import LoadingText from '../../../shared/components/UIElement/LoadingText';

//SECTION> Google Maps API
// initMap();

//SECTION> React Component
const Map = function(): React.Node {
	return (
		<article id="map" className="h-full w-full">
			<div className="flex items-center justify-center w-full h-full  text-gray-400">
				<LoadingText text={'地圖載入中'} />
			</div>
		</article>
	);
};

export default Map;
