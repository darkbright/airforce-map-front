import {
	FormControlLabel,
	FormGroup,
	InputAdornment,
	styled,
	Switch,
	ToggleButton,
	ToggleButtonGroup,
	Typography,
} from "@mui/material";
import { ChangeEvent, MouseEvent, ReactNode, useState } from "react";
import DefaultBox from "../../components/box/DefaultBox";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import {
	BaseColorPicker,
	BaseColorPickerShowDot,
} from "../../components/colorPicker/BaseColorPicker";
import { useColor, Color } from "react-color-palette";
import SpaceBetweenTextBox from "../../components/box/textBox/SpaceBetweenTextBox";
import { mapGridLayerListType } from "../../data/constants/mapGridLayerList";
import { gridGenerator } from "../../libs/d2/mapSettings/grid/gridGenerator";
import {
	getGridColor,
	getGridLabel,
	getGridLineType,
	getGridWidth,
	isGridOnMap,
} from "../../libs/d2/mapSettings/grid/checkGrid";
import TextInput from "../../components/form/TextInput";

import DashLineIcon from "../../assets/icons/lineTypes/DashLineIcon";
import OneLineIcon from "../../assets/icons/lineTypes/OneLineIcon";
import DotLineIcon from "../../assets/icons/lineTypes/DotLineIcon";
import DashDotLineIcon from "../../assets/icons/lineTypes/DashDotLineIcon";
import DashDotDotLineIcon from "../../assets/icons/lineTypes/DashDotDotLineIcon";
import { isArrayEqual } from "../../utils/compareArray";

interface MapGridLayerItemBoxProps {
	gridLayer: mapGridLayerListType;
}

interface LineTypeType {
	name: string;
	icon: ReactNode;
	// [첫번째 숫자: 라인의 px 길이, 두번째 숫자: 첫번째 숫자와의 갭  ]
	dashLine: number[];
}

// 선 종류 표기
const lineType: LineTypeType[] = [
	{
		name: "solid",
		icon: <OneLineIcon />,
		dashLine: [],
	},
	{ name: "dash", icon: <DashLineIcon />, dashLine: [15, 30] },
	{
		name: "dot",
		icon: <DotLineIcon />,
		dashLine: [3, 10],
	},
	{
		name: "dashdot",
		icon: <DashDotLineIcon />,
		dashLine: [15, 8, 4, 8],
	},
	{
		name: "dashdotdot",
		icon: <DashDotDotLineIcon />,
		dashLine: [20, 4, 4, 4, 4, 4, 4],
	},
];

