import useThemeStore from "../../../stores/useThemeStore";
import { theme } from "../../../styles/theme";
import { IconProps } from "../IconProp";

/**
 *  군대부호 심볼 아콘
 * @param {IconProps} IconProps
 * @returns {JSX.Element} React Component(SVG)
 */
const MilSymbolIcon = ({ width = 14, color }: IconProps) => {
	const { isDark } = useThemeStore();
	const chosenColor = color || theme(isDark).palette.text.secondary;

	const style = {
		fill: chosenColor,
	};

	return (
		<svg
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			x="0px"
			y="0px"
			viewBox="0 0 180 180"
			xmlSpace="preserve"
			width={width}
		>
			<path
				style={style}
				d="M83.6,41.2l12.1-12.1c2.3-2.3,2.3-6,0-8.3c-2.3-2.3-6-2.3-8.3,0L75.3,32.9L63.2,20.8
	c-2.3-2.3-6-2.3-8.3,0c-2.3,2.3-2.3,6,0,8.3l12.1,12.1L55,53.3c-2.3,2.3-2.3,6,0,8.3c1.1,1.1,2.6,1.7,4.1,1.7c1.5,0,3-0.6,4.1-1.7
	l12.1-12.1l12.1,12.1c1.1,1.1,2.6,1.7,4.1,1.7c1.5,0,3-0.6,4.1-1.7c2.3-2.3,2.3-6,0-8.3L83.6,41.2z"
			/>
			<path
				style={style}
				d="M134.9,41.8L147,29.7c2.3-2.3,2.3-6,0-8.3c-2.3-2.3-6-2.3-8.3,0l-12.1,12.1l-12.1-12.1
	c-2.3-2.3-6-2.3-8.3,0c-2.3,2.3-2.3,6,0,8.3l12.1,12.1l-12.1,12.1c-2.3,2.3-2.3,6,0,8.3c1.1,1.1,2.6,1.7,4.1,1.7
	c1.5,0,3-0.6,4.1-1.7l12.1-12.1l12.1,12.1c1.1,1.1,2.6,1.7,4.1,1.7c1.5,0,3-0.6,4.1-1.7c2.3-2.3,2.3-6,0-8.3L134.9,41.8z"
			/>
			<path
				style={style}
				d="M22.2,67.6v113.3h155.6V67.6H22.2z M87.6,123.9L37,159V88.6L87.6,123.9z M52.2,82.4h95.2l-47.8,33.2
	L52.2,82.4z M99.6,132.4l48.2,33.7H51.1L99.6,132.4z M111.7,124L163,88.4v71.5L111.7,124z"
			/>
		</svg>
	);
};

export default MilSymbolIcon;
