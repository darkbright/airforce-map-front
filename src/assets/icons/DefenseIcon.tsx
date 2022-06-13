import useThemeStore from "../../stores/useThemeStore";
import { theme } from "../../styles/theme";
import { IconProps } from "./IconProp";

const DefenseIcon = ({ width = 20, color }: IconProps) => {
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
			<rect x="59.2" y="-28.8" width="48" height="48" fill="none" />
			<path
				d="m96.1-17c-0.3-0.7-0.9-1.3-1.6-1.6s-1.6-0.3-2.3 0l-12.7 5.2-7.1-1.4-4 1.6 1.6 3.8-1.8 0.8 2.3 5.5 0.7-0.3v11.6h2v-3h3.1c0.4 1.7 2 3 3.9 3s3.4-1.3 3.9-3h6.5l1.5 3h3.1v-2h-1.9l-4.5-9h-7l-2.1-4.2 14.7-6.1c0.7-0.3 1.3-0.9 1.6-1.6 0.4-0.7 0.4-1.5 0.1-2.3zm-25 5 1.6-0.6 3.5 0.7-4.3 1.8-0.8-1.9zm17.2-2.8 0.8 1.8-17.3 7.2h-0.3l-0.7-1.7m9.4 13.7c-1.1 0-2-0.9-2-2s0.9-2 2-2 2 0.9 2 2-0.9 2-2 2zm9.4-3h-5.6c-0.4-1.7-2-3-3.9-3s-3.4 1.3-3.9 3h-3.1v-4h14.4l2.1 4zm-10-6h-6.4v-1.4l4.7-1.9 1.7 3.3zm11.3-11-0.8-1.8 2.8-1.1c0.2-0.1 0.5-0.1 0.8 0 0.2 0.1 0.4 0.3 0.5 0.5s0.1 0.5 0 0.8"
				fill={chosenColor}
			/>
			<path
				d="m30.5 3.3c-0.3-0.7-0.9-1.3-1.6-1.6s-1.6-0.3-2.3 0l-12.6 5.2-7.1-1.4-4 1.6 1.5 3.7-1.8 0.8 2.3 5.5 0.7-0.3v11.6h2v-3h3.1c0.4 1.7 2 3 3.9 3s3.4-1.3 3.9-3h6.5l1.5 3h3.1v-2h-1.9l-4.5-9h-7l-2.1-4.1 14.7-6.1c0.7-0.3 1.3-0.9 1.6-1.6 0.4-0.8 0.4-1.6 0.1-2.3zm-25 4.9 1.6-0.6 3.5 0.7-4.3 1.8-0.8-1.9zm17.3-2.8 0.8 1.8-17.4 7.2h-0.3l-0.7-1.7m9.4 13.7c-1.1 0-2-0.9-2-2s0.9-2 2-2 2 0.9 2 2-0.9 2-2 2zm9.4-3h-5.5c-0.4-1.7-2-3-3.9-3s-3.4 1.3-3.9 3h-3.1v-4h14.4l2 4zm-10-6h-6.4v-1.4l4.7-1.9 1.7 3.3zm11.4-10.9-0.8-1.8 2.8-1.1c0.2-0.1 0.5-0.1 0.8 0 0.2 0.1 0.4 0.3 0.5 0.5s0.1 0.5 0 0.8"
				fill={chosenColor}
			/>
		</svg>
	);
};

export default DefenseIcon;
