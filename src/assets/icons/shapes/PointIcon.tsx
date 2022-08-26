import useThemeStore from "../../../stores/useThemeStore";
import { theme } from "../../../styles/theme";
import { IconProps } from "../IconProp";

/**
 * 점(Point) 모양 아이콘
 * @param {IconProps} IconProps
 * @returns {JSX.Element} React Component(SVG)
 */
const PointIcon = ({ width = 18, color }: IconProps) => {
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
			<circle cx="100" cy="100" r="44.4" fill={chosenColor} />
		</svg>
	);
};

export default PointIcon;
