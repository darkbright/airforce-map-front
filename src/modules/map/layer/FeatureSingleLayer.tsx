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
	const [visible, setVisible] = useState(layer.getVisible());

	return (
		<Root>
			<IconButton
				onClick={() => {
					layer.setVisible(!visible);
					setVisible(!visible);
				}}
				disableFocusRipple
				disableRipple
				sx={{ mr: 1 }}
				color={visible ? "primary" : "inherit"}
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
					<Typography sx={{ ml: 1 }} variant="body1">
						{layer._name}
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					{features
						?.filter((featureLayer) => featureLayer._graphicBoard._name === layer._name)
						?.map((feature) => (
							<div key={feature._prop.guid}>{feature._prop.name}</div>
						))}
				</AccordionDetails>
			</Accordion>
		</Root>
	);
};

export default FeatureSingleLayer;

const Root = styled("div")(() => ({
	display: "flex",
	alignItems: "center",
	marginBottom: "2.5%",
}));
