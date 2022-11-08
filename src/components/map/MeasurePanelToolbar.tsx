import { styled, ToggleButton, ToggleButtonGroup, Tooltip } from "@mui/material";
import { useState } from "react";
import useFullScreenStore from "../../stores/useFullScreenStore";
import PolylineIcon from "@mui/icons-material/Polyline";
import AspectRatioIcon from "@mui/icons-material/AspectRatio";
import { measureDistance } from "../../libs/d2/mapSettings/measurement/measureDistance";
import { measureExtent } from "../../libs/d2/mapSettings/measurement/measureExtent";
import StopCircleIcon from "@mui/icons-material/StopCircle";
import ClearIcon from "@mui/icons-material/Clear";

/**
 * 측정과 관련된 동작들을 보여주는 Div로, MapToolbar에서 측정 버튼을 누르면 나온디
 * @returns {JSX.Element} Div
 */
const MeasurePanelToolbar = () => {
	const [alignment, setAlignment] = useState<string | null>("select");
	const { isFullScreenOpen } = useFullScreenStore();

	const handleChange = (event: React.MouseEvent<HTMLElement>, newAlignment: string) => {
		setAlignment(newAlignment);
	};

	return (
		<>
			<div
				style={{
					margin: ".5%",
					display: "flex",
					alignItems: "center",
					position: "absolute",
					top: isFullScreenOpen === "f" ? "4em" : "11.3em",
					left: isFullScreenOpen === "f" ? "0.8em" : "16em",
					zIndex: 1000,
				}}
			>
				<ToggleButtonGroup
					sx={{
						marginLeft: "10px",
						background: (theme) => theme.palette.background.default,
						opacity: 0.9,
					}}
					size="small"
					color="primary"
					value={alignment}
					exclusive
					onChange={handleChange}
				>
					<ToggleButton
						sx={{ lineHeight: 1 }}
						value="measureDistance"
						aria-label="measureDistance"
						onClick={measureDistance}
					>
						<Tooltip title="거리 측정">
							<TextButtonWrapper>
								<PolylineIcon fontSize="small" />
								거리 측정
							</TextButtonWrapper>
						</Tooltip>
					</ToggleButton>
					<ToggleButton
						sx={{ lineHeight: 1 }}
						value="measureExtent"
						aria-label="measureExtent"
						onClick={measureExtent}
					>
						<Tooltip title="면적 측정">
							<TextButtonWrapper>
								<AspectRatioIcon fontSize="small" />
								면적 측정
							</TextButtonWrapper>
						</Tooltip>
					</ToggleButton>
					<ToggleButton
						sx={{ lineHeight: 1 }}
						value="stopMeasure"
						aria-label="stopMeasure"
						onClick={() => window.eventManager.setMapMode("default")}
					>
						<Tooltip title="측정 중지">
							<TextButtonWrapper>
								<StopCircleIcon fontSize="small" />
								측정 중지
							</TextButtonWrapper>
						</Tooltip>
					</ToggleButton>
					<ToggleButton
						sx={{ lineHeight: 1 }}
						value="resetMeasured"
						aria-label="resetMeasured"
						onClick={() => {
							window.TerrainAnalysisManager.clear();
							window.eventManager.setMapMode("default");
						}}
					>
						<Tooltip title="측정결과 모두 삭제">
							<div>
								<ClearIcon fontSize="small" />
							</div>
						</Tooltip>
					</ToggleButton>
				</ToggleButtonGroup>
			</div>
		</>
	);
};

export default MeasurePanelToolbar;

const TextButtonWrapper = styled("div")(() => ({
	display: "flex",
	flexDirection: "row",
	justifyContent: "space-between",
	width: 65,
	alignItems: "center",
}));
