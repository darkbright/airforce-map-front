import D2MapModule from "../D2MapModule";
import addBackgroundLayer from "./addLayers/addBackgroundLayer";
import addMVTMapToLayer from "./addLayers/addMVTMapToLayer";
import addWorldMapLayer from "./addLayers/addWorldMapLayer";
import { G25K } from "./addLayers/layers";
import urlInfo from "./urlInfo";

const { ol } = D2MapModule;

// 지도 레이어 설정
// 보여주고자 하는 맵들을 모두 window.mapLayerManager.addLayer에 담아주면 됨.

export default async () => {
	const URL_HEADER = process.env.REACT_APP_MAP_SERVER_URL;

	// overView용 지도

	const overViewWorldLayer = new ol.layer.Tile({
		name: "overViewWorld",
		source: new ol.source.XYZ({
			url: urlInfo.map.baseLayer,
			crossOrigin: "Anonymous",
			maxZoom: 10,
			minZoom: 0,
		}),
		preload: Infinity,
		opacity: 1.0,
		visible: true,
	});

	// FDB 심볼 이미지 경로 설정
	window.mapLayerManager.addMVTSymbolPath("MVTSymbolPath", `${URL_HEADER}/MVTCONF/GSSSymbol/`);
	window.mapLayerManager.addLayer("layer-sub-world", true, overViewWorldLayer);

	console.log(window.map.getLayers());
	// window.map.getLayers().forEach((element, index, array) => console.log(element.getProperties().name))

	// 기본 배경 레이어 COP 추가
	addBackgroundLayer({ visible: true });

	// 세계지도 추가
	addWorldMapLayer({ visible: true });

	// MVT Layer 육도 2.5만
	addMVTMapToLayer({
		sourceUrl: G25K.sourceUrl,
		minZoom: G25K.minZoom,
		maxZoom: G25K.maxZoom,
		layerClassName: G25K.btnName,
		url: G25K.url,
	});

	const openStreetMapLayer = new ol.layer.Tile({
		name: "openStreet",
		source: new ol.source.OSM({
			attributions: "test",
		}),
		visible: true,
	});

	window.map.addLayer(openStreetMapLayer);

	// 오버뷰 생성 (작은 화면으로 전체 보이기 모드)
	window.mapLayerManager.createOverview();
};
