import { styled } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import BaseBlockTitleBox from "../../../components/box/textBox/BaseBlockTitleBox";
import CloseButton from "../../../components/button/CloseButton";
import useFullScreenStore from "../../../stores/useFullScreenStore";
import useThemeStore from "../../../stores/useThemeStore";
import { theme } from "../../../styles/theme";
import { getWindowSize } from "../../../styles/windowSize";

interface FeatureLayerHandlerProps {
	show: boolean;
	setShow: Dispatch<SetStateAction<boolean>>;
}

/**
 * 지도 위에 생성된 각종 도형 및 군대부호를 총칭하는 Feature들의 Layer(투명도)를 관리하는 모듈로
 * 레이어 순서 조정, feature의 zIndex 조정, 레이어 저장 등의 역할을 수행
 * @param FeatureLayerHandlerProps FeatureLayerHandlerProps
 * @returns {JSX.Element} Div
 */
const FeatureLayerHandler = ({ show, setShow }: FeatureLayerHandlerProps) => {
	const { isDark } = useThemeStore();
	const background = theme(isDark).palette.background.paper;

	const { height: windowHeight } = getWindowSize();

	const { isFullScreenOpen } = useFullScreenStore();

	return (
		<Root
			style={{
				width: "25vw",
				top: isFullScreenOpen === "f" ? 0 : 90,
				visibility: show ? "visible" : "hidden",
				background,
				height: isFullScreenOpen === "f" ? windowHeight - 35 : windowHeight - 35 - 58 - 32,
			}}
		>
			<Wrapper style={{ padding: isFullScreenOpen === "f" ? "7% 5%" : "5%" }}>
				<HeaderWrapper>
					<BaseBlockTitleBox title="투명도 레이어 관리" />
					<CloseButtonWrapper>
						<CloseButton onClick={() => setShow(false)} />
					</CloseButtonWrapper>
				</HeaderWrapper>
				123
			</Wrapper>
		</Root>
	);
};

export default FeatureLayerHandler;

const Root = styled("div")(() => ({
	paddingTop: "1.3em",
	position: "absolute",
	zIndex: 1001,
	transition: "all ease-out 0.2s",
	right: 0,
}));

const Wrapper = styled("div")(() => ({}));

const HeaderWrapper = styled("div")(() => ({
	display: "flex",
	justifyContent: "space-between",
	alignItems: "start",
}));

const CloseButtonWrapper = styled("div")(() => ({
	display: "flex",
	justifyContent: "flex-end",
}));
