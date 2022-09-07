import { Popover, Typography } from "@mui/material";
import React, { useCallback, useEffect, useRef, useState } from "react";
import TableHelperText from "../dataGrid/TableHelperText";
import D2MapModule from "../../libs/d2/D2MapModule";
import mapSettings from "../../libs/d2/mapSettings";
import Loading from "../loading/Loading";
import MapToolbar from "./MapToolbar";
import SimpleTableOnMap from "../simpleTable/SimpleTableOnMap";
import { usePrototypesAll } from "../../query/prototype";
import { OpenLayersStandardDataTypes } from "../../types/openlayers";
import { simplifiedSymbolStyle } from "../../libs/d2/mapSettings/styles/simplifiedSymbolStyle";

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

	// 지도위에 뿌릴 좌표 데이터
	const [mapData, setMapData] = useState<OpenLayersStandardDataTypes | null>(null);
	const { data: prototypeData, isFetched } = usePrototypesAll();

	useEffect(() => {
		// initializing d2 map module
		setLoading(true);
		mapSettings();
		setLoading(false);
		// setLoadedData(geojsonObject);

		return () => window.map.setTarget(undefined);
	}, []);

	useEffect(() => {
		if (isFetched) {
			setMapData(prototypeData!);
			const olLayers = new ol.layer.Vector({
				name: "objectLayer",
				source: new ol.source.Vector({
					features: new ol.format.GeoJSON().readFeatures(prototypeData),
				}),
				zIndex: 500, //(디투맵 내부에서는 지도 0 ~ 99, 투명도 300 ~ 499의 인덱스를 사용한다.)
				style: simplifiedSymbolStyle,
			});
			return window.map.addLayer(olLayers);
		}
	}, [isFetched]);

	const popupRef = useRef<HTMLDivElement>(null);
	const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);
	const [selectedId, setSelectedId] = useState("");
	const [mousePosition, setMousePosition] = useState({
		x: 0,
		y: 0,
	});

	const onClickFeatureOnMap = useCallback(
		(event: any) => {
			console.log(mapData);
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
