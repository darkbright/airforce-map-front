import useThemeStore from "../../../stores/useThemeStore";
import { theme } from "../../../styles/theme";
import { IconProps } from "../IconProp";

/**
 *  섹터(부채꼴) 모양의 아이콘으로 inner 부분도 휘어있음
 * @param {IconProps} IconProps
 * @returns {JSX.Element} React Component(SVG)
 */
const SectorIcon = ({ width = 14, color }: IconProps) => {
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
			<g>
				<path
					style={{
						fill: "none",
						stroke: chosenColor,
						strokeWidth: 14,
						strokeMiterlimit: 10,
					}}
					d="M134.8,163.2c-22.3-7.6-47.3-7.6-69.7,0
		c-13.8-40.5-31-80.2-51.3-118.9c54.4-20.1,117.9-20.1,172.3,0C165.8,82.9,148.7,122.7,134.8,163.2z"
				/>
			</g>
		</svg>
	);
};

export default SectorIcon;
