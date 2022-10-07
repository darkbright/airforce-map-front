import useThemeStore from "../../../stores/useThemeStore";
import { theme } from "../../../styles/theme";
import { IconProps } from "../IconProp";

/**
 *  비행전진축 - 화살표 모양의 전진 Line 모양 아이콘
 * @param {IconProps} IconProps
 * @returns {JSX.Element} React Component(SVG)
 */
const FlightForwardAxisIcon = ({ width = 14, color }: IconProps) => {
	const { isDark } = useThemeStore();
	const chosenColor = color || theme(isDark).palette.text.secondary;

	const style = {
		fill: "none",
		stroke: chosenColor,
		strokeWidth: 14,
		strokeMiterlimit: 10,
	};

	return (
		<svg
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
			x="0px"
			y="0px"
			viewBox="0 0 180 180"
			xmlSpace="preserve"
			width={width}
		>
			<path style={style} d="M23.9,23.5" />
			<g>
				<polyline style={style} points="38.9,55.6 19.6,148.8 54.4,128.3 153.1,128.3 180.4,142.9 	" />
				<polyline style={style} points="35.9,60.5 122.6,21 110.3,59.5 132.2,155.6 152.5,179 	" />
			</g>
		</svg>
	);
};

export default FlightForwardAxisIcon;
