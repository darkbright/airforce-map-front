import useThemeStore from "../../stores/useThemeStore";
import { theme } from "../../styles/theme";
import { IconProps } from "./IconProp";

const HumanIcon = ({ width = 20, color }: IconProps) => {
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
				d="m21.7 12.9h-10c-3.3 0-6 2.7-6 6v8h22v-8c0-3.3-2.7-6-6-6zm4 12h-18v-6c0-2.2 1.8-4 4-4h10c2.2 0 4 1.8 4 4v6zm-9-14c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4zm0-6c1.1 0 2 0.9 2 2s-0.9 2-2 2-2-0.9-2-2 0.9-2 2-2z"
				fill={chosenColor}
			/>
		</svg>
	);
};

export default HumanIcon;
