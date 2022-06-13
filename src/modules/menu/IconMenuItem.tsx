import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useEffect, useState, ReactNode } from "react";
import MenuIconWrapper from "../../components/icon/MenuIconWrapper";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import CircleIcon from "@mui/icons-material/Circle";

interface IconMenuItemProps {
	open: boolean;
	iconComponent: ReactNode;
	closeOpenedMenu: boolean;
	title: string;
	subMenu: { id: number; name: string; subMenu?: { id: number; name: string }[] }[];
}

// 좌측 메뉴바 개별 메뉴 Display
const IconMenuItem = ({
	open,
	iconComponent,
	closeOpenedMenu,
	title,
	subMenu,
}: IconMenuItemProps) => {
	const [subMenuOpen, setSubMenuOpen] = useState(false);

	useEffect(() => {
		setSubMenuOpen(false);
	}, [closeOpenedMenu]);

	return (
		<>
			<ListItemButton sx={{ paddingRight: 3 }} onClick={() => open && setSubMenuOpen(!subMenuOpen)}>
				<ListItemIcon sx={{ alignItems: "center", justifyContent: "center" }}>
					<MenuIconWrapper open={open} iconComponent={iconComponent} title={title} />
					{open && (
						<>
							<ListItemText sx={{ padding: "0px 20px" }} primary={title} />
							{subMenuOpen ? <ExpandLess /> : <ExpandMore />}
						</>
					)}
				</ListItemIcon>
			</ListItemButton>
			<Collapse in={subMenuOpen} timeout="auto" unmountOnExit>
				<List component="div" disablePadding>
					{subMenu.map((menu) => (
						<div key={menu.id}>
							<ListItemButton dense>
								<CircleIcon sx={{ fontSize: ".5rem", margin: "0px 6px", opacity: 0.4 }} />
								<ListItemText primary={menu.name} />
							</ListItemButton>
							{menu.subMenu?.map((submenu) => (
								<ListItemButton key={submenu.id} dense>
									<CircleIcon sx={{ fontSize: ".5rem", margin: "0px 16px", opacity: 0.2 }} />
									<ListItemText primary={submenu.name} />
								</ListItemButton>
							))}
						</div>
					))}
				</List>
			</Collapse>
		</>
	);
};

export default IconMenuItem;
