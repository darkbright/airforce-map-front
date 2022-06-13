import useThemeStore from "../../stores/useThemeStore";
import { theme } from "../../styles/theme";
import { IconProps } from "./IconProp";

const OperationSharingIcon = ({ width = 20, color }: IconProps) => {
	const { isDark } = useThemeStore();
	return (
		<svg
			enableBackground="new 0 0 33.4 29.9"
			version="1.1"
			viewBox="0 0 33.4 29.9"
			xmlSpace="preserve"
			xmlns="http://www.w3.org/2000/svg"
			width={width}
		>
			<polyline points="70 73.4 22 73.4 22 25.4 70 25.4" fill="none" />
			<g fill={color || theme(isDark).palette.text.secondary}>
				<path d="m5.7 16.9v-1h2l-3-4-3 4h2v1c0 6.1 4.9 11 11 11h4v-2h-4c-5 0-9-4-9-9z" />
				<path d="m29.7 13.9v-1c0-6.1-4.9-11-11-11h-4v2h4c5 0 9 4 9 9v1h-2l3 4 3-4h-2z" />
				<rect x="15.7" y="7.9" width="2" height="10" />
				<rect x="15.7" y="19.9" width="2" height="2" />
			</g>
		</svg>
	);
};

export default OperationSharingIcon;
