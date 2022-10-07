import useThemeStore from "../../../stores/useThemeStore";
import { theme } from "../../../styles/theme";
import { IconProps } from "../IconProp";

/**
 *  다각형(폴리곤) 아이콘
 * @param {IconProps} IconProps
 * @returns {JSX.Element} React Component(SVG)
 */
const PolygonIcon = ({ width = 14, color }: IconProps) => {
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
			<rect x="151" y="85.7" style={{ fill: chosenColor }} width="38.7" height="38.7" />
			<rect x="58.2" y="9.7" style={{ fill: chosenColor }} width="38.7" height="38.7" />
			<rect x="5.1" y="36.5" style={{ fill: chosenColor }} width="38.7" height="38.7" />
			<rect x="19.5" y="148.7" style={{ fill: chosenColor }} width="38.7" height="38.7" />
			<rect x="142.5" y="146.7" style={{ fill: chosenColor }} width="38.7" height="38.7" />
			<polygon
				style={{
					fill: "none",
					stroke: chosenColor,
					strokeWidth: 14,
					strokeMiterlimit: 10,
				}}
				points="34.4,171.5 160.3,171.5 170.4,110.4 
	75.7,28.5 16.5,53.5 "
			/>
		</svg>
	);
};

export default PolygonIcon;
