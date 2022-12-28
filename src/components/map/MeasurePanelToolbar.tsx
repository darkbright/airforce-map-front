import { Button, ButtonGroup, styled, Tooltip } from "@mui/material";
import useFullScreenStore from "../../stores/useFullScreenStore";
import PolylineIcon from "@mui/icons-material/Polyline";
import AspectRatioIcon from "@mui/icons-material/AspectRatio";
import { measureDistance } from "../../libs/d2/mapSettings/measurement/measureDistance";
import { measureExtent } from "../../libs/d2/mapSettings/measurement/measureExtent";
import ClearIcon from "@mui/icons-material/Clear";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import MeasureDistanceDetailModal from "../../modules/map/measure/MeasureDistanceDetailModal";
import { useEffect, useState } from "react";
import MeasureAreaDetailModal from "../../modules/map/measure/MeasureAreaDetailModal";
import { measureRadius } from "../../libs/d2/mapSettings/measurement/measureRadius";
import MeasureRadiusDetailModal from "../../modules/map/measure/MeasureRadiusDetailModal";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import RadarIcon from "@mui/icons-material/Radar";
import { measureRadar } from "../../libs/d2/mapSettings/measurement/measureRadar";
import MeasureRadarDetailModal from "../../modules/map/measure/MeasureRadarDetailModal";
import ExpandIcon from "@mui/icons-material/Expand";
import { measureHeight } from "../../libs/d2/mapSettings/measurement/measureHeight";
import KeyboardOptionKeyIcon from "@mui/icons-material/KeyboardOptionKey";
import { measureSlope } from "../../libs/d2/mapSettings/measurement/measureSlope";
// import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";

/**
 * 측정과 관련된 동작들을 보여주는 Div로, MapToolbar에서 측정 버튼을 누르면 나온디
 * @returns {JSX.Element} Div
 */
