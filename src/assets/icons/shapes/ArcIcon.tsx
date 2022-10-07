import useThemeStore from "../../../stores/useThemeStore";
import { theme } from "../../../styles/theme";
import { IconProps } from "../IconProp";

/**
 *  호 모양의 아이콘
 * @param {IconProps} IconProps
 * @returns {JSX.Element} React Component(SVG)
 */
const ArcIcon = ({ width = 14, color }: IconProps) => {
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
				d="M132.1,17.6c39.6,21.8,57.8,67.4,44.7,106.5c-11.3,33.8-45.6,61.9-84.6,58c-40.9-4.1-74.4-42.2-73.2-88.4"
			/>
		</svg>
	);
};

export default ArcIcon;
