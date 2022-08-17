import { MapLayerListType } from "../../../../data/constants/mapLayerList";
import D2MapModule from "../../D2MapModule";

const { ol } = D2MapModule;

interface AddMapLayerType extends MapLayerListType {
	addToMap: boolean;
}

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
		});
		if (addToMap) {
			window.map.addLayer(createdTileLayer);
			window.mapLayerManager.addLayer(layer.name, true, createdTileLayer);
		} else {
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
		});
		if (addToMap) {
			window.map.addLayer(createdMVTLayer);
			window.mapLayerManager.addMVTLayer(layer.name, layer.mvtUrl, false, createdMVTLayer);
		} else {
			return createdMVTLayer;
		}
	}
};
