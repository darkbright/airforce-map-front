import useThemeStore from "../../../stores/useThemeStore";
import { theme } from "../../../styles/theme";
import { IconProps } from "../IconProp";

/**
 *  스플라인(곡선의 여러 개의 점) 아이콘
 * @param {IconProps} IconProps
 * @returns {JSX.Element} React Component(SVG)
 */
const SplineIcon = ({ width = 18, color }: IconProps) => {
	const { isDark } = useThemeStore();
	const chosenColor = color || theme(isDark).palette.text.secondary;

	return (
		<svg
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
			x="0px"
			y="0px"
			viewBox="0 0 200 200"
			enableBackground="new 0 0 200 200"
			xmlSpace="preserve"
			width={width}
		>
			<rect x="134.4" y="13.1" width="38.7" height="38.7" />
			<rect x="9.3" y="142.9" width="38.7" height="38.7" />
			<path
				style={{
					fill: "none",
					stroke: chosenColor,
					strokeWidth: 14,
					strokeMiterlimit: 10,
				}}
				d="M34.6,161.1c-14.7-30.6,0.5-60.8,18.7-66
	c13.1-3.8,22.3,31.8,51.9,37c19.1,3.4,40.1-6.6,50.8-21c16.6-22.3,11.5-58.9-16.6-83"
			/>
		</svg>
	);
};

export default SplineIcon;
