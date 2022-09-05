import useThemeStore from "../../stores/useThemeStore";
import { theme } from "../../styles/theme";

interface COPTextLogoProp {
	width?: number;
	color?: string;
	hasIcon?: boolean;
}

/**
 * 커스텀 제작한 상황도 로고 시안 1
 *
 * "AFCCS Common Operation Map"
 *
 * "AFCCS 작전상황도" 이렇게 적혀있는 모양임
 *
 * 왼쪽 아이콘은 hasIcon으로 껐다 켤 수 있음.
 * @param {COPTextLogoProp} COPTextLogoProp
 * @returns React Component(SVG)
 */

const COPTextLogoProposal1 = ({ width = 180, color, hasIcon = false }: COPTextLogoProp) => {
	const { isDark } = useThemeStore();
	const defaultColor = color || theme(isDark).palette.text.primary;
	const mainColor = theme(isDark).palette.primary.main;
	const upperEnglishPartStyle = {
		fill: mainColor,
	};
	const mainKoreanLetterStyle = {
		fill: defaultColor,
	};

	return (
		<svg
			enableBackground="new 0 0 364 72"
			version="1.1"
			viewBox="0 0 364 72"
			xmlSpace="preserve"
			xmlns="http://www.w3.org/2000/svg"
			width={width}
		>
			<g>
				{/* 상단의 영문 AFCCS Common Operation Part 시작 */}
				<g>
					<g>
						<path
							style={upperEnglishPartStyle}
							d="M77.5,8.4H79l4.2,11.8h-1.6l-1.2-3.3h-4.6l-1.2,3.3h-1.5L77.5,8.4z M76.4,15.5H80l-1.8-5.1h-0.1
				L76.4,15.5z"
						/>
						<path
							style={upperEnglishPartStyle}
							d="M84.9,8.4h6.8v1.3h-5.3v3.9h4.1V15h-4.1v5.2h-1.5V8.4z"
						/>
						<path
							style={upperEnglishPartStyle}
							d="M93,14.4V14c0-4.2,2.4-5.8,5.4-5.8c1.2,0,2.2,0.2,2.9,0.6v1.3c-1-0.4-1.8-0.6-3-0.6
				c-2.1,0-3.6,1.2-3.6,4.3v0.6c0,2.9,1.1,4.6,3.7,4.6c1.4,0,2.3-0.4,3.1-0.8v1.3c-0.8,0.5-1.9,0.8-3.3,0.8C95,20.3,93,18.4,93,14.4
				z"
						/>
						<path
							style={upperEnglishPartStyle}
							d="M102.8,14.4V14c0-4.2,2.4-5.8,5.4-5.8c1.2,0,2.2,0.2,2.9,0.6v1.3c-1-0.4-1.8-0.6-3-0.6
				c-2.1,0-3.6,1.2-3.6,4.3v0.6c0,2.9,1.1,4.6,3.7,4.6c1.4,0,2.3-0.4,3.1-0.8v1.3c-0.8,0.5-1.9,0.8-3.3,0.8
				C104.8,20.3,102.8,18.4,102.8,14.4z"
						/>
						<path
							style={upperEnglishPartStyle}
							d="M112.4,19.6v-1.3c0.9,0.5,2,0.8,3.3,0.8c1.7,0,2.5-0.8,2.5-2c0-1.1-0.5-1.6-1.9-2l-1.2-0.4
				c-1.6-0.5-2.5-1.4-2.5-3.2c0-1.9,1.3-3.2,3.7-3.2c1.4,0,2.2,0.3,2.9,0.6v1.3c-0.7-0.3-1.6-0.6-2.9-0.6c-1.3,0-2.1,0.6-2.1,1.7
				c0,1.1,0.4,1.5,1.6,2l1.2,0.4c1.7,0.6,2.8,1.3,2.8,3.3c0,2.1-1.2,3.5-4,3.5C114.3,20.4,113.2,20,112.4,19.6z"
						/>
						<path
							style={upperEnglishPartStyle}
							d="M125.8,14.4V14c0-4.2,2.4-5.8,5.4-5.8c1.2,0,2.2,0.2,2.9,0.6v1.3c-1-0.4-1.8-0.6-3-0.6
				c-2.1,0-3.6,1.2-3.6,4.3v0.6c0,2.9,1.1,4.6,3.7,4.6c1.4,0,2.3-0.4,3.1-0.8v1.3c-0.8,0.5-1.9,0.8-3.3,0.8
				C127.8,20.3,125.8,18.4,125.8,14.4z"
						/>
						<path
							style={upperEnglishPartStyle}
							d="M135.5,16v-0.3c0-2.7,1.6-4.4,4-4.4c2.5,0,4,1.6,4,4.4v0.3c0,2.7-1.6,4.4-4,4.4
				C136.9,20.3,135.5,18.7,135.5,16z M141.9,16.1v-0.5c0-2.3-1.1-3.1-2.4-3.1c-1.5,0-2.4,1.1-2.4,3V16c0,2.3,1.1,3.1,2.4,3.1
				C141,19.1,141.9,18,141.9,16.1z"
						/>
						<path
							style={upperEnglishPartStyle}
							d="M145.2,11.5h1.4v0.8h0.1c0.7-0.5,1.7-0.9,2.6-0.9c1,0,1.7,0.3,2.1,1h0.1c0.9-0.6,1.9-1,2.9-1
				c1.5,0,2.4,0.7,2.4,2.4v6.5h-1.5V14c0-1-0.4-1.4-1.5-1.4c-0.6,0-1.3,0.2-2.1,0.6c0,0.2,0,0.3,0,0.5v6.5h-1.5V14
				c0-1-0.3-1.4-1.5-1.4c-0.7,0-1.4,0.3-2.1,0.6v7h-1.5V11.5z"
						/>
						<path
							style={upperEnglishPartStyle}
							d="M159.2,11.5h1.4v0.8h0.1c0.7-0.5,1.7-0.9,2.6-0.9c1,0,1.7,0.3,2.1,1h0.1c0.9-0.6,1.9-1,2.9-1
				c1.5,0,2.4,0.7,2.4,2.4v6.5h-1.5V14c0-1-0.4-1.4-1.5-1.4c-0.6,0-1.3,0.2-2.1,0.6c0,0.2,0,0.3,0,0.5v6.5h-1.5V14
				c0-1-0.3-1.4-1.5-1.4c-0.7,0-1.4,0.3-2.1,0.6v7h-1.5V11.5z"
						/>
						<path
							style={upperEnglishPartStyle}
							d="M172.5,16v-0.3c0-2.7,1.6-4.4,4-4.4c2.5,0,4,1.6,4,4.4v0.3c0,2.7-1.6,4.4-4,4.4
				C174,20.3,172.5,18.7,172.5,16z M178.9,16.1v-0.5c0-2.3-1.1-3.1-2.4-3.1c-1.5,0-2.4,1.1-2.4,3V16c0,2.3,1.1,3.1,2.4,3.1
				C178,19.1,178.9,18,178.9,16.1z"
						/>
						<path
							style={upperEnglishPartStyle}
							d="M182.3,11.5h1.4v0.8h0.1c0.7-0.5,1.9-0.9,2.9-0.9c1.7,0,2.5,0.7,2.5,2.4v6.5h-1.5V14
				c0-1-0.3-1.4-1.7-1.4c-0.8,0-1.7,0.3-2.3,0.6v7h-1.5V11.5z"
						/>
						<path
							style={upperEnglishPartStyle}
							d="M195.7,14.4v-0.3c0-3.6,2-5.9,5.2-5.9c3.2,0,5.1,2.1,5.1,5.9v0.3c0,3.6-1.9,5.9-5.2,5.9
				C197.7,20.3,195.7,18.3,195.7,14.4z M204.4,14.7v-0.6c0-2.7-0.9-4.7-3.5-4.7c-2.4,0-3.5,1.9-3.5,4.4v0.6c0,2.7,0.9,4.7,3.5,4.7
				C203.3,19.1,204.4,17.2,204.4,14.7z"
						/>
						<path
							style={upperEnglishPartStyle}
							d="M208,11.5h1.4v0.7h0.1c0.5-0.5,1.4-0.9,2.5-0.9c1.9,0,3.5,1,3.5,4.2v0.2c0,3.2-1.5,4.5-3.9,4.5
				c-1,0-1.7-0.3-2.2-0.6v3H208V11.5z M214.1,15.9v-0.4c0-2.3-0.9-3-2.4-3c-1,0-1.7,0.3-2.1,0.6v5.3c0.4,0.3,1.2,0.6,2,0.6
				C213.1,19.1,214.1,18.2,214.1,15.9z"
						/>
						<path
							style={upperEnglishPartStyle}
							d="M216.9,15.9v-0.3c0-3,1.8-4.4,3.8-4.4c2.4,0,3.5,1.4,3.5,4.1v0.8h-5.8c0.1,2.1,1.1,2.8,2.9,2.8
				c1.2,0,1.9-0.2,2.7-0.7v1.1c-0.5,0.4-1.5,0.8-2.9,0.8C218.3,20.3,216.9,18.6,216.9,15.9z M218.5,15h4.2c0-1.8-0.7-2.5-2-2.5
				C219.7,12.5,218.6,13,218.5,15z"
						/>
						<path
							style={upperEnglishPartStyle}
							d="M226.1,11.5h1.4v1h0.1c0.5-0.6,1.4-1.1,2.4-1.1c0.2,0,0.5,0,0.5,0.1v1.3c-0.2,0-0.5-0.1-0.7-0.1
				c-0.8,0-1.6,0.3-2.3,0.7v6.8h-1.5V11.5z"
						/>
						<path
							style={upperEnglishPartStyle}
							d="M231.3,17.8c0-1.5,1-2.3,2.6-2.5l2.3-0.3v-0.8c0-1.3-0.6-1.6-2.1-1.6c-0.9,0-1.6,0.1-2.1,0.2v-1.1
				c0.8-0.3,1.6-0.5,2.7-0.5c1.9,0,3,0.8,3,2.6v6.3h-1.2l-0.2-0.7h-0.1c-0.4,0.5-1.1,0.9-2.3,0.9C232.5,20.3,231.3,19.5,231.3,17.8z
				 M236.3,18.6v-2.4l-1.9,0.2c-1,0.1-1.5,0.5-1.5,1.5c0,0.9,0.6,1.3,1.5,1.3C235.2,19.1,235.9,18.9,236.3,18.6z"
						/>
						<path
							style={upperEnglishPartStyle}
							d="M240.5,18.1v-5.4h-1.2v-1.2h1.2V9.4h1.5v2.1h2.2v1.2H242v5.2c0,0.8,0.3,1.1,1.3,1.1
				c0.3,0,0.8-0.1,1.1-0.1v1c-0.4,0.2-0.7,0.3-1.5,0.3C241.5,20.2,240.5,19.6,240.5,18.1z"
						/>
						<path
							style={upperEnglishPartStyle}
							d="M246.1,8.2h1.5v1.6h-1.5V8.2z M246.1,11.5h1.5v8.7h-1.5V11.5z"
						/>
						<path
							style={upperEnglishPartStyle}
							d="M249.5,16v-0.3c0-2.7,1.6-4.4,4-4.4c2.5,0,4,1.6,4,4.4v0.3c0,2.7-1.6,4.4-4,4.4
				C250.9,20.3,249.5,18.7,249.5,16z M255.9,16.1v-0.5c0-2.3-1.1-3.1-2.4-3.1c-1.5,0-2.4,1.1-2.4,3V16c0,2.3,1.1,3.1,2.4,3.1
				C255,19.1,255.9,18,255.9,16.1z"
						/>
						<path
							style={upperEnglishPartStyle}
							d="M259.3,11.5h1.4v0.8h0.1c0.7-0.5,1.9-0.9,2.9-0.9c1.7,0,2.5,0.7,2.5,2.4v6.5h-1.5V14
				c0-1-0.3-1.4-1.7-1.4c-0.8,0-1.7,0.3-2.3,0.6v7h-1.5V11.5z"
						/>
						<path
							style={upperEnglishPartStyle}
							d="M273.4,8.4h2.3l3.2,9.7h0.1l3.2-9.7h2.3v11.8h-1.6v-9.7h-0.1l-3.3,9.7h-1.4l-3.3-9.7h0v9.7h-1.4
				V8.4z"
						/>
						<path
							style={upperEnglishPartStyle}
							d="M286.4,17.8c0-1.5,1-2.3,2.6-2.5l2.3-0.3v-0.8c0-1.3-0.6-1.6-2.1-1.6c-0.9,0-1.6,0.1-2.1,0.2v-1.1
				c0.8-0.3,1.6-0.5,2.7-0.5c1.9,0,3,0.8,3,2.6v6.3h-1.2l-0.2-0.7h-0.1c-0.4,0.5-1.1,0.9-2.3,0.9C287.5,20.3,286.4,19.5,286.4,17.8z
				 M291.3,18.6v-2.4l-1.9,0.2c-1,0.1-1.5,0.5-1.5,1.5c0,0.9,0.6,1.3,1.5,1.3C290.2,19.1,291,18.9,291.3,18.6z"
						/>
						<path
							style={upperEnglishPartStyle}
							d="M295.1,11.5h1.4v0.7h0.1c0.5-0.5,1.4-0.9,2.5-0.9c1.9,0,3.5,1,3.5,4.2v0.2c0,3.2-1.5,4.5-3.9,4.5
				c-1,0-1.7-0.3-2.2-0.6v3h-1.5V11.5z M301.2,15.9v-0.4c0-2.3-0.9-3-2.4-3c-1,0-1.7,0.3-2.1,0.6v5.3c0.4,0.3,1.2,0.6,2,0.6
				C300.2,19.1,301.2,18.2,301.2,15.9z"
						/>
					</g>
					{/* 상단의 영문 AFCCS Common Operation Part 끝 */}
				</g>
				{/* 한글로고 시작 */}
				<g>
					<g>
						<path
							style={mainKoreanLetterStyle}
							d="M78.2,34.5h4l9.6,26.7h-4.2l-2.6-7.2H74.9l-2.5,7.2h-3.8L78.2,34.5z M76,50.7h7.9L80,39.5h-0.1
				L76,50.7z"
						/>
						<path
							style={mainKoreanLetterStyle}
							d="M95.4,34.5h15.9v3.3H99.4v8.5h9.2v3.3h-9.2v11.5h-4V34.5z"
						/>
						<path
							style={mainKoreanLetterStyle}
							d="M113.9,48.2v-0.9c0-9.6,5.6-13.2,12.3-13.2c2.9,0,5,0.6,6.7,1.4v3.3c-2.1-0.8-4-1.4-6.6-1.4
				c-4.7,0-8.1,2.7-8.1,9.3v1.4c0,6.3,2.3,10.1,8.2,10.1c3.2,0,5.1-0.8,6.8-1.6v3.3c-1.9,1-4.3,1.7-7.5,1.7
				C118.5,61.6,113.9,57.2,113.9,48.2z"
						/>
						<path
							style={mainKoreanLetterStyle}
							d="M136.2,48.2v-0.9c0-9.6,5.6-13.2,12.3-13.2c2.9,0,5,0.6,6.7,1.4v3.3c-2.1-0.8-4-1.4-6.6-1.4
				c-4.7,0-8.1,2.7-8.1,9.3v1.4c0,6.3,2.3,10.1,8.2,10.1c3.2,0,5.1-0.8,6.8-1.6v3.3c-1.9,1-4.3,1.7-7.5,1.7
				C140.8,61.6,136.2,57.2,136.2,48.2z"
						/>
						<path
							style={mainKoreanLetterStyle}
							d="M158.1,59.9v-3.3c2.1,1,4.7,1.7,7.5,1.7c3.8,0,5.4-1.7,5.4-4.3c0-2.3-1.1-3.3-4.1-4.3l-2.6-0.9
				c-3.7-1.1-5.9-3.1-5.9-7.4c0-4.3,2.9-7.4,8.6-7.4c3.4,0,5.3,0.7,6.7,1.5v3.3c-1.6-0.7-3.8-1.4-6.7-1.4c-3,0-4.6,1.3-4.6,3.7
				c0,2.3,0.8,3.3,3.6,4.2l2.6,0.8c4,1.3,6.5,3,6.5,7.6c0,4.9-2.9,8-9.2,8C162.5,61.6,160,60.9,158.1,59.9z"
						/>
						<path
							style={mainKoreanLetterStyle}
							d="M188.5,33h18.3v4.2h-6.3c0.4,4.9,3.7,8,7.8,9.4l-2.8,4c-2.6-0.9-6.3-3.9-7.6-6.8
				c-0.9,3.1-4.7,6.7-8.1,7.7l-2.7-4.1c4.9-1.7,7.9-5.2,8.1-10.2h-6.7V33z M215.4,53v12.9h-5.1v-8.8h-17.8V53H215.4z M215.3,43.5v8
				h-5.1V31.2h5.1v8.1h4.8v4.2H215.3z"
						/>
						<path
							style={mainKoreanLetterStyle}
							d="M223.1,33.7h18.3v4.2h-6.5c0.1,5.4,3.5,8.7,7.8,10.2l-2.8,4c-2.6-0.9-6.3-3.8-7.6-6.7
				c-0.9,3-4.9,6.3-8.3,7.4l-2.6-4c5.2-1.8,8.1-5.4,8.1-10.7v-0.1h-6.5V33.7z M226.8,65V54h5.2v7h19.1v4H226.8z M245.3,56.3V44.5
				h-4.9v-4h4.9v-9.2h5.3v25.1H245.3z"
						/>
						<path
							style={mainKoreanLetterStyle}
							d="M273,50.2c-2.6-0.9-6.3-3.7-7.5-6.6c-1,3.3-5,6.5-8.3,7.6l-2.6-4c5.2-1.8,8.2-5.8,8.2-10.9v-3.1
				h5.3v2.9c0,5.6,3.4,8.6,7.7,10.1L273,50.2z M270.7,65.7c-7.6,0-12.2-2.7-12.2-7c0-4.4,4.6-7.1,12.2-7.1c7.7,0,12.3,2.7,12.3,7.1
				C283,63,278.3,65.7,270.7,65.7z M263.7,58.7c0,1.8,2.6,2.9,7,2.9c4.6,0,7-1.1,7-2.9s-2.5-3-7-3C266.3,55.8,263.7,56.9,263.7,58.7
				z M282.6,43.7v7.7h-5.1V31.2h5.1v8.3h4.8v4.2H282.6z"
						/>
						<path
							style={mainKoreanLetterStyle}
							d="M299.1,54.8c-3.3,0.2-7.1,0.3-9.7,0.3c-0.2-1.4-0.5-2.7-0.7-4c3,0,5.9,0,8.7-0.1v-1.1
				c-3.7-0.5-6-2.3-6-4.5c0-2.8,3.4-4.9,8.5-4.9c5.1,0,8.6,2.1,8.6,4.9c0,2.2-2.3,3.9-5.8,4.4v1c2.5-0.1,4.8-0.4,7.2-0.7
				c0.1,1.2,0.2,2.5,0.3,3.7C308,54.2,301.6,54.6,299.1,54.8z M290.1,39.9v-3.7h19.6v3.7H290.1z M304.6,66c-8.7,0-12.5-2.3-12.5-5.3
				c0-2.9,3.8-5.2,12.6-5.2c8.5,0,12.2,2.3,12.2,5.2C316.8,63.7,313.1,66,304.6,66z M295.5,31.5h9.4V35h-9.4V31.5z M299.9,44
				c-2.3,0-3.3,0.5-3.3,1.4c0,0.7,1.1,1.2,3.3,1.2c2.3,0,3.3-0.5,3.3-1.2C303.3,44.5,302.2,44,299.9,44z M304.5,59.3
				c-4.5,0-6.8,0.6-6.8,1.5c0,0.7,2.3,1.4,6.8,1.4c4.4,0,6.7-0.7,6.7-1.4C311.2,59.9,309,59.3,304.5,59.3z M316.8,42.2h4.1v4.3h-4.1
				v9.1h-5.1V31.2h5.1V42.2z"
						/>
						<path
							style={mainKoreanLetterStyle}
							d="M340.9,50.2v7.4H354v4h-31.3v-4h13.1v-7.4h-9.1V33.6h23.3v4.1h-18.2v8.4h18.4v4H340.9z"
						/>
					</g>
				</g>
				{/* 한글로고 시작 */}
				{/* 왼쪽 로고 아이콘 시작 */}
				{hasIcon ? (
					<>
						<linearGradient
							id="SVGID_1_"
							gradientUnits="userSpaceOnUse"
							x1="120.8829"
							y1="183.1521"
							x2="178.6475"
							y2="183.1521"
							gradientTransform="matrix(0.6814 -0.7319 0.7319 0.6814 -198.448 13.3331)"
						>
							<stop offset="1.198743e-03" style={{ stopColor: "#00B6ED" }} />
							<stop offset="0.3829" style={{ stopColor: "#0195D4" }} />
							<stop offset="0.7736" style={{ stopColor: "#0379BF" }} />
							<stop offset="1" style={{ stopColor: "#036EB7" }} />
						</linearGradient>
						<polygon
							style={{ fill: "url(#SVGID_1_)" }}
							points="49.1,10.4 44.6,15.2 41,11.9 30.7,23.1 26.9,22.4 29.9,19.2 27.6,17 23.1,21.8 
		13.2,20.2 10,27.3 16.9,31.1 21.4,35.4 19.7,37.2 12.4,37.5 10.8,43 17.4,49.1 25.2,56.4 30.5,54.4 30.3,47.1 32,45.2 36.6,49.4 
		40.9,56.1 47.7,52.3 45.4,42.6 49.9,37.7 47.6,35.6 44.5,38.8 43.6,35.1 54,24 50.4,20.7 54.9,15.9 58.8,8.8 55.8,6 	"
						/>
						<path
							style={{ fill: "#d91b55" }}
							d="M56.8,46.2c1.3-2,2.1-4.4,2.1-6.9c0-7-5.7-12.7-12.7-12.7s-12.7,5.7-12.7,12.7
		c0,2.6,0.8,4.9,2.1,6.9l10.6,18.4L56.8,46.2z"
						/>
						<circle style={{ fill: "#ffffff" }} cx="46.2" cy="40.7" r="5.9" />
						{/* 왼쪽 로고 아이콘 끝 */}
					</>
				) : (
					""
				)}
			</g>
		</svg>
	);
};

export default COPTextLogoProposal1;