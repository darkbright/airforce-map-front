import { Button, ButtonGroup, styled, Tooltip } from "@mui/material";
import WebAssetIcon from "@mui/icons-material/WebAsset";
import UndoIcon from "@mui/icons-material/Undo";
import RedoIcon from "@mui/icons-material/Redo";
// import RestartAltIcon from "@mui/icons-material/RestartAlt";
// import YesNoSelectionModal from "../../modules/modal/YesNoSelectionModal";

interface DrawerPaenlSubToolbarProps {
	openDrawPanel: boolean;
	setOpenDrawPanel: (open: boolean) => void;
}
/**
 * 지도 위에 뜨는 도형 그리기 툴바의 하위 툴바로
 * - 관리창 열고 닫기
 * - 실행 취소
 * - 재실행
 * 등을 수행함
 * @param DrawerPaenlSubToolbarProps DrawerPaenlSubToolbarProps
 * @returns {JSX.Element} div
 */
const DrawerPanelSubToolbar = ({ openDrawPanel, setOpenDrawPanel }: DrawerPaenlSubToolbarProps) => {
	// const [confirmModalOpen, setConfirmModalOpen] = useState(false);

	return (
		<>
			<ButtonsWrapper>
				<ButtonGroup
					size="small"
					variant="contained"
					color="inherit"
					aria-label="measurement button group"
					disableElevation
					sx={{ opacity: 0.85 }}
				>
					<ItemButton
						color="inherit"
						variant="contained"
						size="small"
						aria-label="draw-toolbar-sub-open-panel"
						disableElevation
						onClick={() => setOpenDrawPanel(!openDrawPanel)}
					>
						<Tooltip title={`투명도 관리패널 ${openDrawPanel ? "닫기" : "열기"}`}>
							<WebAssetIcon fontSize="small" />
						</Tooltip>
					</ItemButton>
					<ItemButton
						color="inherit"
						variant="contained"
						size="small"
						aria-label="draw-toolbar-sub-undo"
						disableElevation
						onClick={() => {
							window.graphic.getSelectGraphicBoard().undo();
						}}
					>
						<Tooltip title="실행 취소(ctrl+z)">
							<UndoIcon fontSize="small" />
						</Tooltip>
					</ItemButton>
					<ItemButton
						color="inherit"
						variant="contained"
						size="small"
						aria-label="draw-toolbar-sub-undo"
						disableElevation
						onClick={() => {
							window.graphic.getSelectGraphicBoard().redo();
						}}
					>
						<Tooltip title="재실행 (ctrl+y)">
							<RedoIcon fontSize="small" />
						</Tooltip>
					</ItemButton>
					{/* 모두 지우기를 하면 지워는 지지만(destroy 호출 시) 현재, 그 다음에 도형을 생성 시 뭔가가 엄청 이상해짐. 디투에 물어보든지 파악 필요 */}
					{/* <ItemButton
						color="inherit"
						variant="contained"
						size="small"
						aria-label="draw-toolbar-sub-undo"
						disableElevation
						onClick={() => {
							const objectList = window.graphic.getSelectGraphicBoard().getParentObjectList();
							console.log(window.graphic.getSelectGraphicBoard().getParentObjectList());
							if (objectList.length > 0) {
								setConfirmModalOpen(true);
							} else return;
						}}
					>
						<Tooltip title="초기화(모든도형삭제)">
							<RestartAltIcon fontSize="small" />
						</Tooltip>
					</ItemButton> */}
				</ButtonGroup>
			</ButtonsWrapper>
			{/* <YesNoSelectionModal
				open={confirmModalOpen}
				setOpen={() => setConfirmModalOpen(false)}
				onYes={() => window.graphic.getSelectGraphicBoard().destroy()}
				onNo={() => setConfirmModalOpen(false)}
				title="지도 상의 모든 도형 삭제"
				question="그려진 모든 도형을 삭제하시겠어요?"
			/> */}
		</>
	);
};

export default DrawerPanelSubToolbar;

const ButtonsWrapper = styled("div")(() => ({
	display: "flex",
	alignItems: "center",
}));

const ItemButton = styled(Button)(({ theme }) => ({
	background: theme.palette.background.default,
	padding: "6px 0px",
	borderColor: theme.palette.divider,
	"&:hover": {
		background: theme.palette.background.paper,
	},
	minWidth: 30,
}));
