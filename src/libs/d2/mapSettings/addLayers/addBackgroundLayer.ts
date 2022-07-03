import D2MapModule from "../../D2MapModule";
import urlInfo from "../urlInfo";

interface BackgroundProps {
	visible: boolean;
}

// 기본 백그라운드 지도 COP 추가.
// 해당 COP는 기본 레이어 + MVT 모두 추가되는 형태로 layers.ts에서 분리하지 않고 아래 그대로 쓰기로 함.

export default ({ visible }: BackgroundProps): void => {
	const { ol } = D2MapModule;

	const backgroundLayer = new ol.layer.VectorTile({
		source: new ol.source.VectorTile({
			format: new ol.format.MVT(),
			url: urlInfo.map.backgroundLayer,
			minZoom: 1,
			maxZoom: 10,
		}),
		opacity: 0.4,
		visible,
	});

	window.map.addLayer(backgroundLayer);
	window.mapLayerManager.addLayer("layer-sub-background", false, backgroundLayer);
	window.mapLayerManager.addMVTLayer(
		"layer-sub-background",
		urlInfo.mvtStyle.background,
		false,
		backgroundLayer,
	);
};
