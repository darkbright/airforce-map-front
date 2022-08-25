import useThemeStore from "../../stores/useThemeStore";
import { theme } from "../../styles/theme";
import { IconProps } from "./IconProp";

/**
 * 활주로 모양 또는 도로 모양의 공군 아이콘 (공군이 만든 디자인 참고)
 * @param {IconProps} IconProps
 * @returns {JSX.Element} React Component(SVG)
 */
const RunwayIcon = ({ width = 20, color }: IconProps) => {
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
				d="m6.7 27.9h-2v-26h2v26zm4-26h-2v26h2v-26zm7 0h-2v4h2v-4zm0 7h-2v4h2v-4zm0 8h-2v4h2v-4zm0 7h-2v4h2v-4zm7-22h-2v26h2v-26zm4 0h-2v26h2v-26z"
				fill={chosenColor}
			/>
		</svg>
	);
};

export default RunwayIcon;
