import { ToggleButton, ToggleButtonGroup, Tooltip } from "@mui/material";
import { ReactElement, useState } from "react";
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
// import PolyLineIcon from "../../assets/icons/shapes/PolyLineIcon";
import RoundedSquareIcon from "../../assets/icons/shapes/RoundedSquareIcon";
import SectorIcon from "../../assets/icons/shapes/SectorIcon";
import SquareIcon from "../../assets/icons/shapes/SquareIcon";
import SplineIcon from "../../assets/icons/shapes/SplineIcon";
import StraightLineIcon from "../../assets/icons/shapes/StraightLineIcon";
import TextIcon from "../../assets/icons/shapes/TextIcon";
import TriangleIcon from "../../assets/icons/shapes/TriangleIcon";

import {
	ShapesOnToolbarShaper,
	GraphicShapeType,
} from "../../libs/d2/mapSettings/draw/ShapesOnToolbarShaper";
import MilSymbolIcon from "../../assets/icons/shapes/MilSymbolIcon";

/**
 * 툴바에 그릴 도형의 이름과 타이틀을 정의할 수 있도록 도움을 주는 인터페이스
 */
interface ShapesListProps {
	value: GraphicShapeType;
	title: string;
	icon: ReactElement;
}

/**
 * 툴바에 그려질 도형 리스트
 */
const shapesList: ShapesListProps[] = [
	{
		value: "point",
		title: "포인트",
		icon: <PointIcon />,
	},
	{
		value: "straightLine",
		title: "직선",
		icon: <StraightLineIcon />,
	},
	{
		value: "straightLineWithOneArrow",
		title: "한쪽 화살표 직선",
		icon: <StraightLineIcon arrowNumber={1} />,
	},
	{
		value: "straigntLineWithTwoArrows",
		title: "양쪽 화살표 직선",
		icon: <StraightLineIcon arrowNumber={2} />,
	},
	{
		value: "spline",
		title: "곡선",
		icon: <SplineIcon />,
	},
	{
		value: "triangle",
		title: "삼각형",
		icon: <TriangleIcon />,
	},
	{
		value: "rectangle",
		title: "사각형",
		icon: <SquareIcon />,
	},
	{
		value: "roundedRectangle",
		title: "둥근사각형",
		icon: <RoundedSquareIcon />,
	},
	{
		value: "polygon",
		title: "다각형",
		icon: <PolygonIcon />,
	},
	{
		value: "BSpline",
		title: "B Spline",
		icon: <BSplineIcon />,
	},
	{
		value: "pentagon",
		title: "오각형",
		icon: <PentagonIcon />,
	},
	{
		value: "hexagon",
		title: "육각형",
		icon: <HexagonIcon />,
	},
	{
		value: "circle",
		title: "원",
		icon: <CircleIcon />,
	},
	{
		value: "fanShaped",
		title: "부채꼴",
		icon: <FanShapedIcon />,
	},
	{
		value: "arc",
		title: "원호",
		icon: <ArcIcon />,
	},
	{
		value: "text",
		title: "텍스트",
		icon: <TextIcon />,
	},
	{
		value: "sector",
		title: "섹터",
		icon: <SectorIcon />,
	},
	{
		value: "forwardAxis",
		title: "전진축",
		icon: <ForwardAxisIcon />,
	},
	{
		value: "multiPointForwardAxis",
		title: "다점전진축",
		icon: <MultiPointForwardAxisIcon />,
	},
	{
		value: "FlightForwradAxis",
		title: "비행점진축",
		icon: <FlightForwradAxisIcon />,
	},
	{
		value: "combatBoundary",
		title: "전투지경선",
		icon: <CombatBoundaryIcon />,
	},
	{
		value: "image",
		title: "이미지",
		icon: <ImageIcon />,
	},
];

/**
 * 맵 내 툴바에서 도형 관련 아이콘을 눌렀을 때 나오는 각종 도형 그리기 툴바 Component
 * @returns {JSX.Element} React Component
 */
const DrawPanelToolbar = () => {
	// 선택된 토글 버튼의 value 값이 무엇인지 파악하고, 그 값을 유지시켜 툴바 내에서 하이라이트를 줌
	const [alignment, setAlignment] = useState("");

	// 선택된 토글버튼에 강조주기
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
					top: "3.2em",
					left: 3,
					zIndex: 1500,
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
					{shapesList.map((shape) => (
						<ToggleButton
							key={shape.value}
							sx={{ lineHeight: 1 }}
							value={shape.value}
							onClick={() => {
								ShapesOnToolbarShaper({
									tid: shape.value,
								});
							}}
						>
							<Tooltip title={shape.title}>
								<div>{shape.icon}</div>
							</Tooltip>
						</ToggleButton>
					))}
				</ToggleButtonGroup>
				<ToggleButton
					sx={{
						ml: 2,
						background: (theme) => theme.palette.background.default,
						opacity: 0.9,
						"&:hover": { background: (theme) => theme.palette.background.paper },
					}}
					size="small"
					color="primary"
					value="military Symbol"
					onClick={() => {
						console.log("milsym");
					}}
				>
					<Tooltip title="군대부호 탐색기">
						<div>
							<MilSymbolIcon />
						</div>
					</Tooltip>
				</ToggleButton>
			</div>
		</>
	);
};

export default DrawPanelToolbar;
