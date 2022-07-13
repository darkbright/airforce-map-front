import { IconButton, styled, Typography } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

interface WidgetTitleBoxProps {
	title: string;
	showMoreMenu?: boolean;
	handleShowMore?: () => void;
}

// 우측 위젯용 타이틀 설정 박스
const WidgetTitleBox = ({ title, showMoreMenu = true, handleShowMore }: WidgetTitleBoxProps) => {
	return (
		<Root>
			<Typography variant="h6" color="InactiveCaptionText">
				{title}
			</Typography>
			{showMoreMenu && (
				<IconButton aria-label="showMore" onClick={handleShowMore}>
					<MoreVertIcon color="action" />
				</IconButton>
			)}
		</Root>
	);
};

export default WidgetTitleBox;

const Root = styled("div")(() => ({
	padding: 10,
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
}));
