import { Divider, IconButton, List, styled } from "@mui/material";
import IconMenuItem from "../../modules/menu/IconMenuItem";
import { menu } from "../../data/constants/menu";
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

	// Icon matching을 위해선 tsx 타입이 필요한 바,
	// menu list에서 대응되는 icon을 현재 파일에서 로드함.
	// 대 메뉴가 추가될 경우 icon 설정이 필요함.
	const menuIcons = [
		{
			title: "operationSharingSystem",
			icon: <OperationSharingIcon color={highlightIcon("operationSharingSystem")} />,
		},
		{
			title: "COPTotalState",
			icon: <MapIcon color={highlightIcon("COPTotalState")} />,
		},
		{
			title: "baseDefenseAndSecurityPolice",
			icon: <DefenseIcon color={highlightIcon("baseDefenseAndSecurityPolice")} />,
		},
		{
			title: "infoCommunication",
			icon: <InternetIcon color={highlightIcon("infoCommunication")} />,
		},
		{
			title: "mobilization",
			icon: <MilitaryBagIcon color={highlightIcon("mobilization")} />,
		},
		{
			title: "humanAffairs",
			icon: <HumanIcon color={highlightIcon("humanAffairs")} />,
		},
		{
			title: "munitions",
			icon: <WarehouseIcon color={highlightIcon("munitions")} />,
		},
		{
			title: "baseDefenseAndSecurityPolice",
			icon: <DefenseIcon color={highlightIcon("baseDefenseAndSecurityPolice")} />,
		},
		{
			title: "facilities",
			icon: <RunwayIcon color={highlightIcon("facilities")} />,
		},
		{
			title: "aerospace",
			icon: <AerospaceIcon color={highlightIcon("aerospace")} />,
		},
		{
			title: "operationWeather",
			icon: <SunnyWeatherIcon color={highlightIcon("operationWeather")} />,
		},
	];

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
					{menu.map((m) => (
						<IconMenuItem
							key={m.title}
							color={highlightIcon(m.title)}
							open={isBarOpen}
							closeOpenedMenu={!isBarOpen}
							iconComponent={menuIcons.find((icon) => icon.title === m.title)?.icon}
							name={m.name}
							title={m.title}
							subMenu={m.subMenu}
						/>
					))}
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
