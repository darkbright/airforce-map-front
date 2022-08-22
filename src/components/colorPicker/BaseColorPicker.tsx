import CircleIcon from "@mui/icons-material/Circle";
import useThemeStore from "../../stores/useThemeStore";
import { Color, ColorPicker } from "react-color-palette";
import { OnChangeCallback } from "react-color-palette/lib/interfaces/ColorPicker.interface";
import "react-color-palette/lib/css/styles.css";
import "../../styles/colorPicker.css";
import { Dialog } from "@mui/material";

interface BaseColorPickerShowDotProps {
	color: string;
	onClick: () => void;
}

interface BaseColorPickerProps {
	color: Color;
	onColorChange: OnChangeCallback;
	openColorPicker: boolean;
	setOpenColorPicker: () => void;
}

export const BaseColorPickerShowDot = ({ color, onClick }: BaseColorPickerShowDotProps) => {
	return <CircleIcon sx={{ color, cursor: "pointer" }} fontSize="small" onClick={onClick} />;
};

export const BaseColorPicker = ({
	color,
	onColorChange,
	openColorPicker,
	setOpenColorPicker,
}: BaseColorPickerProps) => {
	const { isDark } = useThemeStore();

	return (
		<Dialog open={openColorPicker} onClose={setOpenColorPicker}>
			<ColorPicker
				width={250}
				height={180}
				color={color}
				onChange={onColorChange}
				dark={isDark === "dark"}
				hideHSV
			/>
		</Dialog>
	);
};
