import { FormControl, MenuItem, Select, SelectChangeEvent, Slider } from "@mui/material";
import { useState } from "react";
import { Color } from "react-color-palette";
import SpaceBetweenTextBox from "../../../../../components/box/textBox/SpaceBetweenTextBox";
import {
	BaseColorPicker,
	BaseColorPickerShowDot,
} from "../../../../../components/colorPicker/BaseColorPicker";
import { featurePatternList } from "../../../../../data/constants/featurePatternList";
import { IPatternType } from "../../../../../types/d2/Graphic";

interface FeaturePatternHandlerProps {
	/**
	 * 패턴의 종류
	 */
	fillPattern: IPatternType;
	/**
	 * 패턴의 종류를 바꿈
	 */
	handleFillPattern: (event: SelectChangeEvent) => void;
	/**
	 * 패턴의 백그라운드(배경 색상)
	 */
	fillPatternBgColor: Color;
	/**
	 * 패턴의 백그라운드 불투명도
	 */
	patternBgOpacity: number;
	/**
	 * 패턴의 백그라운드 투명도를 바꿈
	 */
	handlePatternBgOpacity: (event: Event, newValue: number | number[]) => void;
	/**
	 * 패턴의 전경 색상
	 */
	fillPatternFgColor: Color;
	/**
	 * 패턴의 전경 불투명도
	 */
	patternFgOpacity: number;
	/**
	 * 패턴의 전경 불투명도를 바꿈
	 */
	handlePatternFgOpacity: (event: Event, newValue: number | number[]) => void;
	/**
	 * 패턴의 백그라운드 색상을 바꿈
	 */
	changePatternBgColor: (color: Color) => void;
	/**
	 * 패턴의 전경 색상을 바꿈
	 */
	changePatternFgColor: (color: Color) => void;
}

/**
 * 선 또는 채움(fill)에서 패턴 관련 내용을 핸들링함
 * @param FeaturePatternHandlerProps FeaturePatternHandlerProps
 * @returns {JSX.Element} div
 */
const FeaturePatternHandler = ({
	fillPattern,
	handleFillPattern,
	fillPatternBgColor,
	patternBgOpacity,
	handlePatternBgOpacity,
	fillPatternFgColor,
	patternFgOpacity,
	handlePatternFgOpacity,
	changePatternBgColor,
	changePatternFgColor,
}: FeaturePatternHandlerProps) => {
	const [openPatternBgPicker, setOpenPatternBgPicker] = useState(false);
	const [openPatternFgPicker, setOpenPatternFgPicker] = useState(false);

	return (
		<>
			<SpaceBetweenTextBox title="패턴 타입" marginBottom={16}>
				<FormControl fullWidth>
					<Select
						size="small"
						labelId="fill-pattern-select"
						id="fill-pattern-select"
						value={fillPattern}
						onChange={handleFillPattern}
					>
						{featurePatternList.map((pattern) => (
							<MenuItem key={pattern.value} value={pattern.value}>
								{pattern.eName}
							</MenuItem>
						))}
					</Select>
				</FormControl>
			</SpaceBetweenTextBox>
			<SpaceBetweenTextBox title="배경 색상" marginBottom={14}>
				<BaseColorPickerShowDot
					color={fillPatternBgColor.hex}
					clickable
					circleSize="large"
					onClick={() => setOpenPatternBgPicker(true)}
				/>
			</SpaceBetweenTextBox>
			<SpaceBetweenTextBox title="배경 불투명도" childrenWidth="50%" marginBottom={10}>
				<Slider
					sx={{ mt: 1, width: "95%" }}
					value={patternBgOpacity}
					aria-label="fill-pattern-bg-opacity"
					size="small"
					color="secondary"
					onChange={handlePatternBgOpacity}
					valueLabelDisplay="auto"
				/>
			</SpaceBetweenTextBox>
			<SpaceBetweenTextBox title="전경 색상" marginBottom={14}>
				<BaseColorPickerShowDot
					color={fillPatternFgColor.hex}
					clickable
					circleSize="large"
					onClick={() => setOpenPatternFgPicker(true)}
				/>
			</SpaceBetweenTextBox>
			<SpaceBetweenTextBox title="전경 불투명도" childrenWidth="50%" marginBottom={10}>
				<Slider
					sx={{ mt: 1, width: "95%" }}
					value={patternFgOpacity}
					aria-label="fill-pattern-fg-opacity"
					size="small"
					color="secondary"
					onChange={handlePatternFgOpacity}
					valueLabelDisplay="auto"
				/>
			</SpaceBetweenTextBox>
			<BaseColorPicker
				openColorPicker={openPatternBgPicker}
				setOpenColorPicker={() => setOpenPatternBgPicker(false)}
				color={fillPatternBgColor}
				onColorChange={changePatternBgColor}
			/>
			<BaseColorPicker
				openColorPicker={openPatternFgPicker}
				setOpenColorPicker={() => setOpenPatternFgPicker(false)}
				color={fillPatternFgColor}
				onColorChange={changePatternFgColor}
			/>
		</>
	);
};

export default FeaturePatternHandler;
