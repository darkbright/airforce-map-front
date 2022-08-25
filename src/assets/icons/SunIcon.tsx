import { IconProps } from "./IconProp";

/**
 * 태양 모양 공군 아이콘 (공군이 만든 디자인 참고)
 * @param {IconProps} IconProps
 * @returns {JSX.Element} React Component(SVG)
 */
const SunIcon = ({ width = 20, color }: IconProps) => {
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
				d="m16.7 8.9c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 10c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm1-13h-2v-5h2v5zm-2 18h2v5h-2v-5zm15-10v2h-5v-2h5zm-23 2h-5v-2h5v2zm16-6.6-1.4-1.4 3.5-3.5 1.4 1.4-3.5 3.5zm-14.1 11.3 1.4 1.4-3.5 3.5-1.4-1.4 3.5-3.5zm14.1 0 3.5 3.5-1.4 1.4-3.5-3.5 1.4-1.4zm-14.1-11.3-3.5-3.6 1.4-1.4 3.5 3.6-1.4 1.4z"
				fill={color}
			/>
		</svg>
	);
};

export default SunIcon;
