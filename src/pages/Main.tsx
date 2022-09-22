import { Divider, TableRow, Typography } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import TableHelperText from "../components/dataGrid/TableHelperText";
import MapDataTableWrapper from "../components/map/MapDataTableWrapper";
import SimpleTable from "../components/dataGrid/simpleTable/SimpleTable";
import D2MapModule from "../libs/d2/D2MapModule";
import { PrototypeByIdType, usePrototypeById, usePrototypesAll } from "../query/prototype";
import { OpenLayersStandardFeatureTypes } from "../types/openlayers";
import BaseBlockTitleBox from "../components/box/textBox/BaseBlockTitleBox";
import {
	SimpleTableCircleCellByColor,
	SimpleTableCellText,
	SimpleTableBackgroundColorCell,
} from "../components/dataGrid/simpleTable/SimpleTableCellDisplay";
import SelectBox from "../components/form/SelectBox";
import { setupVectorsOnPage } from "../libs/d2/mapSettings/pages/setupVectorsOnPage";
import { findFeatures } from "../libs/d2/mapSettings/interactions/findFeatures";

/**
 * 메인 페이지 (프로토타입 샘플)
 * @returns JSX.Element(Page)
 */
const Main = () => {
	const { CoordManager } = D2MapModule;
	const [openTable, setOpenTable] = useState(true);

	// 맵에 뿌려즐 전체 데이터 (DB에서 받은 데이터 그대로 보존)
	const [mapData, setMapData] = useState<OpenLayersStandardFeatureTypes[] | null | undefined>(null);
	const { data: prototypeData, isFetched: isPrototypeFetched } = usePrototypesAll();

	// 셀렉트박스를 이용하여 뿌려줄 데이터( mapData를 변형하기 위한 용도)
	const [selectedMapData, setSelectedMapData] = useState(mapData);

	// 개별 데이터 prototypeById
	const [selectedId, setSelectedId] = useState<string>();
	const [selectedName, setSelectedName] = useState("");
	const [prototypeIdData, setPrototypeIdData] = useState<PrototypeByIdType[] | null>(null);
	const { data: idData, refetch } = usePrototypeById(selectedId);

	// 맵에 좌표 데이터 로딩
	useEffect(() => {
		if (window.map && isPrototypeFetched) {
			setMapData(prototypeData && prototypeData.features!);
			setSelectedMapData(prototypeData && prototypeData.features!);
			setupVectorsOnPage({
				data: prototypeData!,
				layerName: "prototype-layer",
			});

			// 우클릭 핸들러
			window.map.on("pointerdown", function (event: any) {
				//우클릭 시 기본으로 뜨는 브라우저 context menu를 가려줌
				document.addEventListener("contextmenu", (e) => {
					e.preventDefault();
				});
				const feature = findFeatures(event);
				if (feature) {
					const result = feature.getProperties();
					console.log(result);
				}
			});

			// 맵에 뿌려진 좌표를 클릭했을 때 핸들링하는 기능
			window.map.on("click", onClickFeatureOnMap);
			return () => window.map.un("click", onClickFeatureOnMap);
		}
	}, [isPrototypeFetched, setSelectedId, setSelectedName]);

	// 기본으로 받은 데이터의 id를 클릭했을 때, 신규로 상세 데이터를 가져오는 로직
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

	// 지도 상에 나타난 좌표 및 부호를 클릭했을 때 해당하는 세부 표를 보여주는 기능
	const onClickFeatureOnMap = useCallback(
		(event: any) => {
			const feature = findFeatures(event);
			if (feature) {
				const { id, name } = feature.getProperties();
				setSelectedId(id);
				setSelectedName(name);
			}
		},
		[window.map],
	);

	return (
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
					<TableRow hover key={row.properties.id}>
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
						<SimpleTableBackgroundColorCell color={row.properties.color} text={row.geometry.type} />
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
							<TableRow hover key={row.id}>
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
	);
};

export default Main;
