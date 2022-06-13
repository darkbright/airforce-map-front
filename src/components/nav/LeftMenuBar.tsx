import { Divider, IconButton, List, styled } from "@mui/material";
import { useState } from "react";
import IconMenuItem from "../../modules/menu/IconMenuItem";
import {
	aerospace,
	baseDefenseAndSecurityPolice,
	COPTotalState,
	facilities,
	humanAffairs,
	infoCommunication,
	mobilization,
	munitions,
	operationSharingSystem,
	operationWeather,
} from "../../data/constants/menu";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import OperationSharingIcon from "../../assets/icons/OperationSharingIcon";
import MapIcon from "../../assets/icons/MapIcon";
import DefenseIcon from "../../assets/icons/DefenseIcon";
import InternetIcon from "../../assets/icons/InternetIcon";
import MilitaryBagIcon from "../../assets/icons/MilitaryBagIcon";
import HumanIcon from "../../assets/icons/HumanIcon";
import WarehouseIcon from "../../assets/icons/WarehouseIcon";
import RunwayIcon from "../../assets/icons/RunwayIcon";
import AerospaceIcon from "../../assets/icons/AerospaceIcon";
import SunnyWeatherIcon from "../../assets/icons/SunnyWeatherIcon";
import BaseButton from "../button/BaseButton";
import KoreaAirForceLetterLogo from "../../assets/logos/KoreaAirForceLetterLogo";

const Root = styled("div")(({ theme }) => ({
	borderRight: `1px solid ${theme.palette.divider}`,
	height: "99%",
	background: theme.palette.background.paper,
}));

const Paper = styled("div")(({ width }: { width: number }) => ({
	width,
	height: "97vh",
	overflowY: "scroll",
	transition: "width ease-out 0.1s",
	paddingBottom: "80px",
}));

const ShrinkBtn = styled(IconButton)(({ isshrinked }: { isshrinked: string }) => ({
	"&:hover": {
		transform: isshrinked === "false" ? "translateX(+.3rem)" : "translateX(-.3rem)",
		transition: "all .2s ease-in-out",
	},
}));

const LeftMenuBar = () => {
	const [open, setOpen] = useState(false);

	return (
		<Root>
			<Paper width={open ? 210 : 90}>
				<div style={{ marginTop: "2%", textAlign: "right" }}>
					<ShrinkBtn
						isshrinked={String(open)}
						size="small"
						aria-label="expand-menu"
						onClick={() => setOpen(!open)}
					>
						{open ? (
							<ArrowBackIosIcon fontSize="small" color="secondary" />
						) : (
							<ArrowForwardIosIcon fontSize="small" color="secondary" />
						)}
					</ShrinkBtn>
				</div>
				<List component="nav" aria-labelledby="affcss-cop-main-menu">
					{/* 상황공유체계 */}
					<IconMenuItem
						open={open}
						closeOpenedMenu={!open}
						iconComponent={<OperationSharingIcon />}
						title={operationSharingSystem.name}
						subMenu={operationSharingSystem.subMenu}
					/>
					<IconMenuItem
						open={open}
						closeOpenedMenu={!open}
						iconComponent={<MapIcon />}
						title={COPTotalState.name}
						subMenu={COPTotalState.subMenu}
					/>
					{/* 기지방어/헌병 */}
					<IconMenuItem
						open={open}
						closeOpenedMenu={!open}
						iconComponent={<DefenseIcon />}
						title={baseDefenseAndSecurityPolice.name}
						subMenu={baseDefenseAndSecurityPolice.subMenu}
					/>
					{/* 정보통신 */}
					<IconMenuItem
						open={open}
						closeOpenedMenu={!open}
						iconComponent={<InternetIcon />}
						title={infoCommunication.name}
						subMenu={infoCommunication.subMenu}
					/>
					{/* 동원 */}
					<IconMenuItem
						closeOpenedMenu={!open}
						open={open}
						iconComponent={<MilitaryBagIcon />}
						title={mobilization.name}
						subMenu={mobilization.subMenu}
					/>
					{/* 인사 */}
					<IconMenuItem
						open={open}
						closeOpenedMenu={!open}
						iconComponent={<HumanIcon />}
						title={humanAffairs.name}
						subMenu={humanAffairs.subMenu}
					/>
					{/* 군수 */}
					<IconMenuItem
						open={open}
						closeOpenedMenu={!open}
						iconComponent={<WarehouseIcon />}
						title={munitions.name}
						subMenu={munitions.subMenu}
					/>
					{/* 시설종합 */}
					<IconMenuItem
						open={open}
						closeOpenedMenu={!open}
						iconComponent={<RunwayIcon />}
						title={facilities.name}
						subMenu={facilities.subMenu}
					/>
					{/* 우주 */}
					<IconMenuItem
						open={open}
						closeOpenedMenu={!open}
						iconComponent={<AerospaceIcon />}
						title={aerospace.name}
						subMenu={aerospace.subMenu}
					/>
					{/* 작전기상 */}
					<IconMenuItem
						open={open}
						closeOpenedMenu={!open}
						iconComponent={<SunnyWeatherIcon />}
						title={operationWeather.name}
						subMenu={operationWeather.subMenu}
					/>
				</List>
				<Divider />
				{open && (
					<div
						style={{
							marginTop: 30,
							height: 60,
							display: "flex",
							flexDirection: "column",
							justifyContent: "space-between",
							alignItems: "center",
						}}
					>
						<BaseButton type="button" variant="text" title="기존 AFCCS 시스템 이동" />
						<KoreaAirForceLetterLogo width={70} />
					</div>
				)}
			</Paper>
		</Root>
	);
};

export default LeftMenuBar;
