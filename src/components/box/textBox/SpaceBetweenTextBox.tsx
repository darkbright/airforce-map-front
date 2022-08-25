import { styled, Typography } from "@mui/material";
import { ReactNode } from "react";

interface SpaceBetweenTextBoxProps {
	title: string;
	children: ReactNode;
	marginBottom?: number;
}

/**
 * 특정 Div에서 좌우의 양 끝에 텍스트를 배치하고 싶을 때 쓰는 Div Element
 *
 * 예를 들면 "제목: 어쩌고"와 같은 형태이면서, 좌우 양 끝 지점에 두 개의 텍스트가 나란히 배치되고 싶을 때(Space-between) 씀.
 * @param {SpaceBetweenTextBoxProps} SpaceBetweenTextBoxProps
 * @returns {JSX.Element} React Component
 */
const SpaceBetweenTextBox = ({ title, children, marginBottom = 0 }: SpaceBetweenTextBoxProps) => {
	return (
		<Root style={{ marginBottom }}>
			<Typography variant="body1">{title}</Typography>
			<div>{children}</div>
		</Root>
	);
};

export default SpaceBetweenTextBox;

const Root = styled("div")(() => ({
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
}));
