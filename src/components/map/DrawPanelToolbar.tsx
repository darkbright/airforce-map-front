import { ToggleButton, ToggleButtonGroup, Tooltip } from "@mui/material";
import { useState } from "react";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import ChangeHistoryIcon from "@mui/icons-material/ChangeHistory";
import SquareIcon from "@mui/icons-material/Square";
import CropSquareIcon from "@mui/icons-material/CropSquare";
import CircleIcon from "@mui/icons-material/Circle";

const DrawPanelToolbar = () => {
	const [alignment, setAlignment] = useState("lineString");
	// 선택된 토글버튼에 강조주기
	const handleChange = (event: React.MouseEvent<HTMLElement>, newAlignment: string) => {
		setAlignment(newAlignment);
	};

	const handleDrawLineSting = () => {
		// 여기에 직선 그리는 로직 추가
	};

	return (
		<>
			<div style={{ margin: ".5%" }}>
				<ToggleButtonGroup
					sx={{ marginLeft: "10px" }}
					size="small"
					color="primary"
					value={alignment}
					exclusive
					onChange={handleChange}
				>
					<ToggleButton value="lineString" onClick={handleDrawLineSting}>
						<Tooltip title="직선">
							<HorizontalRuleIcon fontSize="small" />
						</Tooltip>
					</ToggleButton>
					<ToggleButton value="triangle">
						<Tooltip title="삼각형">
							<ChangeHistoryIcon fontSize="small" />
						</Tooltip>
					</ToggleButton>
					<ToggleButton value="square">
						<Tooltip title="사각형">
							<SquareIcon fontSize="small" />
						</Tooltip>
					</ToggleButton>
					<ToggleButton value="roundedSquare">
						<Tooltip title="둥근사각형">
							<CropSquareIcon fontSize="small" />
						</Tooltip>
					</ToggleButton>
					<ToggleButton value="circle">
						<Tooltip title="원">
							<CircleIcon fontSize="small" />
						</Tooltip>
					</ToggleButton>
				</ToggleButtonGroup>
			</div>
		</>
	);
};

export default DrawPanelToolbar;
