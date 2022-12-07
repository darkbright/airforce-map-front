import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	IconButton,
	styled,
	Tooltip,
	Typography,
} from "@mui/material";
import { MouseEventHandler, SyntheticEvent, useEffect, useState } from "react";
import { IGraphicBoard, IGraphicObject } from "../../../types/d2/Graphic";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import VisibilityIcon from "@mui/icons-material/Visibility";
import SingleLayerHandlerModal from "./SingleLayerHandlerModal";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import SingleFeatureBox from "./SingleFeatureBox";
import { DragDropContext, Droppable, DropResult, ResponderProvided } from "react-beautiful-dnd";
import { downloadLayerAsXml } from "../../../libs/d2/mapSettings/draw/downloadXML";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";
import SettingsIcon from "@mui/icons-material/Settings";

interface FeatureSingLayerProps {
	expanded: boolean;
	handleAccordionChange:
		| ((event: SyntheticEvent<Element, Event>, expanded: boolean) => void)
		| undefined;
	layer: IGraphicBoard;
	onClickAccordion: MouseEventHandler<HTMLDivElement> | undefined;
	features: IGraphicObject[] | null;
	onDragEnd: (result: DropResult, provided: ResponderProvided) => void;
	handleDeleteLayer: () => void;
}

/**
 * 개별 레이어와 개별 레이어 내 features 핸들링
 * @param FeatureSingLayerProps FeatureSingLayerProps
 * @returns {JSX.Element} Accordion
 */

const FeatureSingleLayer = ({
	expanded,
	handleAccordionChange,
	layer,
	onClickAccordion,
	features,
	onDragEnd,
	handleDeleteLayer,
}: FeatureSingLayerProps) => {
	/**
	 * 레이어 및 해당 레이어에 속하는 도형들을 지도에서 보여줄지 말지 결정함
	 */
	const [visible, setVisible] = useState(layer.getVisible());

	/**
	 * 레이어 상세 관리 모달
	 */
	const [openModal, setOpenModal] = useState(false);

	// 레이어 이름 설정
	const [layerName, setLayerName] = useState(layer.getName());

	// 레이어를 로컬 등에서 불러왔을 때 layer의 이름이 업데이트 되지 않는 현상 때문에 어코디언을 클릭 했을 때 이름을 다시 설정토록 조치
	useEffect(() => {
		setLayerName(layer.getName());
	}, [layer, onClickAccordion]);

	return (
		<>
			<DragDropContext onDragEnd={onDragEnd}>
				<Droppable droppableId="features-on-single-layer-list">
					{(provided) => (
						<Root ref={provided.innerRef} {...provided.droppableProps}>
							<IconButton
								onClick={() => {
									layer.setVisible(!visible);
									setVisible(!visible);
								}}
								disableFocusRipple
								disableRipple
								sx={{ mr: 1 }}
							>
								<Tooltip title={visible ? "숨기기" : "보이기"}>
									<div>
										<VisibilityIcon sx={{ fontSize: "0.9rem", opacity: visible ? 1 : 0.2 }} />
									</div>
								</Tooltip>
							</IconButton>

							<Accordion
								expanded={expanded}
								onChange={handleAccordionChange}
								disableGutters
								sx={{
									width: "100%",
								}}
								key={layer._guid}
								onClick={onClickAccordion}
							>
								<AccordionSummary
									expandIcon={<ExpandMoreIcon />}
									aria-controls={layer._name}
									id={layer._name}
								>
									<div style={{ display: "flex" }}>
										<Typography sx={{ ml: 1, mr: 1 }} variant="body1">
											{layerName}
										</Typography>
										<FiberManualRecordIcon
											fontSize="small"
											color={expanded ? "primary" : "inherit"}
											sx={{ opacity: expanded ? 1 : 0.5 }}
										/>
									</div>
								</AccordionSummary>
								<AccordionDetails>
									{features
										?.filter((featureLayer) => featureLayer._graphicBoard._name === layer._name)
										.map((feature, index: number) => (
											<SingleFeatureBox
												index={index}
												key={feature._prop.guid}
												feature={feature}
												parentVisibility={visible}
											/>
										))}
									{provided.placeholder}
								</AccordionDetails>
								<BottomButtonWrapper>
									<IconButton
										aria-label="layer-setting"
										size="small"
										onClick={() => setOpenModal(true)}
									>
										<Tooltip title="레이어 설정">
											<div>
												<SettingsIcon fontSize="small" sx={{ opacity: 0.5 }} />
											</div>
										</Tooltip>
									</IconButton>
									<IconButton
										aria-label="save-as-xml"
										size="small"
										onClick={() => downloadLayerAsXml()}
									>
										<Tooltip title="파일로 저장">
											<div>
												<SaveIcon fontSize="small" sx={{ opacity: 0.5 }} />
											</div>
										</Tooltip>
									</IconButton>
									<IconButton aria-label="delete-layer" size="small" onClick={handleDeleteLayer}>
										<Tooltip title="현재 레이어 삭제">
											<div>
												<DeleteIcon fontSize="small" sx={{ opacity: 0.5 }} />
											</div>
										</Tooltip>
									</IconButton>
								</BottomButtonWrapper>
							</Accordion>
						</Root>
					)}
				</Droppable>
			</DragDropContext>
			<SingleLayerHandlerModal
				layer={layer}
				layerName={layerName}
				setLayerName={setLayerName}
				open={openModal}
				setOpen={() => setOpenModal(false)}
			/>
		</>
	);
};

export default FeatureSingleLayer;

const Root = styled("div")(() => ({
	display: "flex",
	alignItems: "center",
	marginBottom: "2.5%",
}));

const BottomButtonWrapper = styled("div")(() => ({
	display: "flex",
	justifyContent: "flex-end",
	paddingRight: 14,
}));
