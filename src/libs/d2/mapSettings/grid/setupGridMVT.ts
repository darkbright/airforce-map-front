import D2MapModule from "../../D2MapModule";
import urlInfo from "../urlInfo";
import { GridStyle } from "./gridStyle";

interface FeatureValues {
	properties_: {
		Label: string;
		layer: "UTM_20000_Label";
		name: string;
	};
	type_: "Point" | "Polygon" | "LineString";
}

interface GridGeneratorValues {
	urlInfo: string;
	nametag: string;
	sourceMaxZoom: number;
	maxZoom?: number;
	minZoom?: number;
}

const { ol } = D2MapModule;

export default async () => {
	//GARS Grid
	gridGenerator({
		urlInfo: urlInfo.grid.gars,
		nametag: "grid-sub-gars",
		sourceMaxZoom: 13,
	});

	//UTM Grid20km
	gridGenerator({
		urlInfo: urlInfo.grid.utm20,
		nametag: "grid-sub-utm",
		sourceMaxZoom: 12,
		maxZoom: 17,
		minZoom: 1,
	});
	//UTM Grid10Km
	gridGenerator({
		urlInfo: urlInfo.grid.utm10,
		nametag: "grid-sub-utm-10",
		sourceMaxZoom: 12,
		maxZoom: 17,
		minZoom: 1,
	});
	// UTM Grid5km
	gridGenerator({
		urlInfo: urlInfo.grid.utm5,
		nametag: "grid-sub-utm-5",
		sourceMaxZoom: 14,
		maxZoom: 17,
		minZoom: 1,
	});
	//UTM Grid1Km
	gridGenerator({
		urlInfo: urlInfo.grid.utm1,
		nametag: "grid-sub-utm-1",
		sourceMaxZoom: 14,
		maxZoom: 17,
		minZoom: 1,
	});

	//Geographic Grid
	gridGenerator({
		urlInfo: urlInfo.grid.geographic,
		nametag: "grid-sub-geographic",
		sourceMaxZoom: 12,
	});

	//GeoRef Grid
	gridGenerator({
		urlInfo: urlInfo.grid.georef,
		nametag: "grid-sub-georef",
		sourceMaxZoom: 12,
	});

	//MGRS Grid 20km
	gridGenerator({
		urlInfo: urlInfo.grid.mgrs20,
		sourceMaxZoom: 12,
		minZoom: 1,
		maxZoom: 17,
		nametag: "grid-sub-mgrs",
	});

	//MGRS Grid 10km
	gridGenerator({
		urlInfo: urlInfo.grid.mgrs10,
		sourceMaxZoom: 12,
		minZoom: 1,
		maxZoom: 17,
		nametag: "grid-sub-mgrs-10",
	});

	//MGRS Grid 5km
	gridGenerator({
		urlInfo: urlInfo.grid.mgrs5,
		sourceMaxZoom: 14,
		minZoom: 1,
		maxZoom: 17,
		nametag: "grid-sub-mgrs-5",
	});

	//MGRS Grid 1km
	gridGenerator({
		urlInfo: urlInfo.grid.mgrs1,
		sourceMaxZoom: 14,
		minZoom: 1,
		maxZoom: 17,
		nametag: "grid-sub-mgrs-1",
	});
};

const gridGenerator = ({
	urlInfo,
	nametag,
	sourceMaxZoom,
	maxZoom,
	minZoom,
}: GridGeneratorValues) => {
	const grid = new ol.layer.VectorTile({
		source: new ol.source.VectorTile({
			format: new ol.format.MVT(),
			url: urlInfo,
			minZoom: 1,
			maxZoom: sourceMaxZoom,
		}),
		visible: false,
		minZoom,
		maxZoom,
	});
	grid.styleProperty = new GridStyle();
	grid.setStyle((feature: FeatureValues) => {
		const { type_: type, properties_: properties } = feature;
		const featureProperty = properties;
		if (
			grid.styleProperty.getLabelVisible() &&
			type === "Point" &&
			properties.Label !== undefined
		) {
			if (properties.layer === "UTM_20000_Label" && properties.name !== undefined) {
				grid.styleProperty.label.getText().setText(featureProperty.name);
				return grid.styleProperty.label;
			}

			grid.styleProperty.label.getText().setText(featureProperty.Label);
			return grid.styleProperty.label;
		}
		if (type === "Polygon" || type === "LineString") {
			return grid.styleProperty.grid;
		}
	});
	window.map.addLayer(grid);
	window.mapLayerManager.addLayer(nametag, false, grid);
};
