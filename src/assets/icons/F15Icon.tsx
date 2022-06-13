import useThemeStore from "../../stores/useThemeStore";
import { theme } from "../../styles/theme";
import { IconProps } from "./IconProp";

const F15Icon = ({ width = 110, color }: IconProps) => {
	const { isDark } = useThemeStore();

	return (
		<svg
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
			x="0px"
			y="0px"
			viewBox="0 0 138 100"
			xmlSpace="preserve"
			width={width}
		>
			<polygon
				style={{ fill: color || theme(isDark).palette.text.secondary }}
				points="117.3,41.2 102.4,41.2 102.4,31.9 68.1,31.9 63.3,25.7 73.4,25.7 73.4,19.5 58.5,19.5 
	45.9,3.5 29.3,8.2 33.6,23 33.6,35 31.5,35 20.6,25.7 8.2,25.7 8.2,56.6 1,56.6 1,62.8 26.4,62.8 26.4,56.6 15.5,56.6 15.5,31.9 
	17.6,31.9 28.5,41.2 33.6,41.2 40.8,41.2 51.7,41.2 51.7,35 40.8,35 40.8,22.6 37.9,12.3 43,10.8 64.3,38.1 95.2,38.1 95.2,41.2 
	80.7,41.2 80.7,47.4 116.4,47.4 123.7,48.9 116.4,50.5 80.7,50.5 80.7,56.6 95.2,56.6 95.2,59.7 64.3,59.7 43,87 37.9,85.5 
	40.8,75.2 40.8,62.8 51.7,62.8 51.7,56.6 33.6,56.6 33.6,74.8 29.3,89.6 45.9,94.3 58.5,78.3 73.4,78.3 73.4,72.1 63.3,72.1 
	68.1,65.9 102.4,65.9 102.4,56.6 117.3,56.6 135,52.9 135,44.9 "
			/>
		</svg>
	);
};

export default F15Icon;
