// const onMapMarkClick = event => {
// 	// 取得座標位置並計算偏移量用於 UI 動畫定位
// 	const position = event.latLng.toJSON();
// 	const fineTuningPosition = { ...event.latLng.toJSON() };
// 	fineTuningPosition.lat = +(fineTuningPosition.lat + 0.06).toFixed(5);
// 	// 縮放比例大時不進行預先置中
// 	if (googleMap.getZoom() >= 11) {
// 		googleMap.setZoom(12);
// 		googleMap.panTo(fineTuningPosition);
// 		return;
// 	}
// 	// 因為 panTo 方法不接受遠距離移動動畫，因此預先執行座標置中
// 	googleMap.panTo(position);
// 	setTimeout(() => {
// 		googleMap.setZoom(12);
// 		googleMap.panTo(fineTuningPosition);
// 	}, 500);
// };

// const markIcon = {
// 	path:
// 		'M634.92 462.7l-288-448C341.03 5.54 330.89 0 320 0s-21.03 5.54-26.92 14.7l-288 448a32.001 32.001 0 0 0-1.17 32.64A32.004 32.004 0 0 0 32 512h576c11.71 0 22.48-6.39 28.09-16.67a31.983 31.983 0 0 0-1.17-32.63zM320 91.18L405.39 224H320l-64 64-38.06-38.06L320 91.18z',
// 	fillColor: '#0a6135',
// 	fillOpacity: 1,
// 	scale: 0.03,
// 	anchor: new google.maps.Point(15, 30),
// };

// // index + 1 == item.id
// const marksList = TaiwanPeaksList.map(item => {
// 	return new window.google.maps.Marker({
// 		position: {
// 			lat: item.coordinate.lat,
// 			lng: item.coordinate.lng,
// 		},
// 		map: googleMap,
// 		icon: markIcon,
// 		// 可建自訂屬性用於辨識，但於 UI 上無法取得
// 	});
// });

// marksList.forEach(item => item.addListener('click', onMapMarkClick));
