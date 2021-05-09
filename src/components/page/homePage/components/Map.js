/* eslint-disable no-undef */
// ↑ don't check google object before promise resolved
// @flow
// ↑ Avoid flow checking '@googlemaps/js-api-loader' by creating a library definition.
import * as React from 'react';
// import { Loader } from '@googlemaps/js-api-loader';
// import KEY from '../../../utilities/private/google_key';

//SECTION> Google Maps API

// const loader = new Loader({
// 	apiKey: KEY,
// 	version: 'weekly',
// 	region: 'TW',
// });

// // 視覺上台灣島的中心點
// const centerPoint = { lat: 23.80546, lng: 120.98001 };

// 沒有錯誤處理？
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
// 	const googleMarker = new window.google.maps.Marker({
// 		position: { lat: 23.46999, lng: 120.95726 }, // 玉山三角點
// 		map: googleMap,
// 		// 可建自訂屬性用於辨識，但於 UI 上無法取得
// 	});

// 	googleMarker.addListener('click', event => {
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
// 	});

/* 點擊座標
    1. 移動地圖至適合位置 => setCenter() 但是是瞬間移動 / panTo() 可以滑順移動
    2. 縮放地圖 => setZoom() 帶有動畫效果，可覆蓋 setCenter() 的瞬間移動，但在設定與當前相同的 zoom 值時無效
    3. 打開訊息窗口 => 居於彈性使用自訂，並且於 event 取得座標經緯度進資料庫查詢
    4. 取得點擊對象 => 可以藉由增加物件屬性給予辨識性（無法藉由 event 取得）
    */
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
