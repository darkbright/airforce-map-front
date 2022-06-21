import { styled, Typography } from "@mui/material";

interface BaseBlockTitleBoxProps {
	title: string;
	subtitle?: string;
}

// 항목들의 소제목 및 부제 등을 적는 박스
const BaseBlockTitleBox = ({ title, subtitle }: BaseBlockTitleBoxProps) => {
	return (
		<Root>
			<Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
				{title}
			</Typography>
			<Typography variant="body2" gutterBottom>
				{subtitle}
			</Typography>
		</Root>
	);
};

export default BaseBlockTitleBox;

const Root = styled("div")(() => ({
	marginTop: "3%",
	marginBottom: "4%",
}));
