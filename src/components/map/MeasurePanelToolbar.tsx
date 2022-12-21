import { Button, ButtonGroup, styled, Tooltip } from "@mui/material";
import useFullScreenStore from "../../stores/useFullScreenStore";
import PolylineIcon from "@mui/icons-material/Polyline";
import AspectRatioIcon from "@mui/icons-material/AspectRatio";
import { measureDistance } from "../../libs/d2/mapSettings/measurement/measureDistance";
import { measureExtent } from "../../libs/d2/mapSettings/measurement/measureExtent";
import ClearIcon from "@mui/icons-material/Clear";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import MeasureDistanceDetailModal from "../../modules/map/measure/MeasureDistanceDetailModal";
import { useState } from "react";
import MeasureAreaDetailModal from "../../modules/map/measure/MeasureAreaDetailModal";
import { measureRadius } from "../../libs/d2/mapSettings/measurement/measureRadius";
import MeasureRadiusDetailModal from "../../modules/map/measure/MeasureRadiusDetailModal";

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
								<div>거리 측정</div>
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
								<div>면적 측정</div>
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
								<div>동심원 측정</div>
							</Tooltip>
						</ItemButton>
						<ItemButton
							color="inherit"
							onClick={() => {
								window.eventManager.setMapMode("default");
							}}
						>
							측정모드 종료
						</ItemButton>
						<ItemButton
							color="inherit"
							startIcon={<ClearIcon fontSize="small" />}
							onClick={() => {
								window.TerrainAnalysisManager.clear();
								window.eventManager.setMapMode("default");
							}}
						>
							초기화
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
