import { styled } from "@mui/material";

interface DefaultBoxProps {
	children: React.ReactNode;
	isBackgroundPaper?: boolean;
}

const DefaultBox = ({ children, isBackgroundPaper = true }: DefaultBoxProps) => {
	return <BoxWrapper isBackgroundPaper={isBackgroundPaper}>{children}</BoxWrapper>;
};

export default DefaultBox;

const BoxWrapper = styled("div", {
	shouldForwardProp: (prop) => prop !== "isBackgroundPaper",
})<{ isBackgroundPaper?: boolean }>(({ theme, isBackgroundPaper }) => ({
	padding: "5%",
	background: isBackgroundPaper ? theme.palette.background.paper : theme.palette.background.default,
	borderRadius: 8,
}));
