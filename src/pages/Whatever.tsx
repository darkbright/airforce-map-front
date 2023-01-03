import { Divider, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { useEffect, useState } from "react";
import BaseBlockTitleBox from "../components/box/textBox/BaseBlockTitleBox";
import TextButton from "../components/button/TextButton";
import CustomTable from "../components/dataGrid/simpleTable/CustomTable";
import ReportModalExample from "../components/dataGrid/simpleTable/ReportModalExample";
import {
	SimpleTableCellText,
	SimpleTableCircleCellByColor,
} from "../components/dataGrid/simpleTable/SimpleTableCellDisplay";
import { CollapsibleTableExample } from "../components/dataGrid/simpleTable/SimpleTableExamples";
import TableHelperText, { PercentTypeElement } from "../components/dataGrid/TableHelperText";
import MapDataTableWrapper from "../components/map/MapDataTableWrapper";
import { setupVectorsOnPage } from "../libs/d2/mapSettings/pages/setupVectorsOnPage";
import { useWhateverAll } from "../query/whatever";
import useFavoriteSymbolStore from "../stores/useFavoriteSymbolStore";
import useRightClickStore from "../stores/useRightClickStore";
import useThemeStore from "../stores/useThemeStore";
import { theme } from "../styles/theme";
import { OpenLayersStandardFeatureTypes } from "../types/openlayers";

const Whatever = () => {
	const [openTable, setOpenTable] = useState(true);
	const { setRightClickEnabled } = useRightClickStore();

	// 맵에 뿌려즐 전체 데이터 (DB에서 받은 데이터 그대로 보존)
	const [mapData, setMapData] = useState<OpenLayersStandardFeatureTypes[] | null | undefined>(null);
	const { data: whateverData, isFetched: isWhateverDataFetched } = useWhateverAll();

	const { isDark } = useThemeStore();
	const tableLineColor = `1px solid ${theme(isDark).palette.divider}`;

	const { favSymbol } = useFavoriteSymbolStore();

	useEffect(() => {
		if (isWhateverDataFetched) {
			setMapData(whateverData && whateverData.features!);
			setupVectorsOnPage({
				data: whateverData!,
				layerName: "whatever-layer",
				favSymbol,
			});
			setRightClickEnabled(true);
		}
	}, [isWhateverDataFetched]);

	const percentType: PercentTypeElement[] = [
		{
			percent: "1 - 30%",
			desc: "😱 큰일",
			color: "R",
		},
		{
			percent: "31 - 60%",
			desc: "🤔 글쎄",
			color: "Y",
		},
		{
			percent: "61 - 100%",
			desc: "🤗 좋아요",
			color: "G",
		},
		{
			percent: "0",
			desc: "😑 몰겠음",
			color: "X",
		},
	];

	// sample Modal Open Close SEtting
	const [modalOpen, setModalOpen] = useState(false);

	return (
		<MapDataTableWrapper width="25vw" show={openTable} setShow={() => setOpenTable(!openTable)}>
			<BaseBlockTitleBox title="병사현황" subtitle="병사 상태 조회" />
			<CustomTable>
				<TableHead>
					<TableRow>
						<TableCell sx={{ borderRight: tableLineColor }} colSpan={2} />
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
						<TableRow hover key={row.properties.id}>
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
			<Divider sx={{ mt: 4, mb: 4 }} />
			<BaseBlockTitleBox title="접었다펴봐" subtitle="접었다펴봐 예시" />
			<CollapsibleTableExample />
			<TextButton title="정보통신장애보고" onClick={() => setModalOpen(true)} />
			<Divider sx={{ mt: 4, mb: 4 }} />
			<TableHelperText type="percentage" percentType={percentType} />
			{modalOpen && (
				<ReportModalExample open={modalOpen} setOpen={() => setModalOpen(!modalOpen)} />
			)}
		</MapDataTableWrapper>
	);
};

export default Whatever;
