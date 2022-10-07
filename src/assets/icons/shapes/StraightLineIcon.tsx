import useThemeStore from "../../../stores/useThemeStore";
import { theme } from "../../../styles/theme";
import { IconProps } from "../IconProp";

interface StraightLineIconProps extends IconProps {
	arrowNumber?: number;
}

/**
 * 직선 (Straight Line) 모양 아이콘.
 *
 * 옵션으로 arrow 숫자를 입력하면 화살표가 생김
 * - arrowNumber 0 - 화살표 없음
 * - arrowNumber 1 - 한쪽 화살표
 * - arrowNumber 2 - 양쪽 화살표
 * @param {IconProps} IconProps
 * @returns {JSX.Element} React Component(SVG)
 */
const StraightLineIcon = ({ width = 14, color, arrowNumber = 0 }: StraightLineIconProps) => {
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
			viewBox="0 0 180 180"
			xmlSpace="preserve"
			width={width}
		>
			<line
				style={{ ...style, strokeLinecap: "round" }}
				x1="20.2"
				y1="179.8"
				x2="179.8"
				y2="20.2"
			/>
			{arrowNumber > 0 && (
				<>
					<line style={style} x1="179.8" y1="20.2" x2="84.4" y2="22.1" />
					<line style={style} x1="179.8" y1="20.2" x2="179.4" y2="100" />
				</>
			)}
			{arrowNumber === 2 && (
				<>
					<line style={style} x1="20.7" y1="179.5" x2="116.1" y2="177.7" />
					<line style={style} x1="20.7" y1="179.5" x2="21.1" y2="99.8" />
				</>
			)}
		</svg>
	);
};

export default StraightLineIcon;
