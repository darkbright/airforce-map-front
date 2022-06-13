import useThemeStore from "../../stores/useThemeStore";
import { theme } from "../../styles/theme";
import { IconProps } from "./IconProp";

const MapIcon = ({ width = 20, color }: IconProps) => {
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
			<g fill={chosenColor}>
				<circle cx="16.7" cy="8.9" r="1.4" />
				<path d="m27.5 11.2h-6.1c0.4-0.8 0.8-1.8 0.8-2.8 0-3.1-2.5-5.5-5.5-5.5s-5.5 2.5-5.5 5.5c0 1 0.3 1.9 0.8 2.8h-6.1l-5.3 15.7h32.1l-5.2-15.7zm-10.8-6.4c2 0 3.7 1.7 3.7 3.7 0 0.8-0.5 2-1.3 3.2-0.9 1.3-1.9 2.1-2.3 2.4-0.1 0-0.2-0.1-0.3-0.2-0.5-0.4-1.3-1.1-2-2.2-1-1.2-1.5-2.4-1.5-3.2 0-2.1 1.6-3.7 3.7-3.7zm-6.4 20.3h-7.1l4-12h4.7l-1.6 12zm1.9 0 1.5-11.3s0 0.1 0.1 0.1l1 1c0.1 0.1 0.2 0.2 0.3 0.2l0.2 0.2c0.1 0.1 0.2 0.1 0.3 0.2 0.1 0 0.1 0.1 0.2 0.1 0.1 0.1 0.2 0.1 0.3 0.1s0.1 0.1 0.2 0.1c0.2 0 0.3 0.1 0.4 0.1s0.3 0 0.4-0.1c0.1 0 0.1 0 0.2-0.1 0.1 0 0.2-0.1 0.3-0.1s0.1-0.1 0.2-0.1c0.1-0.1 0.2-0.1 0.3-0.2l0.2-0.2c0.1-0.1 0.2-0.2 0.3-0.2l1.1-1.1 1.5 11.3h-9zm9.2-12h4.7l4 12h-7.1l-1.6-12z" />
			</g>
		</svg>
	);
};

export default MapIcon;
