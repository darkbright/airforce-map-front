import { Button, ButtonGroup, Popover, Slider, styled, Tooltip } from "@mui/material";
import WebAssetIcon from "@mui/icons-material/WebAsset";
import UndoIcon from "@mui/icons-material/Undo";
import RedoIcon from "@mui/icons-material/Redo";
import AdjustIcon from "@mui/icons-material/Adjust";
import { toastShow } from "../alert/ToastMessage";
import SquareIcon from "@mui/icons-material/Square";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import useGraphicFeatureColorStore from "../../stores/useGraphicFeatureColorStore";
import { Color, useColor } from "react-color-palette";
import { IGraphicUtil } from "../../types/d2/Core/IGraphicUtil";
import D2MapModule from "../../libs/d2/D2MapModule";
import { BaseColorPicker } from "../colorPicker/BaseColorPicker";
import { useState } from "react";

interface DrawerPaenlSubToolbarProps {
	openDrawPanel: boolean;
	setOpenDrawPanel: (open: boolean) => void;
}
/**
 * 지도 위에 뜨는 도형 그리기 툴바의 하위 툴바로
 * - 관리창 열고 닫기
 * - 실행 취소
 * - 재실행
 * - 도형을 지도의 중심에 놓기
 * 등을 수행함
 * @param DrawerPaenlSubToolbarProps DrawerPaenlSubToolbarProps
 * @returns {JSX.Element} div
 */