// 그리드 설정 내 개별 그리드에 대한 선 색상, 선 굵기, 선 종류 등을 선택할 수 있도록 하는 패널
const MapGridLayerItemBox = ({ gridLayer }: MapGridLayerItemBoxProps) => {
	const [layerAdded, setLayerAdded] = useState(isGridOnMap(gridLayer));
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const [openColorPicker, setOpenColorPicker] = useState(false);
	const [color, setColor] = useColor("hex", getGridColor(gridLayer));
	const [lineWidth, setLineWidth] = useState(getGridWidth(gridLayer));
	const defaultLineType = lineType.find((l) =>
		isArrayEqual(l.dashLine, getGridLineType(gridLayer)),
	)?.name;
	const [selectedLineType, setSelectedLineType] = useState(defaultLineType);
	const [showLabel, setShowLabel] = useState(getGridLabel(gridLayer));

	// 그리드 추가 및 삭제
	const handleAddRemoveGridLayer = () => {
		if (!isGridOnMap(gridLayer)) {
			gridGenerator(gridLayer);
			setLayerAdded(true);
		} else {
			window.map.getLayers().forEach((element: any) => {
				if (element.get("name") === gridLayer.name) {
					window.map.removeLayer(element);
				}
			});
			setLayerAdded(false);
		}
	};

	// 생성된 그리드의 선 색상을 변경함
	const changeLineColor = (color: Color) => {
		setColor(color);
		window.map.getLayers().forEach((element: any) => {
			if (element.get("name") === gridLayer.name) {
				// TO_BE_CHECKED
				// 색상 바꿀 때 뭔가 한박자씩 느려짐 특정 스크롤에서 색상이 안바뀌어 있는건 왜 그런걸까
				element.styleProperty.setGridColor(color.hex);
			}
		});
	};

	// 생성된 그리드의 선의 굵기를 변경함.
	const changeLineWidth = (event: ChangeEvent<HTMLInputElement>) => {
		setLineWidth(Number(event.target.value));
		window.map.getLayers().forEach((element: any) => {
			if (element.get("name") === gridLayer.name) {
				element.styleProperty.setGridWidth(lineWidth);
			}
		});
	};

	// 점선 또는 선의 종류를 선택해서 보여줌
	const changeLineType = (event: MouseEvent<HTMLElement>, selected: string) => {
		setSelectedLineType(selected);
		const selectedType = lineType.find((s) => s.name === selected)?.dashLine;
		window.map.getLayers().forEach((element: any) => {
			if (element.get("name") === gridLayer.name) {
				element.styleProperty.setGridLineType(selectedType);
			}
		});
	};

	// 생성된 그리드의 라벨을 보여줄지 말지 정함
	const changeDisplayLabel = () => {
		window.map.getLayers().forEach((element: any) => {
			if (element.get("name") === gridLayer.name) {
				element.styleProperty.setLabelVisible(!showLabel);
			}
		});
		setShowLabel(!showLabel);
	};

	return (
		<DefaultBox padding="2% 3%" marginBottom={10} isBackgroundPaper={false}>
			<Root>
				<Root>
					<Typography variant="body1" sx={{ pr: 1 }}>
						{gridLayer.title}
					</Typography>
					<BaseColorPickerShowDot color={color.hex} clickable={false} />
				</Root>

				<Root>
					<FormGroup>
						<FormControlLabel
							control={
								<Switch
									checked={layerAdded}
									color="primary"
									size="small"
									onChange={handleAddRemoveGridLayer}
								/>
							}
							label={layerAdded ? "적용됨" : "미적용"}
						/>
					</FormGroup>
					{layerAdded ? (
						dropdownOpen ? (
							<KeyboardArrowUpIcon
								color="action"
								onClick={() => setDropdownOpen(false)}
								sx={{ ...IconStyle, mr: 0.5 }}
							/>
						) : (
							<KeyboardArrowDownIcon
								color="action"
								onClick={() => setDropdownOpen(true)}
								sx={{ ...IconStyle, mr: 0.5 }}
							/>
						)
					) : (
						""
					)}
				</Root>
			</Root>
			{dropdownOpen && (
				<DefaultBox marginTop={10}>
					<SpaceBetweenTextBox title="선 색상" marginBottom={10}>
						<BaseColorPickerShowDot
							color={color.hex}
							circleSize="medium"
							onClick={() => setOpenColorPicker(true)}
						/>
					</SpaceBetweenTextBox>
					<SpaceBetweenTextBox title="선 굵기" marginBottom={10}>
						<TextInput
							type="number"
							variant="outlined"
							value={lineWidth}
							size="small"
							onChange={changeLineWidth}
							InputProps={{
								endAdornment: <InputAdornment position="end">px</InputAdornment>,
							}}
						/>
					</SpaceBetweenTextBox>
					<SpaceBetweenTextBox title="선 종류" marginBottom={10}>
						{/* soild, dash, dot, dashdot, dashdotdot */}
						<ToggleButtonGroup
							value={selectedLineType}
							exclusive
							onChange={changeLineType}
							aria-label="line-alignment"
							size="small"
						>
							{lineType.map((line) => (
								<ToggleButton key={line.name} value={line.name} aria-label={line.name}>
									{line.icon}
								</ToggleButton>
							))}
						</ToggleButtonGroup>
					</SpaceBetweenTextBox>
					<BaseColorPicker
						openColorPicker={openColorPicker}
						setOpenColorPicker={() => setOpenColorPicker(false)}
						color={color}
						onColorChange={changeLineColor}
					/>
					<SpaceBetweenTextBox title="라벨 표시">
						<FormGroup>
							<FormControlLabel
								control={
									<Switch
										checked={showLabel}
										color="secondary"
										size="small"
										onChange={changeDisplayLabel}
									/>
								}
								label={showLabel ? "표시" : "숨기기"}
							/>
						</FormGroup>
					</SpaceBetweenTextBox>
				</DefaultBox>
			)}
		</DefaultBox>
	);
};

export default MapGridLayerItemBox;

const Root = styled("div")(() => ({
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
}));

const IconStyle = {
	cursor: "pointer",
	opacity: 0.4,
	"&:hover": { opacity: 1 },
};
