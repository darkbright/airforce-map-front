import useThemeStore from "../../stores/useThemeStore";
import { theme } from "../../styles/theme";
import { IconProps } from "./IconProp";

const WarehouseIcon = ({ width = 20, color }: IconProps) => {
	const { isDark } = useThemeStore();
	const chosenColor = color || theme(isDark).palette.text.secondary;

	return (
		<svg
			enableBackground="new 0 0 33.4 29.9"
			version="1.1"
			viewBox="0 0 33.4 29.9"
			xmlSpace="preserve"
			xmlns="http://www.w3.org/2000/svg"
			width={width}
		>
			<path
				d="m16.7 2.4-15.7 3.2v21.8h31.4v-21.8l-15.7-3.2zm7.8 23h-15.7v-2h15.7v2zm0-4h-15.7v-2h15.7v2zm0-4h-15.7v-2h15.7v2zm5.9 8h-3.9v-12h-19.6v12h-3.9v-18.1l13.7-2.8 13.7 2.8v18.1z"
				fill={chosenColor}
			/>
		</svg>
	);
};

export default WarehouseIcon;
