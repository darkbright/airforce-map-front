import { styled, Typography } from "@mui/material";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";

interface DataGridTitleBoxProps {
	title?: string;
}

// DataGrid 사용 시 테이블 제목 설정
const DataGridTitleBox = ({ title = "현황목록" }: DataGridTitleBoxProps) => {
	return (
		<Root>
			<CircleOutlinedIcon fontSize="small" color="info" />
			<Typography color="InfoText" variant="body1" sx={{ fontWeight: 600, pl: 1 }}>
				{title}
			</Typography>
		</Root>
	);
};

export default DataGridTitleBox;

const Root = styled("div")(() => ({
	display: "flex",
	flexDirection: "row",
	marginBottom: "1%",
	alignItems: "center",
}));
