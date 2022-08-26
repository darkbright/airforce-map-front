import useThemeStore from "../../../stores/useThemeStore";
import { theme } from "../../../styles/theme";
import { IconProps } from "../IconProp";

/**
 *  모서리가 둥근 사각형 아이콘
 * @param {IconProps} IconProps
 * @returns {JSX.Element} React Component(SVG)
 */
const RoundedSquareIcon = ({ width = 18, color }: IconProps) => {
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
			<path
				style={{
					fill: "none",
					stroke: chosenColor,
					strokeWidth: 14,
					strokeMiterlimit: 10,
				}}
				d="M143.3,175.2H56.7c-17.6,0-31.9-14.3-31.9-31.9
	V56.7c0-17.6,14.3-31.9,31.9-31.9h86.6c17.6,0,31.9,14.3,31.9,31.9v86.6C175.2,160.9,160.9,175.2,143.3,175.2z"
			/>
		</svg>
	);
};

export default RoundedSquareIcon;