const MeasurePanelToolbar = () => {
	const { isFullScreenOpen } = useFullScreenStore();
	// 버튼 더블 클릭 시 거리 세부 설정이 가능한 모양을 보여줌
	const [showDistanceDetail, setShowDistanceDetail] = useState(false);
	// 버튼 더블 클릭 시 면적 세부 설정이 가능한 모양을 보여줌
	const [showExtentDetail, setShowExtentDetail] = useState(false);
	// 버튼 더블 클릭 시 동심원 세부 설정이 가능한 모양을 보여줌
	const [showRadiusDetail, setShowRadiusDetail] = useState(false);
	// 버튼 더블 클릭 시 레이더 세부 설정이 가능한 모양을 보여줌
	const [showRadarDetail, setShowRadarDetail] = useState(false);

	/**
	 * cross(단면) 차트가 떴을 때 x표시로 지우기 버튼이 작동하지 않는데, 그것이 d2라이브러리에 html이 들어가 있는데, 함수로 빼주질 않아서 그러함.
	 * 해당 태그를 찾고 아래와 같이 선택해줄 수 밖에 없음..
	 */
	useEffect(() => {
		document.addEventListener("click", function (event: any) {
			if (event.target.matches(".d2map_selected-cs-close")) {
				window.crossSection.destroy();
				window.eventManager.setMapMode("default");
				window.eventManager.setCursor("default");
			}
		});
	}, [document]);

	return (
		<>
			<div
				style={{
					margin: ".5%",
					alignItems: "center",
					position: "absolute",
					top: isFullScreenOpen === "f" ? "4em" : "11.3em",
					left: isFullScreenOpen === "f" ? "0.8em" : "16em",
					zIndex: 1000,
				}}
			>
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
							startIcon={<PolylineIcon fontSize="small" />}
							onClick={() =>
								measureDistance({
									speed: window.distance.getSpeed(),
									bearing: window.distance.getBearing(),
									unit: window.distance.getUnit(),
								})
							}
							onDoubleClick={() => setShowDistanceDetail(true)}
						>
							<Tooltip title="더블 클릭 시 상세 옵션 패널이 열림">
								<div>거리</div>
							</Tooltip>
						</ItemButton>
						<ItemButton
							color="inherit"
							startIcon={<AspectRatioIcon fontSize="small" />}
							onClick={() =>
								measureExtent({
									unit: window.area.getUnit(),
								})
							}
							onDoubleClick={() => setShowExtentDetail(true)}
						>
							<Tooltip title="더블 클릭 시 상세 옵션 패널이 열림">
								<div>면적</div>
							</Tooltip>
						</ItemButton>
						<ItemButton
							color="inherit"
							startIcon={<RadioButtonCheckedIcon fontSize="small" />}
							onClick={() =>
								measureRadius({
									endRadius: window.radiusCircle.endRadius,
									interval: window.radiusCircle.interval,
								})
							}
							onDoubleClick={() => setShowRadiusDetail(true)}
						>
							<Tooltip title="더블 클릭 시 상세 옵션 패널이 열림">
								<div>동심원</div>
							</Tooltip>
						</ItemButton>
						<ItemButton
							color="inherit"
							startIcon={<LeaderboardIcon fontSize="small" />}
							onClick={() => {
								// 이 기능은 뭔가 이상하게 작동됨.
								// 맵서버 terrain 관련 내용과 관련한 resource가 부족하다고도 뜸
								// 내부망에서도 그러면 주석 처리하는걸로
								window.eventManager.setMapMode("terrainAnalysis");
								window.crossSection.createCrossSection();
							}}
						>
							<Tooltip title="단면을 그으면 단면 그래프가 생성됨">
								<div>단면</div>
							</Tooltip>
						</ItemButton>
						<ItemButton
							color="inherit"
							startIcon={<RadarIcon fontSize="small" />}
							onClick={() => {
								measureRadar({
									startAngle: window.radar.startAngle,
									endAngle: window.radar.endAngle,
									outerRadius: window.radar.outerRadius,
									interval: window.radar.interval,
								});
							}}
							onDoubleClick={() => setShowRadarDetail(true)}
						>
							<Tooltip title="더블 클릭 시 상세 옵션 패널이 열림">
								<div>레이더</div>
							</Tooltip>
						</ItemButton>
						<ItemButton
							color="inherit"
							startIcon={<KeyboardOptionKeyIcon fontSize="small" />}
							onClick={() => measureSlope()}
						>
							<Tooltip title="기복(Slope) 측정">
								<div>기복</div>
							</Tooltip>
						</ItemButton>
						<ItemButton
							color="inherit"
							startIcon={<ExpandIcon fontSize="small" />}
							onClick={() => measureHeight()}
						>
							<Tooltip title="지도위 지점을 누르면 고도가 표시됨">
								<div>고도</div>
							</Tooltip>
						</ItemButton>
					</ButtonGroup>

					<ButtonGroup
						size="small"
						variant="contained"
						color="inherit"
						aria-label="measurement button handle group"
						disableElevation
						sx={{ opacity: 0.85, ml: 1 }}
					>
						{/* 이거 생각해보니 툴바 맨 왼쪽 화살표가 그 기능을 하고 있어서 일단 주석처리 */}
						{/* <ItemButton
							color="inherit"
							startIcon={<IndeterminateCheckBoxIcon fontSize="small" />}
							onClick={() => {
								window.eventManager.setMapMode("default");
							}}
						>
							<Tooltip title="측정모드 마우스 + 버튼이 종료되고 일반 맵모드로 전환됨 ">
								<div>측정종료</div>
							</Tooltip>
						</ItemButton> */}
						<ItemButton
							color="inherit"
							startIcon={<ClearIcon fontSize="small" />}
							onClick={() => {
								window.TerrainAnalysisManager.clear();
								window.eventManager.setMapMode("default");
							}}
						>
							<Tooltip title="현재 지도 상의 모든 측정값들을 지움">
								<div>초기화</div>
							</Tooltip>
						</ItemButton>
					</ButtonGroup>
				</ButtonsWrapper>
			</div>
			{showDistanceDetail && (
				<MeasureDistanceDetailModal
					open={showDistanceDetail}
					setOpen={() => setShowDistanceDetail(false)}
				/>
			)}
			{showExtentDetail && (
				<MeasureAreaDetailModal
					open={showExtentDetail}
					setOpen={() => setShowExtentDetail(false)}
				/>
			)}
			{showRadiusDetail && (
				<MeasureRadiusDetailModal
					open={showRadiusDetail}
					setOpen={() => setShowRadiusDetail(false)}
				/>
			)}
			{showRadarDetail && (
				<MeasureRadarDetailModal open={showRadarDetail} setOpen={() => setShowRadarDetail(false)} />
			)}
		</>
	);
};

export default MeasurePanelToolbar;

const ButtonsWrapper = styled("div")(() => ({
	display: "flex",
	alignItems: "center",
	marginLeft: 10,
}));

const ItemButton = styled(Button)(({ theme }) => ({
	background: theme.palette.background.default,
	padding: "6px 9px",
	borderColor: theme.palette.divider,
	"&:hover": {
		background: theme.palette.background.paper,
	},
}));
