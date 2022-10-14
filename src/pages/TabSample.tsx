import { styled, Tab, TableRow, Tabs } from "@mui/material";
import { useEffect, useState } from "react";
import BaseBlockTitleBox from "../components/box/textBox/BaseBlockTitleBox";
import MapDataTableWrapper from "../components/map/MapDataTableWrapper";
import {
	dummyListForTabSample1,
	dummyListForTabSample2,
	dummyListForTabSample3,
} from "../data/constants/dummyListForTabSample";

import { setupVectorsOnPage } from "../libs/d2/mapSettings/pages/setupVectorsOnPage";
import useRightClickStore from "../stores/useRightClickStore";
import { OpenLayersStandardDataTypes, OpenLayersStandardFeatureTypes } from "../types/openlayers";
import TabPanel from "../components/tab/TabPanel";
import SimpleTable from "../components/dataGrid/simpleTable/SimpleTable";
import {
	SimpleTableCellText,
	SimpleTableCircleCellByColor,
} from "../components/dataGrid/simpleTable/SimpleTableCellDisplay";

interface StyledTabProps {
	label: string;
}

const TabSample = () => {
	const [openTable, setOpenTable] = useState(true);
	// 맵에 뿌려즐 전체 데이터 (DB에서 받은 데이터 그대로 보존)
	const [mapData, setMapData] = useState<OpenLayersStandardFeatureTypes[] | null | undefined>(null);

	const { setRightClickEnabled } = useRightClickStore();

	// 지도 상에 나타난 좌표 및 부호를 클릭했을 때 해당하는 세부 표를 보여주는 기능
	// 여기서는 왼쪽 클릭해도 클릭해서 표출할 것이 없으므로 생략됨
	// const onClickFeatureOnMap = useCallback(
	// 	(event: any) => {
	// 		const feature = findFeatures(event);
	// 		if (feature) {
	// 			const { id, name } = feature.getProperties();
	// 		}
	// 		return null;
	// 	},
	// 	[window.map],
	// );

	const setupMapSymbols = (data: OpenLayersStandardDataTypes, layerName: string) => {
		// 여기에 원래대로 window.map && data(api에서 받아서 isFetched 받은 형식으로 if문 넣어주셔야 해요)
		if (window.map && data) {
			setMapData(data.features);

			setupVectorsOnPage({
				data,
				layerName: layerName,
			});
			setRightClickEnabled(true);

			// // 맵에 뿌려진 좌표를 클릭했을 때 핸들링하는 기능
			// 여기서는 좌 클릭 해도 보여줄게 없으므로 생략됨
			// window.map.on("click", onClickFeatureOnMap);
			// return () => window.map.un("click", onClickFeatureOnMap);
		}
	};

	const [tabValue, setTabValue] = useState(0);

	useEffect(() => {
		setupMapSymbols(dummyListForTabSample1, "dummyListForTabSample1-layer");
		//여기에도 각종 isFetched 넣어주셔야 fetch 될 때마다 값을 받아요
	}, []);

	return (
		<MapDataTableWrapper show={openTable} setShow={() => setOpenTable(!openTable)}>
			<BaseBlockTitleBox
				title="탭 샘플"
				subtitle="서로 다른 탭에서 서로 다른 맵 데이터 호출 시 예시"
			/>
			<Tabs
				value={tabValue}
				sx={{ borderBottom: 1, borderColor: "divider" }}
				onChange={(e, v) => {
					setTabValue(v);
					if (v === 0) {
						setupMapSymbols(dummyListForTabSample1, "dummyListForTabSample1-layer");
					}
					if (v === 1) {
						setupMapSymbols(dummyListForTabSample2, "dummyListForTabSample2-layer");
					}
					if (v === 2) {
						setupMapSymbols(dummyListForTabSample3, "dummyListForTabSample3-layer");
					}
				}}
				aria-label="tabSmaple-tabs"
			>
				<StyledTab label="전체" />
				<StyledTab label="두번째" />
				<StyledTab label="세번째" />
			</Tabs>
			<TabPanel value={tabValue} index={0}>
				<SimpleTable head={["부대명", "지표", "상태"]}>
					{mapData?.map((row) => (
						<TableRow hover key={row.properties.id}>
							<SimpleTableCellText text={row.properties.name} />
							<SimpleTableCellText text={row.properties.percent} />
							<SimpleTableCircleCellByColor color={row.properties.color} />
						</TableRow>
					))}
				</SimpleTable>
			</TabPanel>
			<TabPanel value={tabValue} index={1}>
				<SimpleTable head={["부대명", "지표", "상태"]}>
					{mapData?.map((row) => (
						<TableRow hover key={row.properties.id}>
							<SimpleTableCellText text={row.properties.name} />
							<SimpleTableCellText text={row.properties.percent} />
							<SimpleTableCircleCellByColor color={row.properties.color} />
						</TableRow>
					))}
				</SimpleTable>
			</TabPanel>
			<TabPanel value={tabValue} index={2}>
				<SimpleTable head={["부대명", "지표", "상태"]}>
					{mapData?.map((row) => (
						<TableRow hover key={row.properties.id}>
							<SimpleTableCellText text={row.properties.name} />
							<SimpleTableCellText text={row.properties.percent} />
							<SimpleTableCircleCellByColor color={row.properties.color} />
						</TableRow>
					))}
				</SimpleTable>
			</TabPanel>
		</MapDataTableWrapper>
	);
};

export default TabSample;

const StyledTab = styled((props: StyledTabProps) => <Tab disableRipple {...props} />)(
	({ theme }) => ({
		color: theme.palette.text.secondary,
		borderBottom: "1px soild white",
	}),
);
