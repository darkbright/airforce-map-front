import { ToggleButton, ToggleButtonGroup, ToggleButtonProps, Tooltip } from "@mui/material";
import { useState } from "react";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import ChangeHistoryIcon from "@mui/icons-material/ChangeHistory";
import SquareIcon from "@mui/icons-material/Square";
import CropSquareIcon from "@mui/icons-material/CropSquare";
import CircleIcon from "@mui/icons-material/Circle";
import { initSidebarGraphicApp } from "./initSidebarGraphicApp"

const DrawPanelToolbar = () => {
	const [alignment, setAlignment] = useState("lineString");
	// 선택된 토글버튼에 강조주기



	const handleChange = ( tid: any, createID: any ) => {
		//let draw; // global so we can remove it later
		//setAlignment(newAlignment);
		//window.map.removeInteraction(draw);
		initSidebarGraphicApp(tid,createID);


	};

	const handleDrawFeature = ( tid: any, createID: any ) => {
		// 여기에 직선 그리는 로직 추가
		//window.map.removeInteraction(draw);
		initSidebarGraphicApp(tid,createID);

		/**
 * Handle change event.
 */
		}

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
					<ToggleButton value="lineString" onClick={()=>handleDrawFeature('create','createMode1')}>
						<Tooltip title="직선">
							<HorizontalRuleIcon fontSize="small" />
						</Tooltip>
					</ToggleButton>
					<ToggleButton value="lineString" onClick={()=>handleDrawFeature('create','createMode2')}>
						<Tooltip title="한쪽 화살표가 있는 직선">
							<HorizontalRuleIcon fontSize="small" />
						</Tooltip>
					</ToggleButton>
					<ToggleButton value="lineString" onClick={()=>handleDrawFeature('create','createMode3')}>
						<Tooltip title="양쪽 화살표가 있는 직선">
							<HorizontalRuleIcon fontSize="small" />
						</Tooltip>
					</ToggleButton>
					<ToggleButton value="lineString" onClick={()=>handleDrawFeature('create','createMode4')}>
						<Tooltip title="직선">
							<HorizontalRuleIcon fontSize="small" />
						</Tooltip>
					</ToggleButton>
					<ToggleButton value="Circle" onClick={()=>handleDrawFeature('create','createMode4')}>
						<Tooltip title="원">
							<CircleIcon fontSize="small" />
						</Tooltip>
					</ToggleButton>
					<ToggleButton value="lineString" onClick={()=>handleDrawFeature('create','createMode6')}>
						<Tooltip title="오각형">
							<HorizontalRuleIcon fontSize="small" />
						</Tooltip>
					</ToggleButton>
					<ToggleButton value="lineString" onClick={()=>handleDrawFeature('create','createMode7')}>
						<Tooltip title="작전활동부호 선형(우회)">
							<HorizontalRuleIcon fontSize="small" />
						</Tooltip>
					</ToggleButton>
					<ToggleButton value="lineString" onClick={()=>handleDrawFeature('create','createMode8')}>
						<Tooltip title="작전활동부호 선형(방위호형)">
							<HorizontalRuleIcon fontSize="small" />
						</Tooltip>
					</ToggleButton>
					<ToggleButton value="lineString" onClick={()=>handleDrawFeature('create','createMode9')}>
						<Tooltip title="다점전진축">
							<HorizontalRuleIcon fontSize="small" />
						</Tooltip>
					</ToggleButton>
					<ToggleButton value="lineString" onClick={()=>handleDrawFeature('create','createMode10')}>
						<Tooltip title="아군항공전진축">
							<HorizontalRuleIcon fontSize="small" />
						</Tooltip>
					</ToggleButton>
					<ToggleButton value="lineString" onClick={()=>handleDrawFeature('create','createMode11')}>
						<Tooltip title="작전활동부호 선형(경계-사단)">
							<HorizontalRuleIcon fontSize="small" />
						</Tooltip>
					</ToggleButton>
					<ToggleButton value="lineString" onClick={()=>handleDrawFeature('create','createMode12')}>
						<Tooltip title="작전활동부호 선형(경계-군단)">
							<HorizontalRuleIcon fontSize="small" />
						</Tooltip>
					</ToggleButton>
					<ToggleButton value="lineString" onClick={()=>handleDrawFeature('create','createMode13')}>
						<Tooltip title="작전활동부호 면형(공두보)">
							<HorizontalRuleIcon fontSize="small" />
						</Tooltip>
					</ToggleButton>
					<ToggleButton value="lineString" onClick={()=>handleDrawFeature('create','createMode14')}>
						<Tooltip title="작전활동부호 선형(엄폐)">
							<HorizontalRuleIcon fontSize="small" />
						</Tooltip>
					</ToggleButton>
					<ToggleButton value="lineString" onClick={()=>handleDrawFeature('create','createMode15')}>
						<Tooltip title="작전활동부호 선형(비행회랑)">
							<HorizontalRuleIcon fontSize="small" />
						</Tooltip>
					</ToggleButton>
					<ToggleButton value="triangle" onClick={()=>handleDrawFeature('create','createMode16')}>
						<Tooltip title="rectangle">
							<ChangeHistoryIcon fontSize="small" />
						</Tooltip>
					</ToggleButton>
					<ToggleButton value="square" onClick={()=>handleDrawFeature('create','createMode17')}>
						<Tooltip title="arc">
							<CropSquareIcon fontSize="small" />
						</Tooltip>
					</ToggleButton>
					<ToggleButton value="square" onClick={()=>handleDrawFeature('create','createMode18')}>
						<Tooltip title="점">
							<SquareIcon fontSize="small" />
						</Tooltip>
					</ToggleButton>
					<ToggleButton value="square" onClick={()=>handleDrawFeature('create','createMode19')}>
						<Tooltip title="폴리라인">
							<SquareIcon fontSize="small" />
						</Tooltip>
					</ToggleButton>
					<ToggleButton value="square" onClick={()=>handleDrawFeature('create','createMode20')}>
						<Tooltip title="폴리곤">
							<SquareIcon fontSize="small" />
						</Tooltip>
					</ToggleButton>
					<ToggleButton value="square" onClick={()=>handleDrawFeature('create','createMode21')}>
						<Tooltip title="스플라인">
							<SquareIcon fontSize="small" />
						</Tooltip>
					</ToggleButton>
					<ToggleButton value="square" onClick={()=>handleDrawFeature('create','createMode22')}>
						<Tooltip title="패곡선스프라인">
							<SquareIcon fontSize="small" />
						</Tooltip>
					</ToggleButton>
					<ToggleButton value="roundedSquare" onClick={()=>handleDrawFeature('create','createMode23')}>
						<Tooltip title="육각형">
							<CropSquareIcon fontSize="small" />
						</Tooltip>
					</ToggleButton>
					<ToggleButton value="roundedSquare" onClick={()=>handleDrawFeature('create','createMode24')}>
						<Tooltip title="텍스트">
							<CropSquareIcon fontSize="small" />
						</Tooltip>
					</ToggleButton>
				</ToggleButtonGroup>
			</div>
		</>
	);
};

export default DrawPanelToolbar;
