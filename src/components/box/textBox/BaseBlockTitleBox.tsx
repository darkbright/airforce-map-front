import { Divider, styled, Typography } from "@mui/material";

/**
 * BaseBlockTitleBox 컴포넌트의 인터페이스
 */

interface BaseBlockTitleBoxProps {
	title: string;
	subtitle?: string;
}

// 항목들의 소제목 및 부제 등을 적는 박스
/**
 * 제목과 소제목을 표현해주는 div block으로, 일반적으로 표 또는 div 내에 특정 항목에 대한 제목이 필요한 경우 쓸 수 있겠음.
 * @param {BaseBlockTitleBoxProps} BaseBlockTitleBoxProps
 * @returns {JSX.Element} React Component
 */

const BaseBlockTitleBox = ({ title, subtitle }: BaseBlockTitleBoxProps) => {
	return (
		<Root>
			<Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
				{title}
			</Typography>
			<Typography variant="body2" gutterBottom>
				{subtitle}
			</Typography>
			<Divider />
		</Root>
	);
};

export default BaseBlockTitleBox;

const Root = styled("div")(() => ({
	marginTop: "3%",
	marginBottom: "4%",
}));
