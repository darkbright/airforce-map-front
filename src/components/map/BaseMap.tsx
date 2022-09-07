import { Popover, Typography } from "@mui/material";
import React, { useCallback, useEffect, useRef, useState } from "react";
import TableHelperText from "../dataGrid/TableHelperText";
import D2MapModule from "../../libs/d2/D2MapModule";
import mapSettings from "../../libs/d2/mapSettings";
import Loading from "../loading/Loading";
import MapToolbar from "./MapToolbar";
import SimpleTableOnMap from "../simpleTable/SimpleTableOnMap";
import { testSymbol } from "../../assets/customSymbols/testSymbol";
import { PrototypeAllType, usePrototypesAll } from "../../query/prototype";
import { OpenLayersStandardDataTypes } from "../../types/openlayers";

interface BaseMapProps {
	show?: boolean;
}

/**
 * 기본이 되는 맵 객체를 생성하고, 기본 값들을 보여주는 Component
 *
 * 어플리케이션이 로드되고, Map객체를 로드하는 페이지에 진입 시 Map 객체가 생성됨.
 * 경우에 따라 어떤 페이지에서는 Map을 보여주고 싶지 않은 경우도 있을 수 있음(예: 테이블만 있는 페이지 등) 그런 경우 맵 객체를 지우고 새로 생성하면, 유저가
 * 설정해둔 값이 모두 날라가게 되고, 새롭게 객체를 형성하는데 비용이 발생하므로 보여주고 싶지 않은 페이지에서는 보여주기를 false로 설정하여 Map 객체는 존재하되,
 * 단순히 보이지만 않는 형태로 사용할 수 있음.
 * @param param0
 * @returns {JSX.Element} React Component
 */

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
		setMapData(prototypeData);
		window.map.addLayer(olLayers);
	}, [prototypeData]);

	const popupRef = useRef<HTMLDivElement>(null);
	const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);
	const [selectedId, setSelectedId] = useState("");
	const [mousePosition, setMousePosition] = useState({
		x: 0,
		y: 0,
	});

	const onClickFeatureOnMap = useCallback(
		(event: any) => {
			const feature = window.map.forEachFeatureAtPixel(
				event.pixel,
				(feature: any) => {
					return feature;
				},
				{
					// 마우스 클릭 시 좌표의 범위를 넓혀주어 대충 클릭해도 팝업이 뜰 수 있도록 조치하는 항목임.
					hitTolerence: 5,
				},
			);
			if (feature) {
				setMousePosition({
					x: event.pixel[0],
					y: event.pixel[1],
				});
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
	{
		/*
	useEffect(() => {
		window.map.on("click", onClickFeatureOnMap);
		return () => window.map.un("click", onClickFeatureOnMap);
	}, [window.map, onClickFeatureOnMap]);
*/
	}
	const id = anchorEl ? "map-popover" : undefined;

	return (
		<div style={{ display: show ? "block" : "none" }}>
			{loading && <Loading />}
			<div style={{ width: "100%" }}>
				<MapToolbar />
				<div
					id="map"
					className="map"
					style={{ width: "100%", height: "800px", position: "relative" }}
				>
					<div
						ref={popupRef}
						aria-describedby={id}
						style={{ position: "absolute", left: mousePosition.x, bottom: mousePosition.y }}
					/>
				</div>
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
