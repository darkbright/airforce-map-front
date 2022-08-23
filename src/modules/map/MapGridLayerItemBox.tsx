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
import { useState } from "react";
import DefaultBox from "../../components/box/DefaultBox";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import {
	BaseColorPicker,
	BaseColorPickerShowDot,
} from "../../components/colorPicker/BaseColorPicker";
import { useColor } from "react-color-palette";
import SpaceBetweenTextBox from "../../components/box/textBox/SpaceBetweenTextBox";
import TextInput from "../../components/form/TextInput";
import DashLineIcon from "../../assets/icons/lineTypes/DashLineIcon";
import OneLineIcon from "../../assets/icons/lineTypes/OneLineIcon";
import DotLineIcon from "../../assets/icons/lineTypes/DotLineIcon";
import DashDotLineIcon from "../../assets/icons/lineTypes/DashDotLineIcon";
import DashDotDotLineIcon from "../../assets/icons/lineTypes/DashDotDotLineIcon";

interface MapGridLayerItemBoxProps {
	title: string;
}

// 선 종류 표기
const lineType = [
	{
		name: "solid",
		icon: <OneLineIcon />,
	},
	{ name: "dash", icon: <DashLineIcon /> },
	{
		name: "dot",
		icon: <DotLineIcon />,
	},
	{
		name: "dashdot",
		icon: <DashDotLineIcon />,
	},
	{
		name: "dashdotdot",
		icon: <DashDotDotLineIcon />,
	},
];

// 그리드 설정 내 개별 그리드에 대한 선 색상, 선 굵기, 선 종류 등을 선택할 수 있도록 하는 패널
const MapGridLayerItemBox = ({ title }: MapGridLayerItemBoxProps) => {
	const [layerAdded, setLayerAdded] = useState(false);
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const [openColorPicker, setOpenColorPicker] = useState(false);
	const [color, setColor] = useColor("hex", "#ffffff");
	const [lineWidth, setLineWidth] = useState(1);
	const [selectedLineType, setSelectedLineType] = useState("solid");

	const handleLineTypeChange = (event: React.MouseEvent<HTMLElement>, selected: string) => {
		setSelectedLineType(selected);
	};

	return (
		<DefaultBox padding="2% 3%" marginBottom={10} isBackgroundPaper={false}>
			<Root>
				<Root>
					<Typography variant="body1" sx={{ pr: 1 }}>
						{title}
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
									onChange={() => setLayerAdded(!layerAdded)}
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
							onChange={(event) => setLineWidth(Number(event.target.value))}
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
							onChange={handleLineTypeChange}
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
						onColorChange={(color) => {
							setColor(color);
						}}
					/>
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
