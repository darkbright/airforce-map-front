import { ToggleButton, ToggleButtonGroup, ToggleButtonProps, Tooltip } from "@mui/material";
import { useState } from "react";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import ChangeHistoryIcon from "@mui/icons-material/ChangeHistory";
//import SquareIcon from "@mui/icons-material/Square";
import CropSquareIcon from "@mui/icons-material/CropSquare";
//import CircleIcon from "@mui/icons-material/Circle";
import ArcIcon from "../../assets/icons/shapes/ArcIcon";
import BSplineIcon from "../../assets/icons/shapes/BSplineIcon";
import CircleIcon from "../../assets/icons/shapes/CircleIcon";
import CombatBoundaryIcon from "../../assets/icons/shapes/CombatBoundaryIcon";
import FanShapedIcon from "../../assets/icons/shapes/FanShapedIcon";
import FlightForwradAxisIcon from "../../assets/icons/shapes/FlightForwradAxisIcon";
import ForwardAxisIcon from "../../assets/icons/shapes/ForwardAxisIcon";
import HexagonIcon from "../../assets/icons/shapes/HexagonIcon";
import ImageIcon from "../../assets/icons/shapes/ImageIcon";
import MultiPointForwardAxisIcon from "../../assets/icons/shapes/MultiPointForwardAxisIcon";
import PentagonIcon from "../../assets/icons/shapes/PentagonIcon";
import PointIcon from "../../assets/icons/shapes/PointIcon";
import PolygonIcon from "../../assets/icons/shapes/PolygonIcon";
import PolyLineIcon from "../../assets/icons/shapes/PolyLineIcon";
import RoundedSquareIcon from "../../assets/icons/shapes/RoundedSquareIcon";
import SectorIcon from "../../assets/icons/shapes/SectorIcon";
import SquareIcon from "../../assets/icons/shapes/SquareIcon";
import SplineIcon from "../../assets/icons/shapes/SplineIcon";
import StraightLineIcon from "../../assets/icons/shapes/StraightLineIcon";
import TextIcon from "../../assets/icons/shapes/TextIcon";
import TriangleIcon from "../../assets/icons/shapes/TriangleIcon";
import DashDotDotLineIcon from "../../assets/icons/lineTypes/DashDotDotLineIcon";
import DashDotLineIcon from "../../assets/icons/lineTypes/DashDotLineIcon";
import DashLineIcon from "../../assets/icons/lineTypes/DashLineIcon";
import DotLineIcon from "../../assets/icons/lineTypes/DotLineIcon";
import OneLineIcon from "../../assets/icons/lineTypes/OneLineIcon";
import { GraphicToolApp } from "./GraphicToolApp"

const DrawPanelToolbar = () => {
	const [alignment, setAlignment] = useState("");
	// 선택된 토글버튼에 강조주기



	const handleChange = ( tid: any ) => {
		//let draw; // global so we can remove it later
		//setAlignment(newAlignment);
		//window.map.removeInteraction(draw);
		GraphicToolApp(tid);


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
					<ToggleButton value="point" onClick={()=>GraphicToolApp('point')}>
						<Tooltip title="포인트">
							<PointIcon />
						</Tooltip>
					</ToggleButton>
					
					<ToggleButton value="straightLine" onClick={()=>GraphicToolApp('straightLine')}>
						<Tooltip title="직선">
							<StraightLineIcon />
						</Tooltip>
					</ToggleButton>
					<ToggleButton value="polyline" onClick={()=>GraphicToolApp('polyline')}>
						<Tooltip title="연결선">
							<PolyLineIcon />
						</Tooltip>
					</ToggleButton>
					<ToggleButton value="spline" onClick={()=>GraphicToolApp('spline')}>
						<Tooltip title="곡선">
							<SplineIcon />
						</Tooltip>
					</ToggleButton>

					<ToggleButton value="triangle" onClick={()=>GraphicToolApp('triangle')}>
						<Tooltip title="삼각형">
							<TriangleIcon />
						</Tooltip>
					</ToggleButton>
					<ToggleButton value="rectangle" onClick={()=>GraphicToolApp('rectangle')}>
						<Tooltip title="사각형">
							<SquareIcon />
						</Tooltip>
					</ToggleButton>
					<ToggleButton value="rectangleround" onClick={()=>GraphicToolApp('rectangleround')}>
						<Tooltip title="둥근사각형">
							<RoundedSquareIcon />
						</Tooltip>
					</ToggleButton>
					<ToggleButton value="polygon" onClick={()=>GraphicToolApp('polygon')}>
						<Tooltip title="다각형">
							<PolygonIcon />
						</Tooltip>
					</ToggleButton>
					
					<ToggleButton value="BSpline" onClick={()=>GraphicToolApp('BSpline')}>
						<Tooltip title="포인트">
							<BSplineIcon />
						</Tooltip>
					</ToggleButton>
					<ToggleButton value="pentagon" onClick={()=>GraphicToolApp('pentagon')}>
						<Tooltip title="오각형">
							<PentagonIcon />
						</Tooltip>
					</ToggleButton>
					
					<ToggleButton value="hexagon" onClick={()=>GraphicToolApp('hexagon')}>
						<Tooltip title="육각형">
							<HexagonIcon />
						</Tooltip>
					</ToggleButton>
					
					<ToggleButton value="circle" onClick={()=>GraphicToolApp('circle')}>
						<Tooltip title="타원">
							<CircleIcon />
						</Tooltip>
					</ToggleButton>
					
					<ToggleButton value="fanShaped" onClick={()=>GraphicToolApp('fanShaped')}>
						<Tooltip title="포인트">
							<FanShapedIcon />
						</Tooltip>
					</ToggleButton>
					<ToggleButton value="arcIcon" onClick={()=>GraphicToolApp('arcIcon')}>
						<Tooltip title="원호">
							<ArcIcon />
						</Tooltip>
					</ToggleButton>
					<ToggleButton value="text" onClick={()=>GraphicToolApp('text')}>
						<Tooltip title="텍스트">
							<TextIcon />
						</Tooltip>
					</ToggleButton>
					<ToggleButton value="sector" onClick={()=>GraphicToolApp('sector')}>
						<Tooltip title="섹터">
							<SectorIcon />
						</Tooltip>
					</ToggleButton>
					
					<ToggleButton value="forwardAxis" onClick={()=>GraphicToolApp('forwardAxis')}>
						<Tooltip title="포인트">
							<ForwardAxisIcon />
						</Tooltip>
					</ToggleButton>
					
					<ToggleButton value="multiPointForwardAxis" onClick={()=>GraphicToolApp('multiPointForwardAxis')}>
						<Tooltip title="포인트">
							<MultiPointForwardAxisIcon />
						</Tooltip>
					</ToggleButton>
					<ToggleButton value="FlightForwradAxis" onClick={()=>GraphicToolApp('FlightForwradAxis')}>
						<Tooltip title="포인트">
							<FlightForwradAxisIcon />
						</Tooltip>
					</ToggleButton>
					
					<ToggleButton value="combatBoundary" onClick={()=>GraphicToolApp('combatBoundary')}>
						<Tooltip title="포인트">
							<CombatBoundaryIcon />
						</Tooltip>
					</ToggleButton>
					
					<ToggleButton value="image" onClick={()=>GraphicToolApp('image')}>
						<Tooltip title="이미지">
							<ImageIcon />
						</Tooltip>
					</ToggleButton>
				</ToggleButtonGroup>
			</div>
		</>
	);
};

export default DrawPanelToolbar;
