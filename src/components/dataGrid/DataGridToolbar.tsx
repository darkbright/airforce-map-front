import { Box, Button, ButtonGroup, styled, Tooltip } from "@mui/material";

import RefreshIcon from "@mui/icons-material/Refresh";
import AspectRatioIcon from "@mui/icons-material/AspectRatio";
import TopicIcon from "@mui/icons-material/Topic";
import AddBoxIcon from "@mui/icons-material/AddBox";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import SaveIcon from "@mui/icons-material/Save";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

interface DataGridToolBarProps {
	addNewRow: () => void;
	refresh: () => void;
	onFilter?: () => void;
}

const DataGridToolbar = ({ addNewRow, refresh, onFilter }: DataGridToolBarProps) => {
	const ToolBarOptions = [
		{
			id: 0,
			btns: [
				{
					id: 0,
					title: "리프레시?",
					key: "refresh",
					icon: <RefreshIcon fontSize="small" />,
					onClick: refresh,
				},
				{
					id: 1,
					title: "테이블 설정",
					key: "table-setting",
					icon: <AspectRatioIcon fontSize="small" />,
					onClick: () => null,
				},
				{
					id: 2,
					title: "헤더 설정",
					key: "header-setting",
					icon: <TopicIcon fontSize="small" />,
					onClick: () => null,
				},
			],
		},
		{
			id: 1,
			btns: [
				{
					id: 0,
					title: "새로운 행 추가",
					key: "new-row",
					icon: <AddBoxIcon fontSize="small" />,
					onClick: addNewRow,
				},
				{
					id: 1,
					title: "행 복사",
					key: "copy-row",
					icon: <ContentCopyIcon fontSize="small" />,
					onClick: () => null,
				},
				{
					id: 2,
					title: "파일로 내보내기",
					key: "export-as-file",
					icon: <FileDownloadIcon fontSize="small" />,
					onClick: () => null,
				},
			],
		},
		{
			id: 2,
			btns: [
				{
					id: 0,
					title: "저장",
					key: "save",
					icon: <SaveIcon fontSize="small" />,
					onClick: () => null,
				},
			],
		},
	];

	return (
		<Root>
			<LeftBar>
				{ToolBarOptions.map((group) => (
					<BtnGroupWrapper key={group.id}>
						<ButtonGroup size="small" variant="text" aria-label="datagrid-toolbar">
							{group.btns.map((btn) => (
								<Tooltip key={btn.id} title={btn.title}>
									<IconButton onClick={btn.onClick} key={btn.key}>
										{btn.icon}
									</IconButton>
								</Tooltip>
							))}
						</ButtonGroup>
					</BtnGroupWrapper>
				))}
			</LeftBar>
			<BtnGroupWrapper>
				<ButtonGroup size="small" variant="text" aria-label="datagrid-toolbar">
					<Tooltip title="필터">
						<IconButton onClick={onFilter}>
							<FilterAltIcon fontSize="small" />
						</IconButton>
					</Tooltip>
				</ButtonGroup>
			</BtnGroupWrapper>
		</Root>
	);
};

export default DataGridToolbar;

const Root = styled("div")(() => ({
	display: "flex",
	flexDirection: "row",
	justifyContent: "space-between",
	marginBottom: "1%",
}));

const LeftBar = styled("div")(() => ({
	display: "flex",
	flexDirection: "row",
}));

const BtnGroupWrapper = styled(Box)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	background: theme.palette.background.paper,
	marginRight: ".8%",
	borderRadius: 4,
	padding: 8,
	height: "fit-content",
	width: "fit-content",
	"& > *": {
		m: 1,
	},
}));

const IconButton = styled(Button)(() => ({
	padding: 0,
}));
