import D2MapModule from "../../D2MapModule";
import urlInfo from "../urlInfo";

// 기본 세계 지도 추가.
// 해당 지도는 기본 레이어 + MVT 모두 추가되는 형태로 layers.ts에서 분리하지 않고 아래 그대로 쓰기로 함.
const { ol } = D2MapModule;

interface WorldMapProps {
	visible: boolean;
}

const boundaryStyle = {
	geometry: new ol.style.Style({
		fill: new ol.style.Fill({
			color: [255, 0, 0, 1, 0],
		}),
		stroke: new ol.style.Stroke({
			color: [200, 200, 200, 0.7],
			width: 2,
		}),
	}),
	label: new ol.style.Style({
		text: new ol.style.Text({
			scale: 1.0,
			fill: new ol.style.Fill({
				color: "#fff",
			}),
			stroke: new ol.style.Stroke({
				color: "#000",
				width: 3,
			}),
		}),
	}),
};

export default ({ visible }: WorldMapProps) => {
	const worldLayer = new ol.layer.VectorTile({
		source: new ol.source.VectorTile({
			format: new ol.format.MVT(),
			url: urlInfo.map.worldLayer,
			minZoom: 1,
			maxZoom: 10,
		}),
		opacity: 0.9,
		visible,
	});
	window.map.addLayer(worldLayer);
	window.mapLayerManager.addLayer("layer-sub-worldmap", false, worldLayer);
	window.mapLayerManager.addMVTLayer(
		"layer-sub-worldmap",
		urlInfo.mvtStyle.worldMap,
		false,
		worldLayer,
	);

	// 세계 경계
	const worldBoundaryLayer = new ol.layer.VectorTile({
		source: new ol.source.VectorTile({
			format: new ol.format.MVT(),
			url: urlInfo.map.worldBoundary,
			minZoom: 0,
			maxZoom: 12,
		}),
		opacity: 1.0,
		visibile: true, // $("#layer-toggleBtn-world-bounary").is(":checked")
		style: (feature: any) => {
			switch (feature.get("layer")) {
				case "label":
					if (boundaryStyle.label.getText() !== undefined) {
						boundaryStyle.label.getText().setText(feature.properties_.Name);
					}
					return boundaryStyle.label;
				case "boundary":
					return boundaryStyle.geometry;
				default:
					return null;
			}
		},
	});
	window.map.addLayer(worldBoundaryLayer);
	window.mapLayerManager.addLayer("layer-sub-world-boundary", false, worldBoundaryLayer);
};
