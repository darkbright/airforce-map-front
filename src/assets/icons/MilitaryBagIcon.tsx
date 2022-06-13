import useThemeStore from "../../stores/useThemeStore";
import { theme } from "../../styles/theme";
import { IconProps } from "./IconProp";

const MilitaryBagIcon = ({ width = 20, color }: IconProps) => {
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
				d="m28.7 17.9h-1v-8.3c1.2-0.6 2-1.8 2-3.1 0-1.9-1.6-3.5-3.5-3.5h-2.5v-2h-2v2h-10v-2h-2v2h-2.5c-1.9 0-3.5 1.6-3.5 3.5 0 1.4 0.8 2.6 2 3.1v8.4h-1c-1.7 0-3 1.3-3 3v5c0 1.7 1.3 3 3 3h24c1.7 0 3-1.3 3-3v-5c0-1.7-1.4-3.1-3-3.1zm-1-11.5c0 0.8-0.7 1.5-1.5 1.5h-2.5v-3h2.5c0.8 0 1.5 0.7 1.5 1.5zm-6 1.5h-10v-3h10v3zm-14.5-3h2.5v3h-2.5c-0.8 0-1.5-0.7-1.5-1.5s0.6-1.5 1.5-1.5zm-1.5 22h-1c-0.6 0-1-0.5-1-1v-5c0-0.6 0.5-1 1-1h1v7zm20 0h-18v-17h2v4h2v-4h10v4h2v-4h2v17zm4-1c0 0.6-0.5 1-1 1h-1v-7h1c0.6 0 1 0.5 1 1v5zm-20-1h14v-7h-14v7zm2-5h10v3h-10v-3z"
				fill={chosenColor}
			/>
		</svg>
	);
};

export default MilitaryBagIcon;
