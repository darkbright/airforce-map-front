import { Popover, Typography } from "@mui/material";
import React, { useCallback, useEffect, useRef, useState } from "react";
import TableHelperText from "../dataGrid/TableHelperText";
import D2MapModule from "../../libs/d2/D2MapModule";
import mapSettings from "../../libs/d2/mapSettings";
import Loading from "../loading/Loading";
import MapToolbar from "./MapToolbar";
import SimpleTableOnMap from "../simpleTable/SimpleTableOnMap";
import { DMSConverter } from "../../utils/coordConversion";
import { testSymbol } from "../../assets/customSymbols/testSymbol";
import { PrototypeAllType, usePrototypesAll } from "../../query/prototype";
import { OpenLayersStandardDataTypes } from "../../types/openlayers";

interface BaseMapProps {
	show?: boolean;
}

const BaseMap = ({ show = true }: BaseMapProps) => {
	const { ol } = D2MapModule;
	const [loading, setLoading] = useState(false);

	const geojsonObject = {
		type: "FeatureCollection",
		features: [
			{
				type: "Feature",
				properties: {
					name: "15비",
					color: "black",
				},
				geometry: {
					type: "Point",
					coordinates: [14157513.504923772, 4534550.265989796],
					// coordinates: new ol.geom.Point(
					// 	ol.proj.fromLonLat([129.0618896484375, 35.19625600786368]),
					// ),
				},
			},
			{
				type: "Feature",
				properties: {
					name: "19전비",
					color: "green",
				},
				geometry: {
					type: "Point",

					coordinates: [14176469.887938498, 4483184.582982158],
				},
			},
		],
	};

	// 지도위에 뿌릴 좌표 데이터
	const [mapData, setMapData] = useState<OpenLayersStandardDataTypes | null>(null);
	const { data: prototypeData, status } = usePrototypesAll();

	// const convertPrototypeDataToOLData = async () => {
	// 	const converted = await prototypeData.map((proto: PrototypeAllType) => ({
	// 		type: "feature",
	// 		properties: {
	// 			id: proto.testCd,
	// 			name: proto.testNm,
	// 			color: proto.testColor,
	// 		},
	// 		geometry: {
	// 			type: "Point",
	// 			coordinates: DMSConverter({ dms: proto.testCoord, type: "toScreenCoord" }),
	// 		},
	// 	}));
	// 	setMapData({
	// 		type: "FeatureCollection",
	// 		features: converted,
	// 	});
	// };

	// useEffect(() => {
	// 	if (status === "success") {
	// 		convertPrototypeDataToOLData();
	// 		console.log(mapData);
	// 	}
	// }, [status]);

	const pointStyle = function (feature: any) {
		const featureId = feature.get("name");
		const iconColor = feature.get("color");

		const textStyle = new ol.style.Style({
			text: new ol.style.Text({
				text: String(featureId),
				scale: 2,
				fill: new ol.style.Fill({
					color: [0, 0, 128, 1],
				}),
			}),
		});

		const point = new ol.style.Style({
			image: new ol.style.Icon({
				opacity: 1,
				color: iconColor === "green" ? "#7FFF00" : "#000",
				src: "data:image/svg+xml;utf8," + encodeURIComponent(testSymbol),
				scale: 0.5,
				offset: [0, 0],
				anchor: [0.1, 0.4],
			}),
			// image: new ol.style.Circle({
			// 	radius: 8,
			// 	fill: new ol.style.Fill({ color: iconColor }),
			// 	stroke: new ol.style.Stroke({
			// 		color: [0, 0, 0],
			// 		width: 1,
			// 	}),
			// }),
		});

		feature.setStyle([point, textStyle]);
	};

	// console.log("original", geojsonObject.features[0].geometry.coordinates);
	// console.log(new ol.proj.fromLonLat(geojsonObject.features[1].geometry.coordinates));

	const olLayers = new ol.layer.Vector({
		// source: olSource,
		source: new ol.source.Vector({
			features: new ol.format.GeoJSON().readFeatures(geojsonObject),
		}),
		zIndex: 500, //(디투맵 내부에서는 지도 0 ~ 99, 투명도 300 ~ 499의 인덱스를 사용한다.)
		// style: sampleIconStyle,
		style: pointStyle,
	});

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
	}, []);

	const popupRef = useRef<HTMLDivElement>(null);
	const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);
	const [selectedId, setSelectedId] = useState("");

	const onClickFeatureOnMap = useCallback(
		(event: any) => {
			const feature = window.map.forEachFeatureAtPixel(event.pixel, (feature: any) => {
				return feature;
			});
			if (feature) {
				console.log("popupRef", popupRef.current);
				console.log("event", event);
				setAnchorEl(popupRef.current);
				const { name } = feature.getProperties();
				setSelectedId(name);

				// const geometry = feature.getGeometry();
				// console.log(event.coordinate);
				// console.log(geometry);
			}
		},
		[window.map],
	);

	useEffect(() => {
		window.map.on("click", onClickFeatureOnMap);
		return () => window.map.un("click", onClickFeatureOnMap);
	}, [window.map, onClickFeatureOnMap]);

	const id = anchorEl ? "simple-popover" : undefined;

	return (
		<div style={{ display: show ? "block" : "none" }}>
			{loading && <Loading />}
			<div style={{ width: "100%" }}>
				<MapToolbar />
				<div id="map" className="map" style={{ width: "100%", height: "800px" }} />
				<div
					ref={popupRef}
					aria-describedby={id}
					style={{ position: "absolute", top: 500, left: 200 }}
				/>
				<div id="d2map-coord-bottom" className="d2map-coord-bottom" />
				<Popover
					id={id}
					open={Boolean(anchorEl)}
					anchorEl={anchorEl}
					onClose={() => setAnchorEl(null)}
					anchorOrigin={{
						vertical: "top",
						horizontal: "left",
					}}
					transformOrigin={{
						vertical: "center",
						horizontal: "left",
					}}
				>
					<div style={{ padding: 10 }}>
						<Typography variant="h6" sx={{ p: 2 }}>
							{selectedId}
						</Typography>
						<TableHelperText type="percentage" />
						<SimpleTableOnMap />
					</div>
				</Popover>
			</div>
		</div>
	);
};

export default BaseMap;
