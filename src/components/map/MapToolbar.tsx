import { ToggleButton, ToggleButtonGroup, Tooltip } from "@mui/material";
import { useState } from "react";
import NorthWestIcon from "@mui/icons-material/NorthWest";
import SaveIcon from "@mui/icons-material/Save";
import GridOnIcon from "@mui/icons-material/GridOn";
import CenterFocusWeakIcon from "@mui/icons-material/CenterFocusWeak";
import PublicIcon from "@mui/icons-material/Public";
import SettingsIcon from "@mui/icons-material/Settings";
import CategoryIcon from "@mui/icons-material/Category";
import MultipleStopIcon from "@mui/icons-material/MultipleStop";

import MapTypeDrawer from "../../modules/map/MapTypeDrawer";
import MapControlsSettingModal from "../../modules/map/MapControlsSettingModal";
import DrawPanelToolbar from "./DrawPanelToolbar";
import MapGridControlModal from "../../modules/map/MapGridControlModal";
import MoveMapCenterByCoordDrawer from "../../modules/map/MoveMapCenterByCoordDrawer";
import { setupCenterline } from "../../libs/d2/mapSettings/setupCenterLine";

const MapToolbar = () => {
	const [alignment, setAlignment] = useState("select");
	const [centerlineVisible, setCenterlineVisible] = useState(false);

	// 선택된 토글버튼에 강조주기
	const handleChange = (event: React.MouseEvent<HTMLElement>, newAlignment: string) => {
		setAlignment(newAlignment);
	};

	// 중심선 토글
	const setCenterline = () => {
		setCenterlineVisible(!centerlineVisible);
		setupCenterline(centerlineVisible);
	};

	// 지도 이미지 PNG로 저장
	const downloadPNG = () => {
		// TO_BE_CHECKED
		// 저장 시 default 파일명이 d2로 되어 있는 부분 수정토록 d2에 얘기
		window.exportImage.downloadPNG();
	};

	// 지도 종류 선택하기 Drawer
	const [mapSelectOpen, setMapSelectOpen] = useState(false);
	// 지도 컨트롤 설정 모달 선택하기
	const [mapControlsOpen, setMapControlsOpen] = useState(false);
	// 그리기 Toggle On/Off
	const [drawPanelOpen, setDrawPanelOpen] = useState(false);
	// 그리드 설정 모달 선택하기
	const [mapGridControlsOpen, setMapGridControlsOpen] = useState(false);
	// 좌표 입력 시 지도 중심으로 이동 Drawer
	const [moveMapByCoordOpen, setMoveMapByCoordOpen] = useState(false);

	return (
		<>
			<div style={{ margin: ".5%" }}>
				<ToggleButtonGroup
					sx={{ marginLeft: "10px" }}
					size="small"
					color="primary"
					value={alignment}
					onChange={handleChange}
				>
					<ToggleButton value="select">
						<Tooltip title="기본 선택">
							<NorthWestIcon fontSize="small" />
						</Tooltip>
					</ToggleButton>
					<ToggleButton value="grid" onClick={() => setMapGridControlsOpen(true)}>
						<Tooltip title="그리드">
							<GridOnIcon fontSize="small" />
						</Tooltip>
					</ToggleButton>
					<ToggleButton value="centerline" onClick={setCenterline}>
						<Tooltip title="중심선 보기">
							<CenterFocusWeakIcon fontSize="small" />
						</Tooltip>
					</ToggleButton>
					<ToggleButton value="moveMapByCoord" onClick={() => setMoveMapByCoordOpen(true)}>
						<Tooltip title="좌표에 따른 지도 이동">
							<MultipleStopIcon fontSize="small" />
						</Tooltip>
					</ToggleButton>
					<ToggleButton value="save" onClick={downloadPNG}>
						<Tooltip title="그림으로 지도 저장">
							<SaveIcon fontSize="small" />
						</Tooltip>
					</ToggleButton>
					<ToggleButton
						value="selectMap"
						onClick={() => {
							setMapSelectOpen(true);
							return setAlignment("select");
						}}
					>
						<Tooltip title="지도 선택">
							<div
								style={{
									display: "flex",
									flexDirection: "row",
									justifyContent: "space-between",
									width: 65,
									alignItems: "center",
								}}
							>
								<PublicIcon fontSize="small" />
								배경지도
							</div>
						</Tooltip>
					</ToggleButton>
					<ToggleButton value="mapConfig" onClick={() => setMapControlsOpen(true)}>
						<Tooltip title="지도설정">
							<SettingsIcon fontSize="small" />
						</Tooltip>
					</ToggleButton>
					<ToggleButton value="drawPanel" onClick={() => setDrawPanelOpen(!drawPanelOpen)}>
						<Tooltip title="그리기">
							<CategoryIcon fontSize="small" />
						</Tooltip>
					</ToggleButton>
				</ToggleButtonGroup>
			</div>
			{/* 지도종류선택 Drawer */}
			<MapTypeDrawer
				open={mapSelectOpen}
				setOpen={() => {
					setMapSelectOpen(false);
					setAlignment("");
				}}
			/>
			{/* 지도 컨트롤 설정 모달*/}
			<MapControlsSettingModal
				open={mapControlsOpen}
				setOpen={() => {
					setMapControlsOpen(false);
					setAlignment("");
				}}
			/>
			{/* Grid 설정 모달 */}
			<MapGridControlModal
				open={mapGridControlsOpen}
				setOpen={() => {
					setMapGridControlsOpen(false);
					setAlignment("");
				}}
			/>
			{/* 좌표 입력 후 지도 중심 이동 Drawer */}
			<MoveMapCenterByCoordDrawer
				open={moveMapByCoordOpen}
				setOpen={() => {
					setMoveMapByCoordOpen(false);
					setAlignment("");
				}}
			/>
			{/* draw Panel  */}
			{drawPanelOpen && <DrawPanelToolbar />}
		</>
	);
};

export default MapToolbar;
