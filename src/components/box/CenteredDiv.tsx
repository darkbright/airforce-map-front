import { styled } from "@mui/material";
import { ReactNode } from "react";

const CenteredDiv = ({ children }: { children: ReactNode }) => {
	return <Root>{children}</Root>;
};

export default CenteredDiv;

const Root = styled("div")(() => ({
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	textAlign: "center",
}));
