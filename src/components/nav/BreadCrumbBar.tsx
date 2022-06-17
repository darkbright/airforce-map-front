import { Breadcrumbs, Link, LinkProps, styled, Typography } from "@mui/material";
import { useLocation, Link as RouterLink } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { flattenedMenu } from "../../data/constants/menu";
import AddToFavoritePage from "../../modules/menu/AddToFavoritePage";

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
	const finalRouteInKorean = routeNameInKorean[routeNameInKorean.length - 1] || "";
	const isNotMainPage = splitedRoute[0] !== "index";

	return (
		<Root>
			<Typography variant="body1" sx={{ fontWeight: 600 }}>
				{finalRouteInKorean}
			</Typography>
			<RightWrapper>
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
				<AddToFavoritePage
					location={location.pathname}
					koreanName={finalRouteInKorean}
					isNotMainPage={isNotMainPage}
				/>
			</RightWrapper>
		</Root>
	);
};

export default BreadCrumbBar;

// styles

const Root = styled("div")(({ theme }) => ({
	padding: "8px 20px",
	background: theme.palette.background.paper,
	display: "flex",
	flexDirection: "row",
	justifyContent: "space-between",
	borderBottom: `1px solid ${theme.palette.divider}`,
}));

const RightWrapper = styled("div")(() => ({
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
}));
