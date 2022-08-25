import { styled, Typography } from "@mui/material";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { Draggable } from "react-beautiful-dnd";

interface DraggablePageItemProps {
	name: string;
	id: string;
	deleteItem: () => void;
	index: number;
}

/**
 * 측 메뉴에서 즐겨찾기 Tab을 누르면 나오는 "즐겨찾기 설정"을 눌렀을 때 나오는 모달인 FaveoritePagesModal을 누르면 우측에 뜨는
 * DragFavoritePagesList의 개별 항목 Div
 * - 즐겨찾기 항목의 드래그
 * - 즐겨찾기 항목의 삭제
 * @param {DraggablePageItemProps } DraggablePageItemProps
 * @returns {JSX.Element} JSX.Element(div)
 */

const DraggablePageItem = ({ id, name, deleteItem, index }: DraggablePageItemProps) => {
	return (
		<Draggable draggableId={id} index={index}>
			{(provided) => (
				<Root ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
					<GrabBox>
						<DragIndicatorIcon color="action" sx={{ opacity: 0.4 }} />
						<Typography variant="body1">{name}</Typography>
					</GrabBox>
					<RemoveCircleIcon
						color="action"
						onClick={deleteItem}
						sx={{ cursor: "pointer", opacity: 0.4, "&:hover": { opacity: 1 } }}
					/>
				</Root>
			)}
		</Draggable>
	);
};

export default DraggablePageItem;

const Root = styled("div")(({ theme }) => ({
	width: "100%",
	padding: "5px",
	border: `1px solid ${theme.palette.divider}`,
	borderRadius: 6,
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	marginBottom: "8px",
}));

const GrabBox = styled("div")(() => ({
	cursor: "grab",
	display: "flex",
}));
