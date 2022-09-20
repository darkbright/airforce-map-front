import { TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { useEffect, useState } from "react";
import BaseBlockTitleBox from "../components/box/textBox/BaseBlockTitleBox";
import CustomTable from "../components/dataGrid/simpleTable/CustomTable";
import {
	SimpleTableCellText,
	SimpleTableCircleCellByColor,
} from "../components/dataGrid/simpleTable/SimpleTableCellDisplay";
import MapDataTableWrapper from "../components/map/MapDataTableWrapper";
import { setupVectorsOnPage } from "../libs/d2/mapSettings/pages/setupVectorsOnPage";
import { useWhateverAll } from "../query/whatever";
import useThemeStore from "../stores/useThemeStore";
import { theme } from "../styles/theme";
import { OpenLayersStandardFeatureTypes } from "../types/openlayers";

const Whatever = () => {
	const [openTable, setOpenTable] = useState(true);

	// 맵에 뿌려즐 전체 데이터 (DB에서 받은 데이터 그대로 보존)
	const [mapData, setMapData] = useState<OpenLayersStandardFeatureTypes[] | null | undefined>(null);
	const { data: whateverData, isFetched: isWhateverDataFetched } = useWhateverAll();

	const { isDark } = useThemeStore();
	const tableLineColor = `1px solid ${theme(isDark).palette.divider}`;

	useEffect(() => {
		setMapData(whateverData && whateverData.features!);
		if (isWhateverDataFetched) {
			setupVectorsOnPage({
				data: whateverData!,
				layerName: "whatever-layer",
			});
		}
	}, [isWhateverDataFetched]);

	return (
		<MapDataTableWrapper show={openTable} setShow={() => setOpenTable(!openTable)}>
			<BaseBlockTitleBox title="병사현황" subtitle="병사 상태 조회" />
			<CustomTable>
				<TableHead>
					<TableRow>
						<TableCell sx={{ borderRight: tableLineColor }} colSpan={2}></TableCell>
						<TableCell colSpan={2} align="center" sx={{ borderRight: tableLineColor }}>
							어제
						</TableCell>
						<TableCell colSpan={2} align="center">
							오늘
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell align="center">이름</TableCell>
						<TableCell align="center" sx={{ borderRight: tableLineColor }}>
							상태
						</TableCell>
						<TableCell align="center">참여</TableCell>
						<TableCell align="center" sx={{ borderRight: tableLineColor }}>
							부상
						</TableCell>
						<TableCell align="center">참여</TableCell>
						<TableCell align="center">부상</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{mapData?.map((row) => (
						<TableRow key={row.properties.id}>
							<SimpleTableCellText text={row.properties.name} />
							<SimpleTableCircleCellByColor
								sx={{ borderRight: tableLineColor }}
								color={row.properties.color}
							/>
							<SimpleTableCellText text={row.properties.yesterdayOnboard} />
							<SimpleTableCellText
								sx={{ borderRight: tableLineColor }}
								text={row.properties.yesterdayInjured}
							/>
							<SimpleTableCellText text={row.properties.todayOnboard} />
							<SimpleTableCellText text={row.properties.todayInjured} />
						</TableRow>
					))}
					<TableRow>
						<TableCell rowSpan={4} />
						<TableCell colSpan={4}>Total 오늘 참여</TableCell>
						<TableCell sx={{ fontWeight: 600 }} align="right">
							11
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell colSpan={4}>Total 오늘 부상</TableCell>
						<TableCell sx={{ fontWeight: 600 }} align="right">
							7
						</TableCell>
					</TableRow>
				</TableBody>
			</CustomTable>
		</MapDataTableWrapper>
	);
};

export default Whatever;