const DrawerPanelSubToolbar = ({ openDrawPanel, setOpenDrawPanel }: DrawerPaenlSubToolbarProps) => {
	const { GraphicUtil } = D2MapModule;

	const graphicUtil: IGraphicUtil = GraphicUtil;
	const { favColor, setFavColor } = useGraphicFeatureColorStore();

	/**
	 * 칠 색상 변경
	 */
	const [openFillColorPicker, setOpenFillColorPicker] = useState(false);
	const [fillColor, setFillColor] = useColor("hex", graphicUtil.rgb2hex(favColor.fc));
	const changeFillColor = (color: Color) => {
		const selectedObject = window.graphic.getSelectObjectList()[0];
		setFillColor(color);
		setFavColor({ ...favColor, fc: graphicUtil.hex2rgb(color.hex) });
		selectedObject._style.fill.color = graphicUtil.hex2rgb(color.hex);
		selectedObject.updateStyle(true);
		window.graphic.getSelectGraphicBoard().undoRedoSave();
	};

	/**
	 * 라인 색상 변경
	 */
	const [openLineColorPicker, setOpenLineColorPicker] = useState(false);
	const [lineColor, setLineColor] = useColor("hex", graphicUtil.rgb2hex(favColor.lc));
	const changeLineColor = (color: Color) => {
		const selectedObject = window.graphic.getSelectObjectList()[0];
		setLineColor(color);
		setFavColor({ ...favColor, lc: graphicUtil.hex2rgb(color.hex) });
		selectedObject._style.line.color = graphicUtil.hex2rgb(color.hex);
		selectedObject.updateStyle(true);
		window.graphic.getSelectGraphicBoard().undoRedoSave();
	};

	/**
	 * 라인 굵기 변경
	 */
	const [lineWidth, setLineWidth] = useState(favColor.lw);
	const [lineWidthEl, setLineWidthEl] = useState<HTMLButtonElement | null>(null);
	const changeLineWidth = (event: Event, newValue: number | number[]) => {
		const selectedObject = window.graphic.getSelectObjectList()[0];
		setLineWidth(newValue as number);
		setFavColor({ ...favColor, lw: newValue as number });
		selectedObject._style.line.width = newValue as number;
		selectedObject.updateStyle(true);
		window.graphic.getSelectGraphicBoard().undoRedoSave();
	};

	return (
		<>
			<ButtonsWrapper>
				<ButtonGroup
					size="small"
					variant="contained"
					color="inherit"
					aria-label="draw-subpanel-button-group1"
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
						onClick={() => window.graphic.getSelectGraphicBoard().undo()}
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

					<ItemButton
						color="inherit"
						variant="contained"
						size="small"
						aria-label="draw-toolbar-sub-move-coordinate"
						disableElevation
						onClick={() => {
							const selectedObject = window.graphic.getSelectObjectList()[0];
							if (!selectedObject) {
								return toastShow({
									type: "warning",
									title: "이동시킬 도형이 없음",
									message: "도형을 선택해주세요",
								});
							}
							window.graphic._map.getView().animate(
								{
									zoom: window.graphic._map.getView().getZoom(),
								},
								{ center: selectedObject._prop.getCenter() },
								{ duration: 1000 },
							);
						}}
					>
						<Tooltip title="선택된 도형을 지도 중심에 위치">
							<AdjustIcon fontSize="small" />
						</Tooltip>
					</ItemButton>
				</ButtonGroup>
				<ButtonGroup
					size="small"
					variant="contained"
					color="inherit"
					aria-label="draw-subpanel-button-group1"
					disableElevation
					sx={{ opacity: 0.85, ml: 1 }}
				>
					<ItemButton
						color="inherit"
						sx={{ width: 66 }}
						variant="contained"
						startIcon={<SquareIcon fontSize="small" sx={{ color: fillColor.hex }} />}
						size="small"
						aria-label="draw-toolbar-quick-action-fill"
						disableElevation
						onClick={() => {
							const selectedObject = window.graphic.getSelectObjectList()[0];
							if (!selectedObject) {
								return toastShow({
									type: "warning",
									title: "색상을 바꿀 도형이 없음",
									message: "도형을 선택해주세요",
								});
							}
							setOpenFillColorPicker(true);
						}}
					>
						<Tooltip title="빠른액션 - 칠 색상바꾸기">
							<div>칠 색상</div>
						</Tooltip>
					</ItemButton>
					<ItemButton
						color="inherit"
						sx={{ width: 66 }}
						variant="contained"
						startIcon={<HorizontalRuleIcon fontSize="small" sx={{ color: lineColor.hex }} />}
						size="small"
						aria-label="draw-toolbar-quick-action-line-fill"
						disableElevation
						onClick={() => {
							const selectedObject = window.graphic.getSelectObjectList()[0];
							if (!selectedObject) {
								return toastShow({
									type: "warning",
									title: "선 색상을 바꿀 도형이 없음",
									message: "도형을 선택해주세요",
								});
							}
							setOpenLineColorPicker(true);
						}}
					>
						<Tooltip title="빠른액션 - 선 색상바꾸기">
							<div>선 색상</div>
						</Tooltip>
					</ItemButton>
					<ItemButton
						color="inherit"
						sx={{ width: 66 }}
						variant="contained"
						size="small"
						aria-label="draw-toolbar-quick-action-line-width"
						disableElevation
						onClick={(event) => {
							const selectedObject = window.graphic.getSelectObjectList()[0];
							if (!selectedObject) {
								return toastShow({
									type: "warning",
									title: "선 굵기를 바꿀 도형이 없음",
									message: "도형을 선택해주세요",
								});
							}
							setLineWidthEl(event.currentTarget);
						}}
					>
						<Tooltip title="빠른액션 - 선 색상바꾸기">
							<div>선 굵기 {lineWidth}</div>
						</Tooltip>
					</ItemButton>
				</ButtonGroup>
			</ButtonsWrapper>
			<BaseColorPicker
				openColorPicker={openFillColorPicker}
				setOpenColorPicker={() => setOpenFillColorPicker(false)}
				color={fillColor}
				onColorChange={changeFillColor}
			/>
			<BaseColorPicker
				openColorPicker={openLineColorPicker}
				setOpenColorPicker={() => setOpenLineColorPicker(false)}
				color={lineColor}
				onColorChange={changeLineColor}
			/>
			<Popover
				id="line-width"
				open={Boolean(lineWidthEl)}
				anchorEl={lineWidthEl}
				onClose={() => setLineWidthEl(null)}
				anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
			>
				<Slider
					valueLabelDisplay="auto"
					size="small"
					sx={{ width: 200, height: 4, mt: 3, ml: 1, mr: 1, mb: 0.4 }}
					min={0}
					max={10}
					marks
					defaultValue={favColor.lw}
					onChange={changeLineWidth}
				/>
			</Popover>
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
