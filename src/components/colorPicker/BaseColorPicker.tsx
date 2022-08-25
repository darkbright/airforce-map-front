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

/**
 * 컬러피커와 연계하여, 현재 선택한 색상이 어떤 색인지를 🟠 와 같은 원 형태로 보여줌
 * clickable을 활성화하면 커서의 모양이 "pointer"로 변경되고 클릭하면 event를 활성시킬 수 있음.
 * @param {BaseColorPickerShowDotProps}  BaseColorPickerShowDotProps
 * @returns {JSX.Element} React Component
 */
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

/**
 * react-color-palette 라이브러리의 컬러피커 구현체임. 여기서는 사용성을 위해 모달 안에 집어넣었음.
 *
 * 색상보드에서 마우스로 색상을 선택하면, "hex" | "rgba"| "hsv" 의 컬러타입과 해당하는 값을 리턴해줌
 * @param {BaseColorPickerProps } BaseColorPickerProps
 * @return {JSX.Element} React Component
 */
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
