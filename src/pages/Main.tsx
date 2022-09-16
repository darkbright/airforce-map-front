import { Divider, TableRow, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import TableHelperText from "../components/dataGrid/TableHelperText";
import MapDataTableWrapper from "../components/map/MapDataTableWrapper";
import SimpleTable from "../components/dataGrid/simpleTable/SimpleTable";
import D2MapModule from "../libs/d2/D2MapModule";
import { simplifiedSymbolStyle } from "../libs/d2/mapSettings/styles/simplifiedSymbolStyle";
import { PrototypeByIdType, usePrototypeById, usePrototypesAll } from "../query/prototype";
import { OpenLayersStandardFeatureTypes } from "../types/openlayers";
import BaseBlockTitleBox from "../components/box/textBox/BaseBlockTitleBox";
import {
	SimpleTableCircleCellByColor,
	SimpleTableCellText,
} from "../components/dataGrid/simpleTable/SimpleTableCellDisplay";
import SelectBox from "../components/form/SelectBox";

/**
 * 메인 페이지 (프로토타입 샘플)
 * @returns React.Element(Page)
 */
const Main = () => {
	const { ol, CoordManager } = D2MapModule;
	const [openTable, setOpenTable] = useState(true);

	// 맵에 뿌려즐 전체 데이터 (DB에서 받은 데이터 그대로 보존)
	const [mapData, setMapData] = useState<OpenLayersStandardFeatureTypes[] | null | undefined>(null);
	const { data: prototypeData, isFetched: isPrototypeFetched } = usePrototypesAll();

	// 셀렉트박스를 이용하여 뿌려줄 데이터( mapData를 변형하기 위한 용도)
	const [selectedMapData, setSelectedMapData] = useState(mapData);

	useEffect(() => {
		if (isPrototypeFetched) {
			setMapData(prototypeData && prototypeData.features!);
			setSelectedMapData(prototypeData && prototypeData.features!);
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
	}, [isPrototypeFetched]);

	// 개별 데이터 prototypeById
	const [selectedId, setSelectedId] = useState("");
	const [selectedName, setSelectedName] = useState("");
	const [prototypeIdData, setPrototypeIdData] = useState<PrototypeByIdType[] | null>(null);
	const { data: idData, refetch } = usePrototypeById(selectedId);

	useEffect(() => {
		refetch();
		setPrototypeIdData(idData!);
	}, [selectedId, setSelectedId, idData, refetch]);

	// selectBox handling
	const [selectedHeader, setSelectedHeader] = useState("전체");

	// selectBox에서 보여줄 값들을 선택하여 string array로 바꿔줌.
	const indexForSelect = [
		"전체",
		...new Set(prototypeData?.features?.map((data) => data.properties.category)),
	];

	return (
		<>
			<MapDataTableWrapper show={openTable} setShow={() => setOpenTable(!openTable)}>
				<BaseBlockTitleBox title="전국공항상황" subtitle="상태를 보여줍니다" />
				{mapData && (
					<SelectBox
						data={indexForSelect}
						value={selectedHeader}
						onChange={(event) => {
							setSelectedHeader(event.target.value);
							event.target.value === "전체"
								? setSelectedMapData(mapData)
								: setSelectedMapData(
										mapData?.filter((data) => data.properties.category === event.target.value),
								  );
						}}
					/>
				)}
				<SimpleTable head={["지역", "상태", "이거의 형태"]}>
					{selectedMapData?.map((row) => (
						<TableRow key={row.properties.id}>
							<SimpleTableCellText
								text={row.properties.name}
								pointer
								onClick={() => {
									setSelectedId(row.properties.id);
									setSelectedName(row.properties.name);
									refetch();
									// 값을 선택하면 지도 상의 위치를 옮겨줌
									CoordManager.setGeoAnimatedMoveCenter(
										row.properties.lonlat[0],
										row.properties.lonlat[1],
										3,
									);
								}}
							/>
							<SimpleTableCircleCellByColor color={row.properties.color} />
							<SimpleTableCellText text={row.geometry.type} />
						</TableRow>
					))}
				</SimpleTable>
				{selectedId && (
					<>
						<Divider sx={{ mt: 4, mb: 2 }} />
						<Typography variant="body1" fontWeight={600} sx={{ mb: 2 }}>
							{selectedName}
						</Typography>
						<SimpleTable head={["부대명", "A상황", "B상황", "C상황", "총평"]}>
							{prototypeIdData?.map((row) => (
								<TableRow key={row.id}>
									<SimpleTableCellText text={row.testTroop} />
									<SimpleTableCircleCellByColor color={row.testAColor} />
									<SimpleTableCircleCellByColor color={row.testBColor} />
									<SimpleTableCircleCellByColor color={row.testCColor} />
									<SimpleTableCellText text={row.resultString} />
								</TableRow>
							))}
						</SimpleTable>
					</>
				)}

				<Divider sx={{ mt: 4, mb: 4 }} />
				<TableHelperText type="percentage" />
			</MapDataTableWrapper>
		</>
	);
};

export default Main;
