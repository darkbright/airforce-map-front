import { useEffect, useState } from "react";
import D2MapModule from "../../libs/d2/D2MapModule";
import mapSettings from "../../libs/d2/mapSettings";
import Loading from "../loading/Loading";
import MapToolbar from "./MapToolbar";
import hrCops from "../../data/testCoord/hrCops.json";
import { sampleIconStyle } from "../../libs/d2/mapSettings/styles/testStyle";

interface BaseMapProps {
	show?: boolean;
}

const BaseMap = ({ show = true }: BaseMapProps) => {
	const { ol } = D2MapModule;

	const geojsonObject = {
		type: "FeatureCollection",
		features: [
			{
				type: "Feature",
				properties: {
					name: "남양주",
				},
				geometry: {
					type: "Point",
					//coordinates: [14157513.504923772, 4534550.265989796],
					coordinates: new ol.geom.Point(
						ol.proj.fromLonLat([129.0618896484375, 35.19625600786368]),
					),
				},
			},
			{
				type: "Feature",
				properties: {
					name: "이천",
				},
				geometry: {
					type: "Point",
					coordinates: new ol.geom.Point(
						ol.proj.fromLonLat([127.34939575195311, 37.315567502511044]),
					),
					//   "coordinates": [
					// 	127.34939575195311,
					// 	37.315567502511044
					//   ]
				},
			},
		],
	};

	const [loadedData, setLoadedData] = useState(geojsonObject);
	const [loading, setLoading] = useState(false);

	// console.log("original", geojsonObject.features[0].geometry.coordinates);
	// // console.log(new ol.proj.fromLonLat(geojsonObject.features[0].geometry.coordinates));

	const olFeature = new ol.Feature({
		geometry: new ol.geom.MultiPoint([
			ol.proj.fromLonLat([127, 39]),
			ol.proj.fromLonLat([127.342, 37]),
		]),
	});
	const olSource = new ol.source.Vector({});

	const olLayers = new ol.layer.Vector({
		source: olSource,
		zIndex: 500, //(디투맵 내부에서는 지도 0 ~ 99, 투명도 300 ~ 499의 인덱스를 사용한다.)
		feature: olFeature,
		style: sampleIconStyle,
	});

	olSource.addFeature(olFeature);

	useEffect(() => {
		// initializing d2 map module
		setLoading(true);
		mapSettings();
		setLoading(false);
		// setLoadedData(geojsonObject);

		return () => window.map.setTarget(undefined);
	}, []);

	useEffect(() => {
		window.map.addLayer(olLayers);
		console.log(window.map.getLayers().forEach((el: any) => console.log(el.get("name"))));
	}, []);

	return (
		<div style={{ display: show ? "block" : "none" }}>
			{loading && <Loading />}
			<div style={{ width: "100%" }}>
				<MapToolbar />
				<div id="map" className="map" style={{ width: "100%", height: "800px" }} />
				<div id="d2map-coord-bottom" className="d2map-coord-bottom" />
			</div>
		</div>
	);
};

export default BaseMap;
