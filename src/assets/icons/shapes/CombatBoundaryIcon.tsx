import useThemeStore from "../../../stores/useThemeStore";
import { theme } from "../../../styles/theme";
import { IconProps } from "../IconProp";

/**
 *  전투지경선 - 라인이 이리저리 꼬인 모양
 * @param {IconProps} IconProps
 * @returns {JSX.Element} React Component(SVG)
 */
const CombatBoundaryIcon = ({ width = 18, color }: IconProps) => {
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
			<path style={style} d="M23.9,23.5" />
			<path
				style={style}
				d="M101.7,129.1c-4.8,1.2-22,4.9-32.9-4.8c-4.3-3.8-6-8.4-7.2-12.1c-10.2-30-17.3-50.6-6.8-65.7
	c6.5-9.4,11.1-4.1,34.8-22.7c4-3.1,7.1-5.8,11.1-5.3c9.5,1.2,14.2,19.2,15.9,26.1c1.8,6.8,1.1,8.6,0.5,9.7
	c-3.6,6.1-15.3,1.6-19.8,7.2c-2.1,2.6-2.5,7.3,3.9,22.2c6.7,15.6,16.1,37.6,24.2,36.2c7.9-1.4,3-23.7,18.4-35.3
	c9.6-7.2,25.4-9,32.4-2.4c12.1,11.4-3.6,45.7-15,63.3c-8.8,13.6-18.7,28.9-37.2,34.3c-21.6,6.3-41.7-4.8-61.9-15.9
	c-20.6-11.4-34.5-24.9-42.5-33.8"
			/>
		</svg>
	);
};

export default CombatBoundaryIcon;
