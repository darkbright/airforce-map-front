import useThemeStore from "../../../stores/useThemeStore";
import { theme } from "../../../styles/theme";
import { IconProps } from "../IconProp";

/**
 *  폴리라인 아이콘
 * @param {IconProps} IconProps
 * @returns {JSX.Element} React Component(SVG)
 */
const PolyLineIcon = ({ width = 14, color }: IconProps) => {
	const { isDark } = useThemeStore();
	const chosenColor = color || theme(isDark).palette.text.secondary;

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
			<path
				style={{
					fill: "none",
					stroke: chosenColor,
					strokeWidth: 14,
					strokeMiterlimit: 10,
				}}
				d="M19.4,166.1h134c9.9-2.8,35.7-29.4,30-66.1
	c-5-32-32-58.2-67-63.9"
			/>
			<rect x="89.4" y="17.1" width="38.7" height="38.7" />
			<rect x="97" y="141.7" width="38.7" height="38.7" />
			<rect x="15" y="141.7" width="38.7" height="38.7" />
		</svg>
	);
};

export default PolyLineIcon;
