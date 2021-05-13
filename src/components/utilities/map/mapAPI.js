// @flow
import { Loader } from '@googlemaps/js-api-loader';
import KEY from '../private/google_key';

/* google map 官方 api：
	    1. 瞬間移動移動地圖 => setCenter()
		2. 滑順移動地圖 => panTo() （超過螢幕範圍無效）
	    2. 縮放地圖 => setZoom() 帶有動畫效果，可覆蓋 setCenter() 的瞬間移動
		   但在設定與當前相同的 zoom 值時無效
*/

export const GOOGLE_MAP = { map: null };
let markIcon = null;

const loader = new Loader({
	apiKey: KEY,
	version: 'weekly',
	region: 'TW',
});

const setIcon = () => {
	markIcon = {
		path:
			'M634.92 462.7l-288-448C341.03 5.54 330.89 0 320 0s-21.03 5.54-26.92 14.7l-288 448a32.001 32.001 0 0 0-1.17 32.64A32.004 32.004 0 0 0 32 512h576c11.71 0 22.48-6.39 28.09-16.67a31.983 31.983 0 0 0-1.17-32.63zM320 91.18L405.39 224H320l-64 64-38.06-38.06L320 91.18z',
		fillColor: '#0a6135',
		fillOpacity: 1,
		scale: 0.03,
		anchor: new window.google.maps.Point(15, 30),
	};
};

// create a new map
export const initMap = () => {
	// 沒有錯誤處理？
	loader.load().then(() => {
		// 視覺上台灣島的中心點
		const centerPoint = { lat: 23.80546, lng: 120.98001 };
		// 物件實體是否可存 Redux？ 考慮建立過程包成 hook？
		GOOGLE_MAP.map = new window.google.maps.Map(
			document.getElementById('map'),
			{
				mapId: 'ab9ecaef5e591b48',
				center: centerPoint,
				zoom: 8,
				minZoom: 8,
				maxZoom: 13,
				streetViewControl: false,
				mapTypeControl: false,
				fullscreenControl: false,
			}
		);

		setIcon();
	});
};

export const zoomMap = (
	coordinate: { lat: number, lng: number },
	tuningPosition?: boolean // 決定是否加入偏移
): void => {
	if (GOOGLE_MAP.map === null) return console.log('無法取得地圖資料');
	// 取得座標位置並計算偏移量用於 UI 動畫定位
	const findTuningCoordinate = { ...coordinate };
	// watch out for floating-point number
	findTuningCoordinate.lat = +(findTuningCoordinate.lat + 0.05).toFixed(5);
	// 縮放比例大時不進行預先置中
	if (GOOGLE_MAP.map.getZoom() >= 11) {
		GOOGLE_MAP.map.setZoom(12);
		GOOGLE_MAP.map.panTo(findTuningCoordinate);
		return;
	}
	// 因為 panTo 方法不接受遠距離移動動畫，因此預先執行座標置中
	if (GOOGLE_MAP.map !== null) {
		GOOGLE_MAP.map.panTo(coordinate);
		setTimeout(() => {
			GOOGLE_MAP.map.setZoom(12);
			if (tuningPosition) GOOGLE_MAP.map.panTo(findTuningCoordinate);
		}, 500);
		return;
	}
	console.log('座標計算異常');
};

const onMapMarkClick = event => {
	if (GOOGLE_MAP.map === null) return console.log('無法取得地圖資料');
	console.log(event.domEvent.path[1].ariaLabel);
	const position = event.latLng.toJSON();
	zoomMap(position, true);
	// get mark position of screen

	// 時間須以 map zoom 做優化（1200）
	setTimeout(() => {
		const markDOMPositionInfo = event.domEvent.target.getBoundingClientRect();
		const markPosition = {
			x: markDOMPositionInfo.x,
			y: markDOMPositionInfo.y,
		};
		console.log(markPosition);
		// const markDOMStyle = window.getComputedStyle(event.domEvent.target);
		// console.log(markDOMStyle.pageX);
		// console.log(event.domEvent.target);
	}, 1500);
};

// const marksList = []

type createMapMarkTypes = {
	name: string,
	coordinate: { lat: number, lng: number },
	id: number,
	level: string,
	elevation: number,
	location: string,
	park: string,
};

// 參數僅接受 100_peaks_of_taiwan.js 之格式
//FIXME> 如果畫面上已經有該地點，不建立新地標
export const createMapMark = (item: createMapMarkTypes): HTMLElement | void => {
	if (GOOGLE_MAP.map === null) return console.log('無法取得地圖資料');
	if (setIcon === null) return console.log('圖標設定錯誤');
	const mark = new window.google.maps.Marker({
		position: {
			lat: item.coordinate.lat,
			lng: item.coordinate.lng,
		},
		map: GOOGLE_MAP.map,
		icon: markIcon,
		title: item.name,
	});
	mark.addListener('click', onMapMarkClick);
	return mark;
};
