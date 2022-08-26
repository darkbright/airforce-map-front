import useThemeStore from "../../../stores/useThemeStore";
import { theme } from "../../../styles/theme";
import { IconProps } from "../IconProp";

/**
 *  전진축 - 화살표 모양의 전진 Line 모양 아이콘
 * @param {IconProps} IconProps
 * @returns {JSX.Element} React Component(SVG)
 */
const ForwardAxisIcon = ({ width = 18, color }: IconProps) => {
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
			<polyline
				style={{
					fill: "none",
					stroke: chosenColor,
					strokeWidth: 14,
					strokeMiterlimit: 10,
				}}
				points="71.5,174 118,153 59.5,73.6 35.2,88.9 
	35.2,32.3 35.2,14.5 57,20.8 119.3,40.8 93.9,54.7 164.8,147.3 162.9,165.2 114.1,185.5 "
			/>
		</svg>
	);
};

export default ForwardAxisIcon;
