import useThemeStore from "../../../stores/useThemeStore";
import { theme } from "../../../styles/theme";
import { IconProps } from "../IconProp";

/**
 * 부채꼴 형태의 아이콘
 * @param {IconProps} IconProps
 * @returns {JSX.Element} React Component(SVG)
 */
const FanShapedIcon = ({ width = 14, color }: IconProps) => {
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
				d="M100,100l-39.1,67.6c-24.1-13.9-39-39.8-39-67.6c0-42.8,35.3-78.1,78.1-78.1s78.1,35.3,78.1,78.1H100z"
			/>
		</svg>
	);
};

export default FanShapedIcon;
