import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useEffect, useState, ReactNode } from "react";
import MenuIconWrapper from "../../components/icon/MenuIconWrapper";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import CircleIcon from "@mui/icons-material/Circle";
import { Link, LinkProps, useMatch, useResolvedPath } from "react-router-dom";
import useThemeStore from "../../stores/useThemeStore";
import { theme } from "../../styles/theme";
import useMenuBarStore from "../../stores/useMenuBarStore";

interface IconMenuItemProps {
	open: boolean;
	iconComponent: ReactNode;
	closeOpenedMenu: boolean;
	title: string; // 영어아이디
	name: string; // 한글이름
	subMenu: { id: string; name: string; subMenu?: { id: string; name: string }[] }[];
	color: string;
}

const RouteHandler = ({ children, to, ...props }: LinkProps) => {
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

// 좌측 메뉴바 개별 메뉴 Display
const IconMenuItem = ({
	open,
	iconComponent,
	closeOpenedMenu,
	title,
	subMenu,
	name,
	color,
}: IconMenuItemProps) => {
	const [subMenuOpen, setSubMenuOpen] = useState(false);
	const { setIsBarOpen } = useMenuBarStore();

	useEffect(() => {
		setSubMenuOpen(false);
	}, [closeOpenedMenu]);

	return (
		<>
			<ListItemButton sx={{ paddingRight: 3 }} onClick={() => open && setSubMenuOpen(!subMenuOpen)}>
				<ListItemIcon sx={{ alignItems: "center", justifyContent: "center" }}>
					<MenuIconWrapper
						setOpen={() => {
							setIsBarOpen();
						}}
						open={open}
						color={color}
						iconComponent={iconComponent}
						title={name}
					/>
					{open && (
						<>
							<ListItemText sx={{ padding: "0px 20px", color }} primary={name} />
							{subMenuOpen ? <ExpandLess /> : <ExpandMore />}
						</>
					)}
				</ListItemIcon>
			</ListItemButton>
			<Collapse in={subMenuOpen} timeout="auto" unmountOnExit>
				<List component="div" disablePadding>
					{subMenu.map((menu) => (
						<div key={menu.id}>
							<RouteHandler to={`/${title}/${menu.id}`}>
								<ListItemButton dense>
									<CircleIcon sx={{ fontSize: ".5rem", margin: "0px 6px", opacity: 0.4 }} />
									<ListItemText primary={menu.name} />
								</ListItemButton>
							</RouteHandler>
							{menu.subMenu?.map((submenu) => (
								<RouteHandler key={submenu.id} to={`${title}/${menu.id}/${submenu.id}`}>
									<ListItemButton dense>
										<CircleIcon sx={{ fontSize: ".5rem", margin: "0px 16px", opacity: 0.2 }} />
										<ListItemText primary={submenu.name} />
									</ListItemButton>
								</RouteHandler>
							))}
						</div>
					))}
				</List>
			</Collapse>
		</>
	);
};

export default IconMenuItem;
