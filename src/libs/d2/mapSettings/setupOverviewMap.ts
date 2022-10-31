import D2MapModule from "../D2MapModule";
import urlInfo from "./urlInfo";

/**
 오버뷰(인덱스) 맵 세팅
 */

export default async () => {
	const URL_HEADER = process.env.REACT_APP_MAP_SERVER_URL;
	const { ol } = D2MapModule;

	/**
	 * Overview에 쓸 지도로 default Map List에 있는 것과는 별개임
	 *
	 * 현재 오버뷰에 쓰이는 지도는 일반 세계지도(위성지도처럼 생긴)임. 다른 지도로 바꾸고 싶으면 해당 변수를 수정해 주어야 함.
	 */
	const overViewWorldLayer = new ol.layer.Tile({
		source: new ol.source.XYZ({
			url: urlInfo.map.baseLayer,
			crossOrigin: "Anonymouse",
			maxZoom: 10,
			minZoom: 0,
		}),
		preload: Infinity,
		opacity: 1,
		visible: true,
	});

	window.mapLayerManager.addLayer("overview-map", true, overViewWorldLayer);

	// 오버뷰 생성 (작은 화면으로 전체 보이기 모드)
	window.mapLayerManager.createOverview();
};
