import { styled } from "@mui/material";

const Root = styled("div")(({ theme }) => ({
	padding: "2px 4px",
	background: theme.palette.background.paper,
}));

const BreadCrumbBar = () => {
	return <Root>breadcrumb</Root>;
};

export default BreadCrumbBar;
