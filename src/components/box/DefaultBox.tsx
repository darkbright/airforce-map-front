import { styled } from "@mui/material";

interface DefaultBoxProps {
	children: React.ReactNode;
}

const BoxWrapper = styled("div")(({ theme }) => ({
	padding: "5%",
	background: theme.palette.background.paper,
	borderRadius: 8,
}));

const DefaultBox = ({ children }: DefaultBoxProps) => {
	return <BoxWrapper>{children}</BoxWrapper>;
};

export default DefaultBox;
