import useThemeStore from "../../../stores/useThemeStore";
import { theme } from "../../../styles/theme";
import { IconProps } from "../IconProp";

/**
 *  다점전진축 - 화살표 모양의 전진 Line 모양 아이콘으로 꺾인 포인트가 더 있는듯?
 * @param {IconProps} IconProps
 * @returns {JSX.Element} React Component(SVG)
 */
const ImageIcon = ({ width = 18, color }: IconProps) => {
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
			viewBox="0 0 200 200"
			enableBackground="new 0 0 200 200"
			xmlSpace="preserve"
			width={width}
		>
			<g>
				<polygon style={style} points="19.8,166.7 67.6,74.5 113.1,142.8 145,110.9 180.2,166.7 	" />
				<circle style={style} cx="156.8" cy="49.5" r="16.2" />
			</g>
		</svg>
	);
};

export default ImageIcon;
