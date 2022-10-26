import { AppBar, Box, Toolbar } from "@mui/material";
import COPTextLogoProposal1 from "../../assets/logos/COPTextLogoProposal1";
import ToggleDarkMode from "../mode/ToggleDarkMode";
import { useAuth } from "../../stores/useAuth";
import TopNavProfile from "../../modules/menu/TopNavProfile";
import ModeCodeToggle from "../../modules/menu/ModeCodeToggle";
import { Link } from "react-router-dom";
import useFullScreenStore from "../../stores/useFullScreenStore";
import ToggleFullScreenMode from "../mode/ToggleFullScreenMode";

/**
 * 하면 최상단의 툴바로, 로고, 현재 유저 정보, 라이트모드/다크모드 등을 포함함
 * @returns {JSX.Element} React Component
 */

const TopNav = () => {
	const { authUser } = useAuth();
	const { isFullScreenOpen } = useFullScreenStore();

	const display = isFullScreenOpen ? "none" : "block";

	return (
		<Box sx={{ display: "flex" }}>
			<AppBar
				sx={{
					boxShadow: 0,
					borderBottom: (theme) =>
						isFullScreenOpen ? "none" : `1px solid ${theme.palette.divider}`,
					background: (theme) => (isFullScreenOpen ? "none" : theme.palette.background.paper),
				}}
				position="absolute"
				// color="transparent"
			>
				<Toolbar>
					<Link to="/index" style={{ display }}>
						<COPTextLogoProposal1 hasIcon />
					</Link>
					<Box sx={{ flexGrow: 1 }} />
					<TopNavProfile display={display} title={`${authUser?.name} ${authUser?.position}님`} />
					<ModeCodeToggle display={display} />
					<ToggleDarkMode />
					<ToggleFullScreenMode />
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default TopNav;
