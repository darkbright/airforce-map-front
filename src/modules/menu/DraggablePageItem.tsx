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
	flexDirection: "row",
	justifyContent: "space-between",
	marginBottom: "8px",
}));

const GrabBox = styled("div")(() => ({
	cursor: "grab",
	display: "flex",
}));
