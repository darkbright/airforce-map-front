import useThemeStore from "../../../stores/useThemeStore";
import { theme } from "../../../styles/theme";
import { IconProps } from "../IconProp";

/**
 *  다점전진축 - 화살표 모양의 전진 Line 모양 아이콘으로 꺾인 포인트가 더 있는듯?
 * @param {IconProps} IconProps
 * @returns {JSX.Element} React Component(SVG)
 */
const MultiPointForwardAxisIcon = ({ width = 14, color }: IconProps) => {
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
				d="M20.2,32.5"
			/>
			<polyline
				style={{
					fill: "none",
					stroke: chosenColor,
					strokeWidth: 14,
					strokeMiterlimit: 10,
				}}
				points="155.9,44.7 187.5,123.9 180.2,175.6 
	78.8,175.6 59.6,154.4 31.7,80.4 12.5,88.2 22.4,34.9 24.6,24.4 32.7,30.4 76.2,62.8 56.9,70.1 79.3,128 91.2,143.5 153.3,143.5 
	150.7,122.3 123.8,56.6 "
			/>
		</svg>
	);
};

export default MultiPointForwardAxisIcon;
