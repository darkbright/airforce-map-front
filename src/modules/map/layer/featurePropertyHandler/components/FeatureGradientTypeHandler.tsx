import {
	Chip,
	FormControl,
	MenuItem,
	Select,
	SelectChangeEvent,
	Slider,
	Stack,
	Typography,
} from "@mui/material";
import { useState } from "react";
import { Color } from "react-color-palette";
import SpaceBetweenTextBox from "../../../../../components/box/textBox/SpaceBetweenTextBox";
import TextButton from "../../../../../components/button/TextButton";
import {
	BaseColorPicker,
	BaseColorPickerShowDot,
} from "../../../../../components/colorPicker/BaseColorPicker";
import { FeatureGradientList } from "../../../../../data/constants/gradient";
import { IGraphicUtil } from "../../../../../types/d2/Core/IGraphicUtil";
import { IGradient } from "../../../../../types/d2/Graphic";
import { isDarkColor } from "../../../../../utils/colorContrastHandler";

interface FeatureGradientTypeHandlerProps {
	gradientType: IGradient["type"];
	handleGradientType: (event: SelectChangeEvent) => void;
	handleAddGradientColor: () => void;
	gradientColors: number[][];
	graphicUtil: IGraphicUtil;
	onClickChip: (index: number) => void;
	onDeleteChip: (index: number) => void;
	selectedGradient: number;
	selectedGradientColor: Color;
	stopPoints: number[];
	handleStopPoint: (event: Event, newValue: number | number[]) => void;
	selectedGradientOpacity: number;
	handleGradientOpacity: (event: Event, newValue: number | number[]) => void;
	handleGradientColor: (color: Color) => void;
}

/**
 * 선 또는 채움(fill)에서 그라디언트 관련 내용을 핸들링함
 * @param FeatureGradientTypeHandlerProps FeatureGradientTypeHandlerProps
 * @returns {JSX.Element} div
 */
const FeatureGradientTypeHandler = ({
	gradientType,
	handleGradientType,
	handleAddGradientColor,
	gradientColors,
	graphicUtil,
	onClickChip,
	onDeleteChip,
	selectedGradient,
	selectedGradientColor,
	stopPoints,
	handleStopPoint,
	selectedGradientOpacity,
	handleGradientOpacity,
	handleGradientColor,
}: FeatureGradientTypeHandlerProps) => {
	const [openStopPointHandler, setOpenStopPointHandler] = useState(false);
	const [openGradientColorPicker, setOpenGradientColorPicker] = useState(false);

	return (
		<>
			<SpaceBetweenTextBox title="그라데이션 유형" marginBottom={16}>
				<FormControl fullWidth>
					<Select
						size="small"
						labelId="fill-pattern-select"
						id="fill-pattern-select"
						value={gradientType}
						onChange={handleGradientType}
					>
						{FeatureGradientList.map((g) => (
							<MenuItem key={g.value} value={g.value}>
								{g.kName}
							</MenuItem>
						))}
					</Select>
				</FormControl>
			</SpaceBetweenTextBox>
			<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
				<Typography variant="body1">그라디언트 컬러</Typography>
				<TextButton title="컬러 추가" type="button" onClick={handleAddGradientColor} />
			</div>

			<Stack
				mt={2}
				mb={2}
				direction="row"
				spacing={0}
				sx={{ flexWrap: "wrap", gap: 1, width: 340 }}
			>
				{gradientColors.map((color, index) => (
					<Chip
						key={index}
						label={`색상 ${index + 1}`}
						sx={{
							background: graphicUtil.rgb2hex(color),
							color: isDarkColor(color) ? "#fff" : "#000",
						}}
						onClick={() => {
							setOpenStopPointHandler(true);
							onClickChip(index);
						}}
						onDelete={() => onDeleteChip(index)}
					/>
				))}
			</Stack>
			{openStopPointHandler && (
				<>
					<SpaceBetweenTextBox title={`색상 ${selectedGradient + 1} 색상`} marginBottom={14}>
						<BaseColorPickerShowDot
							color={selectedGradientColor.hex}
							clickable
							circleSize="large"
							onClick={() => setOpenGradientColorPicker(true)}
						/>
					</SpaceBetweenTextBox>
					<SpaceBetweenTextBox
						title={`색상 ${selectedGradient + 1} 중지점`}
						childrenWidth="70%"
						marginBottom={10}
					>
						<Slider
							sx={{ mt: 1, width: "95%" }}
							value={stopPoints[selectedGradient] * 100}
							aria-label="fill gradient stopPoints"
							size="small"
							color="primary"
							onChange={handleStopPoint}
							valueLabelDisplay="auto"
						/>
					</SpaceBetweenTextBox>
					<SpaceBetweenTextBox
						title={`색상 ${selectedGradient + 1} 불투명도`}
						childrenWidth="70%"
						marginBottom={10}
					>
						<Slider
							sx={{ mt: 1, width: "95%" }}
							value={selectedGradientOpacity}
							aria-label="gradient-opacity"
							size="small"
							color="secondary"
							onChange={handleGradientOpacity}
							valueLabelDisplay="auto"
						/>
					</SpaceBetweenTextBox>
				</>
			)}
			<BaseColorPicker
				openColorPicker={openGradientColorPicker}
				setOpenColorPicker={() => setOpenGradientColorPicker(false)}
				color={selectedGradientColor}
				onColorChange={handleGradientColor}
			/>
		</>
	);
};

export default FeatureGradientTypeHandler;
