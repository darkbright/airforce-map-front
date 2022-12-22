import useThemeStore from "../../stores/useThemeStore";
import { theme } from "../../styles/theme";
import { IconProps } from "./IconProp";

/**
 * 공군 기본심볼 중 기본 기지 모양 (동그라미에 활주로가 있다는 "그 모양" )
 * @param {IconProps} IconProps
 * @returns {JSX.Element} React Component(SVG)
 */
const BasicSymbolRunwayIcon = ({ width = 20, color }: IconProps) => {
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
			<circle
				style={{ fill: "none", stroke: chosenColor, strokeMiterlimit: 10 }}
				cx="15.72"
				cy="15.72"
				r="10.5"
			/>
			<rect
				x="2.94"
				y="13.92"
				style={{ fill: "none", stroke: chosenColor, strokeMiterlimit: 10 }}
				width="25.56"
				height="3.66"
			/>
		</svg>
	);
};

export default BasicSymbolRunwayIcon;
