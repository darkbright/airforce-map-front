import { Accordion, AccordionDetails, AccordionSummary, styled, Typography } from "@mui/material";
import { Dispatch, SetStateAction, SyntheticEvent, useEffect, useState } from "react";
import BaseBlockTitleBox from "../../../components/box/textBox/BaseBlockTitleBox";
import CloseButton from "../../../components/button/CloseButton";
import useFullScreenStore from "../../../stores/useFullScreenStore";
import useThemeStore from "../../../stores/useThemeStore";
import { theme } from "../../../styles/theme";
import { getWindowSize } from "../../../styles/windowSize";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TextButton from "../../../components/button/TextButton";
import { IGraphicBoard, IGraphicObject } from "../../../types/d2/Graphic";

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

	const [expanded, setExpanded] = useState<number | false>(0);

	const handleChange = (panel: number) => (event: SyntheticEvent, newExpanded: boolean) => {
		setExpanded(newExpanded ? panel : false);
	};

	const graphic = window.graphic;

	const defaultLayerList = graphic._graphicBoard;
	const [layers, setLayers] = useState(defaultLayerList);

	// features
	const [features, setFeatures] = useState<IGraphicObject[] | null>(null);

	/**
	 * 선택된 레이어의 하위에 속하는 feature들을 가지고 옴
	 * @returns features
	 */
	const handleSelectLayer = () => {
		const board: IGraphicBoard = graphic.getSelectGraphicBoard();
		const objList = board.getParentObjectList();
		return setFeatures(objList);
	};

	/**
	 * 도형 생성 시 createMode는 그 도형을 생성할 준비가 된 것이지, 실제로 생성한 상태가 아님.
	 * 따라서 도형이 실제 생성되는 클릭 이벤트 발생 시 해당 기능을 활성화 시켜, graphicBoard 산하에 있는 feature들의 내용을 업데이트 해줌
	 */
	useEffect(() => {
		window.map.on("click", () => {
			handleSelectLayer();
		});
	}, [window.map]);

	// 레이어 추가 핸들링
	const handleAddLayer = () => {
		const index = graphic.addGraphicBoard();
		graphic.setSelectGraphicBoard(index);
		const addedLayer = graphic.getGraphicBoard(index);
		setLayers((prev) => [...prev.filter((p) => p._guid !== addedLayer._guid), addedLayer]);
		console.log(graphic._graphicBoard);
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
					{layers.map((layer, index: number) => (
						<Accordion
							expanded={expanded === index}
							onChange={handleChange(index)}
							disableGutters
							sx={{
								mb: 1,
							}}
							key={layer._guid}
							onClick={() => {
								graphic.setSelectGraphicBoard(index);
								handleSelectLayer();
							}}
						>
							<AccordionSummary
								expandIcon={<ExpandMoreIcon />}
								aria-controls={layer._name}
								id={layer._name}
							>
								<Typography> {layer._name} </Typography>
							</AccordionSummary>
							<AccordionDetails>
								{features
									?.filter((featureLayer) => featureLayer._graphicBoard._name === layer._name)
									?.map((feature) => (
										<div key={feature._prop.guid}>{feature._prop.name}</div>
									))}
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
