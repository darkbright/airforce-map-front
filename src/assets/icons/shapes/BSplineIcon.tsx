import useThemeStore from "../../../stores/useThemeStore";
import { theme } from "../../../styles/theme";
import { IconProps } from "../IconProp";

/**
 *  곡선으로 만든 도형(퍼거슨 스플라인, B-Spline) 형태의 아이콘
 * @param {IconProps} IconProps
 * @returns {JSX.Element} React Component(SVG)
 */
const BSplineIcon = ({ width = 14, color }: IconProps) => {
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
				d="M33.4,42.6C11.9,77.3,7.9,145.1,31.5,169.9c4.7,4.9,12.3,10.1,68.8-1.3c75.9-15.3,81.3-28.5,82.9-34.4
	c5.5-19.8-5.6-51.4-22.6-62.4c-28.1-18.2-58.1,29.5-80.1,10.2C63.7,67.3,68.8,28.6,55.1,24.8C46,22.3,36.8,37.2,33.4,42.6z"
			/>
		</svg>
	);
};

export default BSplineIcon;
