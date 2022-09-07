import useThemeStore from "../../../stores/useThemeStore";
import { theme } from "../../../styles/theme";
import { IconProps } from "../IconProp";

interface TextIconProps extends IconProps {
	small?: boolean;
}

/**
 *  Text 입력을 유도하는 모양의 아이콘
 * @param {IconProps} IconProps
 * @returns {JSX.Element} React Component(SVG)
 */
const TextIcon = ({ width = 18, color, small = false }: TextIconProps) => {
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
			viewBox="0 0 200 200"
			enableBackground="new 0 0 200 200"
			xmlSpace="preserve"
			width={width}
		>
			{small ? (
				<g>
					<path d="M118.1,50.7v126.8H81.9V50.7H36.6V22.5h126.8v28.2H118.1z" />
				</g>
			) : (
				<>
					<g>
						<path
							d="M43.6,87.7v35.7H33.4V87.7H20.7v-7.9h35.7v7.9H43.6z"
							style={{ fill: chosenColor }}
						/>
						<path
							d="M91.7,115.4v7.9H61.1V79.7h29.4v7.9H71.4v9.8h18.3v7.7H71.4v10.3H91.7z"
							style={{ fill: chosenColor }}
						/>
						<path
							d="M124.4,123.4l-9-14.1l-9,14.1H95.3l14.6-22.7L96.4,79.7h11.1l7.9,12.3l7.9-12.3h11.1L121,100.6l14.6,22.7H124.4z"
							style={{ fill: chosenColor }}
						/>
						<path
							d="M159.5,87.7v35.7h-10.2V87.7h-12.8v-7.9h35.7v7.9H159.5z"
							style={{ fill: chosenColor }}
						/>
					</g>
					<g style={{ opacity: 0.68 }}>
						<g>
							<polyline
								style={style}
								points="181.5,156.2 181.5,162.2 175.5,162.2 		
			"
							/>

							<line
								style={{ ...style, strokeDasharray: "12.1538, 12.1538" }}
								x1="163.3"
								y1="162.2"
								x2="23.6"
								y2="162.2"
							/>
							<polyline style={style} points="17.5,162.2 11.5,162.2 11.5,156.2 		" />

							<line
								style={{ ...style, strokeDasharray: "11.8889,11.8889" }}
								x1="11.5"
								y1="144.3"
								x2="11.5"
								y2="55.1"
							/>
							<polyline style={style} points="11.5,49.2 11.5,43.2 17.5,43.2 		" />

							<line
								style={{ ...style, strokeDasharray: "12.1538, 12.1538" }}
								x1="29.6"
								y1="43.2"
								x2="169.4"
								y2="43.2"
							/>
							<polyline style={style} points="175.5,43.2 181.5,43.2 181.5,49.2 		" />

							<line
								style={{ ...style, strokeDasharray: "11.8889,11.8889" }}
								x1="181.5"
								y1="61.1"
								x2="181.5"
								y2="150.2"
							/>
						</g>
					</g>
				</>
			)}
		</svg>
	);
};

export default TextIcon;
