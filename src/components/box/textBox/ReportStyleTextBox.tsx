import { styled, Typography } from "@mui/material";
import { ReactNode } from "react";
import FiberManualRecordOutlinedIcon from "@mui/icons-material/FiberManualRecordOutlined";

interface ReportStyleTextBoxProps {
	title: string;
	children: ReactNode;
	marginBottom?: number;
}

/**
 * 리포트(보고서) 형식의 좌우의 양 끝에 텍스트를 배치하고 싶을 때 쓰는 Div Element
 *
 * 예를 들면 "제목: 어쩌고"와 같은 형태이면서, 좌우 양 끝 지점에 두 개의 텍스트가 나란히 배치되고 싶을 때(Space-between) 씀.
 * @param {ReportStyleTextBoxProps} ReportStyleTextBoxProps
 * @returns {JSX.Element} React Component
 */
const ReportStyleTextBox = ({ title, children, marginBottom = 0 }: ReportStyleTextBoxProps) => {
	return (
		<Root style={{ marginBottom }}>
			<TitleWrapper>
				<FiberManualRecordOutlinedIcon fontSize="small" sx={{ opacity: 0.5 }} />
				<Typography sx={{ pl: 1, pr: 2, fontWeight: 600 }} variant="body1">
					{title}
				</Typography>
			</TitleWrapper>
			<div>{children}</div>
		</Root>
	);
};

export default ReportStyleTextBox;

const Root = styled("div")(() => ({
	display: "flex",
	alignItems: "center",
	width: "100%",
}));

const TitleWrapper = styled("div")(() => ({
	display: "flex",
	alignItems: "center",
	minWidth: "15%",
}));
