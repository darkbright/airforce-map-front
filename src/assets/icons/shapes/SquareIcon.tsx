import useThemeStore from "../../../stores/useThemeStore";
import { theme } from "../../../styles/theme";
import { IconProps } from "../IconProp";

interface SquareIconProps extends IconProps {
	rotate?: number;
}

/**
 *  사각형 / 마름모 아이콘
 *
 *  마름모로 회전하려면 rotate 각도를 45로 설정하시고, 크기가 큰 것 같으면 width를 16 정도로 조정해보세요.
 * @param {IconProps} IconProps
 * @returns {JSX.Element} React Component(SVG)
 */
const SquareIcon = ({ width = 18, color, rotate = 0 }: SquareIconProps) => {
	const { isDark } = useThemeStore();
	const chosenColor = color || theme(isDark).palette.text.secondary;

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
			transform={`rotate(${rotate})`}
		>
			<rect
				x="24.8"
				y="24.8"
				style={{
					fill: "none",
					stroke: chosenColor,
					strokeWidth: 14,
					strokeMiterlimit: 10,
				}}
				width="150.4"
				height="150.4"
			/>
		</svg>
	);
};

export default SquareIcon;
