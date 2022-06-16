import { Link, LinkProps, useMatch, useResolvedPath } from "react-router-dom";
import useThemeStore from "../stores/useThemeStore";
import { theme } from "../styles/theme";

const RouteStyleHandler = ({ children, to, ...props }: LinkProps) => {
	const { isDark } = useThemeStore();
	const resolved = useResolvedPath(to);
	const match = useMatch({ path: resolved.pathname, end: true });

	return (
		<div>
			<Link
				style={{
					color: match ? theme(isDark).palette.primary.main : theme(isDark).palette.text.secondary,
					fontWeight: match ? 700 : 400,
					textDecoration: "none",
				}}
				to={to}
				{...props}
			>
				{children}
			</Link>
		</div>
	);
};

export default RouteStyleHandler;
