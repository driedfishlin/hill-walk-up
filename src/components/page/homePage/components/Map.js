/* eslint-disable no-undef */
// ↑ don't check google object before promise resolved
// @!flow
// ↑ Avoid flow checking '@googlemaps/js-api-loader' by creating a library definition.
import * as React from 'react';
import { Loader } from '@googlemaps/js-api-loader';

import KEY from '../../../utilities/private/google_key';
import TaiwanPeaksList from '../../../utilities/data/100_peaks_of_taiwan';

// import markIcon from '../../../../image/mountain-solid.svg';

//SECTION> Google Maps API

// const loader = new Loader({
// 	apiKey: KEY,
// 	version: 'weekly',
// 	region: 'TW',
// });

// // 視覺上台灣島的中心點
// const centerPoint = { lat: 23.80546, lng: 120.98001 };

// // 沒有錯誤處理？
// loader.load().then(() => {
// 	// 物件實體是否可存 Redux？ 考慮建立過程包成 hook？
// 	// 操作需透過官方 API
// 	const googleMap = new window.google.maps.Map(
// 		document.getElementById('map'),
// 		{
// 			mapId: 'ab9ecaef5e591b48',
// 			center: centerPoint,
// 			zoom: 8,
// 			minZoom: 8,
// 			maxZoom: 12,
// 			streetViewControl: false,
// 			mapTypeControl: false,
// 			fullscreenControl: false,
// 		}
// 	);

// 	const onMapMarkClick = event => {
// 		// 取得座標位置並計算偏移量用於 UI 動畫定位
// 		const position = event.latLng.toJSON();
// 		const fineTuningPosition = { ...event.latLng.toJSON() };
// 		fineTuningPosition.lat = +(fineTuningPosition.lat + 0.06).toFixed(5);
// 		// 縮放比例大時不進行預先置中
// 		if (googleMap.getZoom() >= 11) {
// 			googleMap.setZoom(12);
// 			googleMap.panTo(fineTuningPosition);
// 			return;
// 		}
// 		// 因為 panTo 方法不接受遠距離移動動畫，因此預先執行座標置中
// 		googleMap.panTo(position);
// 		setTimeout(() => {
// 			googleMap.setZoom(12);
// 			googleMap.panTo(fineTuningPosition);
// 		}, 500);
// 	};

// 	const markIcon = {
// 		path:
// 			'M634.92 462.7l-288-448C341.03 5.54 330.89 0 320 0s-21.03 5.54-26.92 14.7l-288 448a32.001 32.001 0 0 0-1.17 32.64A32.004 32.004 0 0 0 32 512h576c11.71 0 22.48-6.39 28.09-16.67a31.983 31.983 0 0 0-1.17-32.63zM320 91.18L405.39 224H320l-64 64-38.06-38.06L320 91.18z',
// 		fillColor: '#0a6135',
// 		fillOpacity: 1,
// 		scale: 0.03,
// 		anchor: new google.maps.Point(15, 30),
// 	};

// 	// index + 1 == item.id
// 	const marksList = TaiwanPeaksList.map(item => {
// 		return new window.google.maps.Marker({
// 			position: {
// 				lat: item.coordinate.lat,
// 				lng: item.coordinate.lng,
// 			},
// 			map: googleMap,
// 			icon: markIcon,
// 			// 可建自訂屬性用於辨識，但於 UI 上無法取得
// 		});
// 	});

// 	marksList.forEach(item => item.addListener('click', onMapMarkClick));

// 	/* 點擊座標
// 	    1. 移動地圖至適合位置 => setCenter() 但是是瞬間移動 / panTo() 可以滑順移動
// 	    2. 縮放地圖 => setZoom() 帶有動畫效果，可覆蓋 setCenter() 的瞬間移動，但在設定與當前相同的 zoom 值時無效
// 	    3. 打開訊息窗口 => 居於彈性使用自訂，並且於 event 取得座標經緯度進資料庫查詢
// 	    4. 取得點擊對象 => 可以藉由增加物件屬性給予辨識性（無法藉由 event 取得）
// 	    */
// });

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
