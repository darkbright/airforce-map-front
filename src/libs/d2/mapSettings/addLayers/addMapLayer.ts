import { MapLayerListType } from "../../../../data/constants/mapLayerList";
import D2MapModule from "../../D2MapModule";
import { worldBoundaryStyle } from "../styles/boundaryMapStyle";

const { ol } = D2MapModule;

interface AddMapLayerType extends MapLayerListType {
	addToMap: boolean;
}

/**
 * 개별 맵들을 window.map.layer 배열에 쌓고 보여주는 함수.
 * 
 * addToMap은 최초 window.map 객체 생성 시(setupMap.ts) default로 맵을 깔아 주는 경우, window.map.addLayer의 행위를 하지 않아도 알아서 로딩되므로 addToMap을 false로 하면 됨.
 * 
 * 직접적으로 user에 의해 맵 불러오기 등을 핸들링하고자 하는 경우 addToMap을 true로 할 것.
 * 
 * 유저가 핸들링하는 맵 추가/삭제 설정 변경 등은 modules/map/MapListItemOnDrawer에서 관리됨.
 * 
 * layer 객체는 MapLayerListType이 정의된 data/constants/mapLayerList에 배열 형태로 정리되어 있으며,
 * 신규 맵을 추가하고자 하는 경우, 해당 Map의 Property를 확인하여 배열에 추가하면 알아서 모든 맵 불러오기 및 삭제 등등이 구현됨.

 * @returns addToMap이 true인 경우 map에 산규 레이어를 등록해주고, false인 경우 layer 객체만 구성함.
 */

export const addMapLayer = ({ addToMap, ...layer }: AddMapLayerType) => {
	if (layer.mapType === "XYZ") {
		const createdTileLayer = new ol.layer.Tile({
			source: new ol.source.XYZ({
				url: layer.url,
				crossOrigin: "Anonymous",
				minZoom: layer.minZoom,
				maxZoom: layer.maxZoom,
			}),
			name: layer.name,
			opacity: 1,
			visible: true,
			preload: layer.default ? "Infinity" : 0,
			zIndex: 99,
		});
		if (addToMap) {
			window.map.addLayer(createdTileLayer);
			window.mapLayerManager.addLayer(layer.name, true, createdTileLayer);
		} else {
			window.mapLayerManager.addLayer(layer.name, true, createdTileLayer);
			return createdTileLayer;
		}
	}
	if (layer.mapType === "MVT") {
		const createdMVTLayer = new ol.layer.VectorTile({
			source: new ol.source.VectorTile({
				format: new ol.format.MVT(),
				url: layer.url,
				minZoom: layer.minZoom,
				maxZoom: layer.maxZoom,
				cacheSize: 32,
			}),
			name: layer.name,
			preload: layer.default ? "Infinity" : 0,
			opacity: 1,
			visible: true,
			// extent: layer.extent || ?
			minZoom: layer.minZoom,
			maxZoom: (layer.maxZoom as number) + 1,
			renderMode: "image",
			zIndex: 99,
		});

		if (addToMap) {
			window.map.addLayer(createdMVTLayer);
			window.mapLayerManager.addLayer(layer.name, false, createdMVTLayer);
			window.mapLayerManager.addMVTLayer(layer.name, layer.mvtUrl, false, createdMVTLayer);
		} else {
			window.mapLayerManager.addLayer(layer.name, false, createdMVTLayer);
			window.mapLayerManager.addMVTLayer(layer.name, layer.mvtUrl, false, createdMVTLayer);
			return createdMVTLayer;
		}
	}
	if (layer.mapType === "worldBoundary") {
		const createdBoundaryLayer = new ol.layer.VectorTile({
			source: new ol.source.VectorTile({
				format: new ol.format.MVT(),
				url: layer.url,
				minZoom: layer.minZoom,
				maxZoom: layer.maxZoom,
			}),
			name: layer.name,
			opacity: 1,
			visible: true,
			// extent: layer.extent || ?
			zIndex: 99,
			style: (feature: any) => {
				switch (feature.get("layer")) {
					case "label":
						if (worldBoundaryStyle.label.getText() !== undefined) {
							worldBoundaryStyle.label.getText().setText(feature.properties_.Name);
						}
						return worldBoundaryStyle.label;
					case "boundary":
						return worldBoundaryStyle.geometry;
					default:
						return null;
				}
			},
		});
		if (addToMap) {
			window.map.addLayer(createdBoundaryLayer);
			window.mapLayerManager.addLayer(layer.name, false, createdBoundaryLayer);
		} else {
			return createdBoundaryLayer;
		}
	}
};
