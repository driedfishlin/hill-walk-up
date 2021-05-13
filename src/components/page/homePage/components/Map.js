// @flow
import * as React from 'react';
import { initMap } from '../../../utilities/map/mapAPI';

//SECTION> Google Maps API
// initMap();

//SECTION> React Component
const Map = function(): React.Node {
	return (
		<article id="map" className="h-full">
			<div className="flex items-center w-full h-full">
				<p className="flex-grow text-center text-gray-400">
					地圖載入中．．．
				</p>
			</div>
		</article>
	);
};

export default Map;
