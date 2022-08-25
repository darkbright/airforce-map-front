import { styled } from "@mui/material";
import { ReactNode } from "react";

/**
 * div를 생성하고, 그 div 안의 내용이 div의 정중앙에 위치하도록 함
 * @param {ReactNode} children reactNode
 * @returns {JSX.Element} React Component
 */
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
