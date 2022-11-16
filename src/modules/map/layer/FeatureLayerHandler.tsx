import { Accordion, AccordionDetails, AccordionSummary, styled, Typography } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
import BaseBlockTitleBox from "../../../components/box/textBox/BaseBlockTitleBox";
import CloseButton from "../../../components/button/CloseButton";
import useFullScreenStore from "../../../stores/useFullScreenStore";
import useThemeStore from "../../../stores/useThemeStore";
import { theme } from "../../../styles/theme";
import { getWindowSize } from "../../../styles/windowSize";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TextButton from "../../../components/button/TextButton";

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

	const graphic = window.graphic;

	const defaultLayerList = graphic._graphicBoard;
	const [layers, setLayers] = useState(defaultLayerList);

	// 레이어 추가 핸들링
	const handleAddLayer = () => {
		const index = graphic.addGraphicBoard();
		graphic.setSelectGraphicBoard(index);
		const addedLayer = graphic.getGraphicBoard(index);
		setLayers((prev) => [...prev.filter((p) => p._guid !== addedLayer._guid), addedLayer]);
	};

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
					<CloseButton onClick={() => setShow(false)} />
				</HeaderWrapper>
				<AddLayerWrapper>
					<TextButton
						title="레이어 추가"
						type="button"
						textPosition="right"
						onClick={handleAddLayer}
					/>
				</AddLayerWrapper>

				<div>
					{layers.map((layer) => (
						<Accordion defaultExpanded disableGutters key={layer._guid}>
							<AccordionSummary
								expandIcon={<ExpandMoreIcon />}
								aria-controls={layer._name}
								id={layer._name}
							>
								<Typography> {layer._name} </Typography>
							</AccordionSummary>
							<AccordionDetails>
								<div>test</div>
							</AccordionDetails>
						</Accordion>
					))}
				</div>
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

const AddLayerWrapper = styled("div")(() => ({
	display: "flex",
	justifyContent: "flex-end",
}));
