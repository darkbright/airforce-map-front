import { styled } from "@mui/material";

interface DefaultBoxProps {
	children: React.ReactNode;
	/**
	 * 만약 해당 박스가 부모 Div의 배경색상과 같다면, 박스의 모습이 보이지 않음.
	 * 기본적으로 해당 박스는 background.paper 색상으로 설정되어 있음(theme.ts 참조)
	 * 만약 해당 박스의 부모인 div가 paper 색상이라면, isBackgroundPapaer를  false로 설정하여 색상을 default로 바꿔주면 됨
	 */

	isBackgroundPaper?: boolean;
	marginTop?: number;
	marginBottom?: number;
	padding?: string;
}

/**
 * 기본적인 div로, padding값과 margin값이 정해져있는 형태로 UI를 통일시키는데 도움을 줌
 * 해당 div의 background color는 dark/light 모드에 따라 달라지는데, 만약 특정 모드에서 그 부모가 되는 컬러와 현재 이 DefaultBox의 background color 값이 같다면 isBackgroundPaper를 true/false로 수정할 것
 * @param {DefaultBoxProps} DefaultBoxProps
 * @returns {JSX.Element} React Component
 */
const DefaultBox = ({
	children,
	isBackgroundPaper = true,
	padding = "5%",
	marginBottom = 0,
	marginTop = 0,
}: DefaultBoxProps) => {
	return (
		<BoxWrapper style={{ marginBottom, marginTop, padding }} isBackgroundPaper={isBackgroundPaper}>
			{children}
		</BoxWrapper>
	);
};

export default DefaultBox;

const BoxWrapper = styled("div", {
	shouldForwardProp: (prop) => prop !== "isBackgroundPaper",
})<{ isBackgroundPaper?: boolean }>(({ theme, isBackgroundPaper }) => ({
	background: isBackgroundPaper ? theme.palette.background.paper : theme.palette.background.default,
	borderRadius: 6,
}));
