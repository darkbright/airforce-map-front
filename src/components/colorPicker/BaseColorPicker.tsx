import CircleIcon from "@mui/icons-material/Circle";
import useThemeStore from "../../stores/useThemeStore";
import { Color, ColorPicker } from "react-color-palette";
import { OnChangeCallback } from "react-color-palette/lib/interfaces/ColorPicker.interface";
import "react-color-palette/lib/css/styles.css";
import "../../styles/colorPicker.css";
import { Dialog } from "@mui/material";

interface BaseColorPickerShowDotProps {
	color: string;
	onClick?: () => void;
	clickable?: boolean;
	circleSize?: "small" | "inherit" | "medium" | "large" | undefined;
}

interface BaseColorPickerProps {
	color: Color;
	onColorChange: OnChangeCallback;

	openColorPicker: boolean;
	setOpenColorPicker: () => void;
}

// 현재 색상이 어떤 색상인지 표시해주는 UI

export const BaseColorPickerShowDot = ({
	color,
	clickable = true,
	onClick,
	circleSize = "small",
}: BaseColorPickerShowDotProps) => {
	const { isDark } = useThemeStore();

	return (
		<CircleIcon
			sx={{
				color,
				cursor: clickable ? "pointer" : "default",
				border: isDark === "light" ? `0.5px solid #e7e5e5` : "none",
				borderRadius: "50%",
			}}
			fontSize={circleSize}
			onClick={onClick}
		/>
	);
};

// 색상 선택 팔레트를 모달에서 띄움
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
