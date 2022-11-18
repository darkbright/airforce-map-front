import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	IconButton,
	styled,
	Tooltip,
	Typography,
} from "@mui/material";
import { MouseEventHandler, SyntheticEvent, useState } from "react";
import { IGraphicBoard, IGraphicObject } from "../../../types/d2/Graphic";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import VisibilityIcon from "@mui/icons-material/Visibility";
import SingleLayerHandlerModal from "./SingleLayerHandlerModal";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import SingleFeatureBox from "./SingleFeatureBox";

interface FeatureSingLayerProps {
	expanded: boolean;
	handleAccordionChange:
		| ((event: SyntheticEvent<Element, Event>, expanded: boolean) => void)
		| undefined;
	layer: IGraphicBoard;
	onClickAccordion: MouseEventHandler<HTMLDivElement> | undefined;
	features: IGraphicObject[] | null;
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
	const [layerName, setLayerName] = useState(layer._name);

	return (
		<>
			<Root>
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
					onDoubleClick={() => setOpenModal(true)}
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
							?.map((feature) => (
								<SingleFeatureBox
									key={feature._prop.guid}
									feature={feature}
									parentVisibility={visible}
								/>
							))}
					</AccordionDetails>
				</Accordion>
			</Root>
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
