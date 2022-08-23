import useThemeStore from "../../../stores/useThemeStore";
import { theme } from "../../../styles/theme";
import { IconProps } from "../IconProp";

const DashDotDotLineIcon = ({ width = 22, color }: IconProps) => {
	const { isDark } = useThemeStore();
	const chosenColor = color || theme(isDark).palette.text.secondary;

	return (
		<svg
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
			x="0px"
			y="0px"
			viewBox="0 0 50 50"
			enableBackground="new 0 0 50 50"
			xmlSpace="preserve"
			width={width}
		>
			<g>
				<rect x="4.8" y="23" width="11.4" height="4" fill={chosenColor} />
				<rect x="22.7" y="23" width="11.4" height="4" fill={chosenColor} />
				<circle cx="43" cy="25" r="2.3" fill={chosenColor} />
			</g>
		</svg>
	);
};

export default DashDotDotLineIcon;
