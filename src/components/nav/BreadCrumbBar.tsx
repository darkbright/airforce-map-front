import { Breadcrumbs, Link, LinkProps, styled, Typography } from "@mui/material";
import { useLocation, Link as RouterLink } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { flattenedMenu } from "../../data/constants/menu";

const Root = styled("div")(({ theme }) => ({
	padding: "4px 40px",
	background: theme.palette.background.paper,
	display: "flex",
	flexDirection: "row",
	justifyContent: "space-between",
}));

interface LinkRouterProps extends LinkProps {
	to: string;
	replace?: boolean;
}

const LinkRouter = (props: LinkRouterProps) => {
	return <Link {...props} component={RouterLink as any} />;
};

const BreadCrumbBar = () => {
	const location = useLocation();
	const splitedRoute = location.pathname.split("/").slice(1);
	const routeNameInKorean = splitedRoute.map(
		(route) => flattenedMenu().find((menu) => menu.path === route)?.korean,
	);
	const isNotMainPage = splitedRoute[0] !== "index";

	return (
		<Root>
			<div> {routeNameInKorean[routeNameInKorean.length - 1]}</div>
			<Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
				<LinkRouter underline="hover" color="inherit" to="/index">
					메인화면
				</LinkRouter>
				{isNotMainPage &&
					routeNameInKorean.map((route) => (
						<Typography key={route} color="inherit">
							{route}
						</Typography>
					))}
			</Breadcrumbs>
		</Root>
	);
};

export default BreadCrumbBar;
