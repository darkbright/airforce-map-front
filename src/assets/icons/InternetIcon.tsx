import useThemeStore from "../../stores/useThemeStore";
import { theme } from "../../styles/theme";
import { IconProps } from "./IconProp";

/**
 * 인터넷(지구 모양에 동그라미에 격차 있는거 - 🌐 이거) 공군 아이콘 (공군이 만든 디자인 참고)
 * @param {IconProps} IconProps
 * @returns {JSX.Element} React Component(SVG)
 */
const InternetIcon = ({ width = 20, color }: IconProps) => {
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
				d="m16.7 0.9c-7.7 0-14 6.3-14 14s6.3 14 14 14 14-6.3 14-14-6.3-14-14-14zm11.9 13.3h-4.2c-0.1-1.9-0.3-3.8-0.8-5.4 0.8-0.5 1.5-1 2.2-1.6 1.6 1.9 2.7 4.3 2.8 7zm-10.5 12.6c-0.2 0-0.4 0-0.7 0.1v-6.2c1.5 0.1 3 0.5 4.4 1.1-0.9 2.5-2.2 4.3-3.7 5zm5.1-4.2c0.6 0.4 1.1 0.8 1.6 1.2-1 0.9-2.2 1.7-3.5 2.2 0.7-0.9 1.4-2.1 1.9-3.4zm-11.7-0.8c1.4-0.6 2.8-1 4.4-1.1v6.2c-0.2 0-0.4 0-0.7-0.1-1.5-0.7-2.8-2.5-3.7-5zm0.5 4.2c-1.3-0.5-2.4-1.3-3.5-2.2 0.5-0.5 1-0.9 1.6-1.2 0.6 1.3 1.2 2.5 1.9 3.4zm3.3-23c0.2 0 0.4 0 0.7-0.1v6.2c-1.5-0.1-3-0.5-4.4-1.1 0.8-2.4 2.1-4.3 3.7-5zm-5.1 4.3c-0.6-0.3-1.1-0.7-1.6-1.2 1-0.9 2.2-1.7 3.5-2.2-0.8 0.9-1.4 2.1-1.9 3.4zm11.6 0.8c-1.4 0.6-2.8 1-4.4 1.1v-6.2c0.2 0 0.4 0 0.7 0.1 1.5 0.6 2.8 2.5 3.7 5zm-0.5-4.2c1.3 0.5 2.4 1.3 3.5 2.2-0.5 0.5-1 0.9-1.6 1.2-0.5-1.3-1.2-2.5-1.9-3.4zm-5.4 6.7v3.5h-5.5c0.1-1.7 0.3-3.3 0.7-4.7 1.5 0.8 3.2 1.2 4.8 1.2zm0 5.1v3.5c-1.6 0.1-3.3 0.5-4.8 1.2-0.4-1.4-0.6-3-0.7-4.7h5.5zm1.5 3.5v-3.5h5.5c-0.1 1.7-0.3 3.3-0.7 4.7-1.5-0.7-3.1-1.1-4.8-1.2zm0-5v-3.5c1.6-0.1 3.3-0.5 4.8-1.2 0.4 1.4 0.6 3 0.7 4.7h-5.5zm-9.9-7c0.7 0.6 1.5 1.1 2.2 1.6-0.5 1.6-0.7 3.5-0.8 5.4h-4.2c0.2-2.7 1.2-5.1 2.8-7zm-2.8 8.5h4.2c0.1 1.9 0.3 3.8 0.8 5.4-0.8 0.5-1.5 1-2.2 1.6-1.6-1.9-2.6-4.3-2.8-7zm21.1 7c-0.7-0.6-1.4-1.1-2.2-1.6 0.5-1.6 0.7-3.5 0.8-5.4h4.2c-0.1 2.7-1.2 5.1-2.8 7z"
				fill={chosenColor}
			/>
		</svg>
	);
};

export default InternetIcon;
