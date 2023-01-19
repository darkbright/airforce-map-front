import { Slider } from "@mui/material";
import { useState } from "react";
import { Color } from "react-color-palette";
import SpaceBetweenTextBox from "../../../../../components/box/textBox/SpaceBetweenTextBox";
import {
	BaseColorPicker,
	BaseColorPickerShowDot,
} from "../../../../../components/colorPicker/BaseColorPicker";

interface FeatureSimpleColorHandlerProps {
	color: Color;
	opacity: number;
	title: string;
	handleOpacityRate: (event: Event, newValue: number | number[]) => void;
	changeColor: (color: Color) => void;
}

/**
 * 선 또는 도형의 색상이 단색일 때, 색상 변경 및 불투명도 변경의 기능을 수행함
 * @param FeatureSimpleColorHandlerProps FeatureSimpleColorHandlerProps
 * @returns {JSX.Element} div
 */
const FeatureSimpleColorHandler = ({
	color,
	opacity,
	title,
	handleOpacityRate,
	changeColor,
}: FeatureSimpleColorHandlerProps) => {
	const [openColorPicker, setOpenColorPicker] = useState(false);

	return (
		<>
			<SpaceBetweenTextBox title={title} marginBottom={14}>
				<BaseColorPickerShowDot
					color={color.hex}
					clickable
					circleSize="large"
					onClick={() => setOpenColorPicker(true)}
				/>
			</SpaceBetweenTextBox>
			<SpaceBetweenTextBox title="불투명도" childrenWidth="50%" marginBottom={10}>
				<Slider
					sx={{ mt: 1, width: "95%" }}
					value={opacity}
					aria-label="fill opacity"
					size="small"
					color="secondary"
					onChange={handleOpacityRate}
					valueLabelDisplay="auto"
				/>
			</SpaceBetweenTextBox>
			<BaseColorPicker
				openColorPicker={openColorPicker}
				setOpenColorPicker={() => setOpenColorPicker(false)}
				color={color}
				onColorChange={changeColor}
			/>
		</>
	);
};

export default FeatureSimpleColorHandler;
