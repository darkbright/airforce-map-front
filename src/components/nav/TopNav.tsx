import { AppBar, Box, Toolbar } from "@mui/material";
import COPTextLogo from "../../assets/logos/COPTextLogo";
import ToggleDarkMode from "../mode/ToggleDarkMode";
import { useAuth } from "../../stores/useAuth";
import TopNavProfile from "../../modules/menu/TopNavProfile";
import ModeCodeToggle from "../../modules/menu/ModeCodeToggle";

const TopNav = () => {
	const { authUser } = useAuth();

	return (
		<Box sx={{ display: "flex" }}>
			<AppBar
				sx={{
					boxShadow: 0,
					borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
					background: (theme) => theme.palette.background.paper,
				}}
				position="static"
				// color="transparent"
			>
				<Toolbar>
					<COPTextLogo />
					<Box sx={{ flexGrow: 1 }} />
					<TopNavProfile title={`${authUser?.name} ${authUser?.position}님`} />
					<ModeCodeToggle />
					<ToggleDarkMode />
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default TopNav;
