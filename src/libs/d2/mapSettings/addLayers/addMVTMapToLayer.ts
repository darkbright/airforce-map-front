import D2MapModule from "../../D2MapModule";

// MVT 스타일 맵을 window.mapLayerManager에 추가하는 생성기

interface addMVTMapProps {
	sourceUrl: string; // urlInfo.map.mvtA250K
	minZoom: number;
	maxZoom: number;
	layerClassName: string; // "layer-sub-mvtG25K",
	url: string; // urlInfo.mvtStyle.a250k
	visible?: boolean;
}

export default ({
	sourceUrl,
	minZoom,
	maxZoom,
	layerClassName,
	url,
	visible = true,
}: addMVTMapProps): void => {
	const { ol } = D2MapModule;

	const newLayer = new ol.layer.VectorTile({
		source: new ol.source.VectorTile({
			format: new ol.format.MVT(),
			crossOrigin: "Anonymous",
			url: sourceUrl,
			minZoom,
			maxZoom,
			cacheSize: 32,
		}),
		extent: [13468850, 3748096, 15026241, 5349302],
		visible, // TO_BE_CHECKED $("#layer-toggleBtn-mvtG25K").is(":checked"),
		minZoom,
		maxZoom: maxZoom + 1,
		renderMode: "image",
	});
	window.map.addLayer(newLayer);
	window.mapLayerManager.addMVTLayer(layerClassName, url, false, newLayer);
};
