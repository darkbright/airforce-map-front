import D2MapModule from "../../D2MapModule";

const { ol } = D2MapModule;

export const worldBoundaryStyle = {
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
