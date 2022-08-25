import { styled, Typography } from "@mui/material";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";

interface DataGridTitleBoxProps {
	title?: string;
}

/**
 * 기존 공군 사이트에서 쓰던 "⃝ 제목" 형태의 제목 전용 Div Element로 원을 따로 그려주지 않아도 된다
 * @param {DataGridTitleBoxProps} DataGridTitleBoxProps
 * @returns {JSX.Element} React Component
 */
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
