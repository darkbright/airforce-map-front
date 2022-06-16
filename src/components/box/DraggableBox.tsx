import { styled, Typography } from "@mui/material";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

interface DraggableBoxProps {
	name: string;
	deleteItem: () => void;
}

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

const DraggableBox = ({ name, deleteItem }: DraggableBoxProps) => {
	return (
		<Root>
			<GrabBox>
				<DragIndicatorIcon color="action" sx={{ opacity: 0.4 }} />
				<Typography variant="body1">{name}</Typography>
			</GrabBox>
			<RemoveCircleIcon color="action" onClick={deleteItem} sx={{ cursor: "pointer" }} />
		</Root>
	);
};

export default DraggableBox;
