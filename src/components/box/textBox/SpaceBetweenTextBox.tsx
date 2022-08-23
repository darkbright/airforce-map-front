import { styled, Typography } from "@mui/material";
import { ReactNode } from "react";

interface SpaceBetweenTextBoxProps {
	title: string;
	children: ReactNode;
	marginBottom?: number;
}

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
