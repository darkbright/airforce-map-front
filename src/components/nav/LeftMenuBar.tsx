import { Divider, IconButton, List, styled } from "@mui/material";
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
import useMenuBarStore from "../../stores/useMenuBarStore";
import { useLocation } from "react-router-dom";
import { theme } from "../../styles/theme";
import useThemeStore from "../../stores/useThemeStore";

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
	const { isBarOpen, setIsBarOpen } = useMenuBarStore();
	const { isDark } = useThemeStore();
	const location = useLocation();
	const rootRoute = location.pathname.split("/")[1];
	const mainColor = theme(isDark).palette.primary.main;

	const highlightIcon = (routeName: string): string => {
		// 현재 route의 부모 path가 매칭하는 경우 아이콘 색을 primary색으로 바꿈
		return rootRoute === routeName ? mainColor : "";
	};

	return (
		<Root>
			<Paper width={isBarOpen ? 210 : 90}>
				<div style={{ marginTop: "2%", textAlign: "right" }}>
					<ShrinkBtn
						isshrinked={String(isBarOpen)}
						size="small"
						aria-label="expand-menu"
						onClick={() => setIsBarOpen()}
					>
						{isBarOpen ? (
							<ArrowBackIosIcon fontSize="small" color="secondary" />
						) : (
							<ArrowForwardIosIcon fontSize="small" color="secondary" />
						)}
					</ShrinkBtn>
				</div>
				<List component="nav" aria-labelledby="affcss-cop-main-menu">
					{/* 상황공유체계 */}
					<IconMenuItem
						open={isBarOpen}
						closeOpenedMenu={!isBarOpen}
						iconComponent={
							<OperationSharingIcon color={highlightIcon(operationSharingSystem.title)} />
						}
						color={highlightIcon(operationSharingSystem.title)}
						name={operationSharingSystem.name}
						title={operationSharingSystem.title}
						subMenu={operationSharingSystem.subMenu}
					/>
					<IconMenuItem
						open={isBarOpen}
						closeOpenedMenu={!isBarOpen}
						iconComponent={<MapIcon color={highlightIcon(COPTotalState.title)} />}
						color={highlightIcon(COPTotalState.title)}
						name={COPTotalState.name}
						title={COPTotalState.title}
						subMenu={COPTotalState.subMenu}
					/>
					{/* 기지방어/헌병 */}
					<IconMenuItem
						open={isBarOpen}
						closeOpenedMenu={!isBarOpen}
						color={highlightIcon(baseDefenseAndSecurityPolice.title)}
						iconComponent={
							<DefenseIcon color={highlightIcon(baseDefenseAndSecurityPolice.title)} />
						}
						name={baseDefenseAndSecurityPolice.name}
						title={baseDefenseAndSecurityPolice.title}
						subMenu={baseDefenseAndSecurityPolice.subMenu}
					/>
					{/* 정보통신 */}
					<IconMenuItem
						open={isBarOpen}
						closeOpenedMenu={!isBarOpen}
						color={highlightIcon(infoCommunication.title)}
						iconComponent={<InternetIcon color={highlightIcon(infoCommunication.title)} />}
						name={infoCommunication.name}
						title={infoCommunication.title}
						subMenu={infoCommunication.subMenu}
					/>
					{/* 동원 */}
					<IconMenuItem
						open={isBarOpen}
						closeOpenedMenu={!isBarOpen}
						color={highlightIcon(mobilization.title)}
						iconComponent={<MilitaryBagIcon color={highlightIcon(mobilization.title)} />}
						name={mobilization.name}
						title={mobilization.title}
						subMenu={mobilization.subMenu}
					/>
					{/* 인사 */}
					<IconMenuItem
						open={isBarOpen}
						closeOpenedMenu={!isBarOpen}
						color={highlightIcon(humanAffairs.title)}
						iconComponent={<HumanIcon color={highlightIcon(humanAffairs.title)} />}
						name={humanAffairs.name}
						title={humanAffairs.title}
						subMenu={humanAffairs.subMenu}
					/>
					{/* 군수 */}
					<IconMenuItem
						open={isBarOpen}
						closeOpenedMenu={!isBarOpen}
						color={highlightIcon(munitions.title)}
						iconComponent={<WarehouseIcon color={highlightIcon(munitions.title)} />}
						name={munitions.name}
						title={munitions.title}
						subMenu={munitions.subMenu}
					/>
					{/* 시설종합 */}
					<IconMenuItem
						open={isBarOpen}
						closeOpenedMenu={!isBarOpen}
						color={highlightIcon(facilities.title)}
						iconComponent={<RunwayIcon color={highlightIcon(facilities.title)} />}
						name={facilities.name}
						title={facilities.title}
						subMenu={facilities.subMenu}
					/>
					{/* 우주 */}
					<IconMenuItem
						open={isBarOpen}
						closeOpenedMenu={!isBarOpen}
						color={highlightIcon(aerospace.title)}
						iconComponent={<AerospaceIcon color={highlightIcon(aerospace.title)} />}
						name={aerospace.name}
						title={aerospace.title}
						subMenu={aerospace.subMenu}
					/>
					{/* 작전기상 */}
					<IconMenuItem
						open={isBarOpen}
						closeOpenedMenu={!isBarOpen}
						color={highlightIcon(operationWeather.title)}
						iconComponent={<SunnyWeatherIcon color={highlightIcon(operationWeather.title)} />}
						name={operationWeather.name}
						title={operationWeather.title}
						subMenu={operationWeather.subMenu}
					/>
				</List>
				<Divider />
				{isBarOpen && (
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
