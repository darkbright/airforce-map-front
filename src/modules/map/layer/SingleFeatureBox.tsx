import { styled, Tooltip, Typography } from "@mui/material";
import { useState } from "react";
import { IGraphicObject } from "../../../types/d2/Graphic";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Draggable } from "react-beautiful-dnd";

interface SingleFeatureBoxProps {
	feature: IGraphicObject;
	parentVisibility: boolean;
	index: number;
}

/**
 * 레이어 내 개별 도형 또는 군대부호 표시 박스
 * @param SingleFeatureBoxProps SingleFeatureBoxProps
 * @returns {JSX.Element} div
 */
const SingleFeatureBox = ({ feature, parentVisibility, index }: SingleFeatureBoxProps) => {
	const [visible, setVisible] = useState(feature.getVisible());

	// 이거 아직 따라 적지 마세요
	// const handleRightClick = (event: MouseEvent<HTMLDivElement>) => {
	// 	event.preventDefault();

	// 	const board: IGraphicBoard = window.graphic.getSelectGraphicBoard();
	// 	const objList = board.getParentObjectList();
	// 	if (objList.length === 0) return;
	// 	const objectList = board.getObjectList();
	// 	console.log("boardObjectList", board.getObjectList());

	// 	for (let i = 0; i < objectList.length; i++) {
	// 		const srcIndex = objectList[i].getZIndex();
	// 		console.log("srcIndex", srcIndex);
	// 		objectList[i].setZIndex(0);
	// 		objectList[i]._graphicBoard.changeOrder(objectList[i], false, srcIndex, 0);
	// 	}
	// };

	return (
		<Draggable draggableId={feature._prop.guid} index={index}>
			{(provided) => (
				<Root ref={provided.innerRef} {...provided.draggableProps}>
					<Wrapper>
						<Tooltip title={visible ? "숨기기" : "보이기"}>
							<VisibilityWrapper
								onClick={() => {
									if (parentVisibility) {
										setVisible(!visible);
										feature.setVisible(!visible);
									}
								}}
							>
								<VisibilityIcon
									sx={{ fontSize: "0.9rem", opacity: visible && parentVisibility ? 1 : 0.2 }}
								/>
							</VisibilityWrapper>
						</Tooltip>

						<Typography sx={{ ml: 1 }} variant="body2" {...provided.dragHandleProps}>
							{feature._prop.name}
						</Typography>
					</Wrapper>
				</Root>
			)}
		</Draggable>
	);
};

export default SingleFeatureBox;

const Root = styled("div")(({ theme }) => ({
	background: theme.palette.background.default,
	padding: 8,
	marginBottom: "1%",
}));

const Wrapper = styled("div")(() => ({
	display: "flex",
	alignItems: "center",
}));

const VisibilityWrapper = styled("div")(() => ({
	height: 14,
	paddingTop: 1,
}));
