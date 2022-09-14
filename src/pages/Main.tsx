import { Divider, TableRow, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import TableHelperText from "../components/dataGrid/TableHelperText";
import MapDataTableWrapper from "../components/map/MapDataTableWrapper";
import SimpleTable from "../components/simpleTable/SimpleTable";
import D2MapModule from "../libs/d2/D2MapModule";
import { simplifiedSymbolStyle } from "../libs/d2/mapSettings/styles/simplifiedSymbolStyle";
import { PrototypeByIdType, usePrototypeById, usePrototypesAll } from "../query/prototype";
import { OpenLayersStandardDataTypes } from "../types/openlayers";
import BaseBlockTitleBox from "../components/box/textBox/BaseBlockTitleBox";
import {
	SimpleTableCircleCellByColor,
	SimpleTableCellText,
} from "../components/dataGrid/SimpleTableCellDisplay";

/**
 * 메인 페이지 (프로토타입 샘플)
 * @returns React.Element(Page)
 */
const Main = () => {
	const { ol, CoordManager } = D2MapModule;
	const [openTable, setOpenTable] = useState(true);

	// 맵에 뿌려즐 전체 데이터
	const [mapData, setMapData] = useState<OpenLayersStandardDataTypes | null>(null);
	const { data: prototypeData, isFetched: isPrototypeFetched } = usePrototypesAll();

	useEffect(() => {
		if (isPrototypeFetched) {
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

	return (
		<>
			<MapDataTableWrapper show={openTable} setShow={() => setOpenTable(!openTable)}>
				<BaseBlockTitleBox title="전국공항상황" subtitle="상태를 보여줍니다" />
				<SimpleTable head={["지역", "상태", "이거의 형태"]}>
					{mapData?.features.map((row) => (
						<TableRow
							key={row.properties.id}
							sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
						>
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
						<Divider sx={{ mt: 2, mb: 2 }} />
						<Typography variant="body1" fontWeight={600} gutterBottom>
							{selectedName}
						</Typography>
						<SimpleTable head={["부대명", "A상황", "B상황", "C상황", "총평"]}>
							{prototypeIdData?.map((row) => (
								<TableRow key={row.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
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

				<Divider sx={{ mb: 2 }} />
				<TableHelperText type="percentage" />
			</MapDataTableWrapper>
		</>
	);
};

export default Main;
