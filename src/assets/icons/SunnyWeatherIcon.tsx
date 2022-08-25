import useThemeStore from "../../stores/useThemeStore";
import { theme } from "../../styles/theme";
import { IconProps } from "./IconProp";

/**
 * 바다 위에 해가 뜨는 것 같은 공군 아이콘 (공군이 만든 디자인 참고)
 * @param {IconProps} IconProps
 * @returns {JSX.Element} React Component(SVG)
 */
const SunnyWeatherIcon = ({ width = 20, color }: IconProps) => {
	const { isDark } = useThemeStore();
	const chosenColor = color || theme(isDark).palette.text.secondary;

	return (
		<svg
			enableBackground="new 0 0 33.4 29.9"
			version="1.1"
			viewBox="0 0 33.4 29.9"
			xmlSpace="preserve"
			xmlns="http://www.w3.org/2000/svg"
			width={width}
		>
			<path
				d="m10.7 15.9c0-3.3 2.7-6 6-6s6 2.7 6 6c0 0.3 0 0.7-0.1 1h-2.1c0.1-0.3 0.1-0.7 0.1-1 0-2.2-1.8-4-4-4s-4 1.8-4 4c0 0.3 0.1 0.7 0.1 1h-2.1c0.1-0.3 0.1-0.6 0.1-1zm7-14h-2v5h2v-5zm9.6 4.8-1.4-1.4-3.5 3.5 1.4 1.4 3.5-3.5zm-1.6 8.2v2h5v-2h-5zm-18 2v-2h-5v2h5zm3.3-8-3.5-3.6-1.4 1.4 3.5 3.5 1.4-1.3zm-8.3 14h28v-2h-28v2zm5 5h18v-2h-18v2z"
				fill={chosenColor}
			/>
		</svg>
	);
};

export default SunnyWeatherIcon;
