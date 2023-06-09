import { IconButton, styled, Tab, Tabs } from "@mui/material";
import TabPanel from "../tab/TabPanel";
import WarningIcon from "@mui/icons-material/Warning";
import TableRowsIcon from "@mui/icons-material/TableRows";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import WarningTab from "./WarningTab";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import DataTab from "./DataTab";
import useRightWidgetBarStore from "../../stores/useRightWidgetBarStore";

function a11yProps(index: number) {
	return {
		id: `vertical-widget-${index}`,
		"aria-controls": `vertical-tabpanel-${index}`,
	};
}
/**
 * 화면 맨 오른쪽의 아이콘으로 구성된 Vertical Tab을 Vertical Bar 형태로 구현한 것
 * @returns {JSX.Element} React Component
 *
 */
const WidgetBar = () => {
	const { isBarOpen, setIsBarOpen, setSelectedTab, selectedTab } = useRightWidgetBarStore();

	return (
		<Root>
			<Paper>
				<TabHeadArea>
					<div style={{ marginTop: "2%", textAlign: "left" }}>
						<ShrinkBtn
							isshrinked={String(isBarOpen)}
							size="small"
							aria-label="expand-menu"
							onClick={() => {
								setIsBarOpen(!isBarOpen);
							}}
						>
							{isBarOpen ? (
								<ArrowForwardIosIcon fontSize="small" color="secondary" />
							) : (
								<ArrowBackIosIcon fontSize="small" color="secondary" />
							)}
						</ShrinkBtn>
					</div>
					<Tabs
						orientation="vertical"
						variant="scrollable"
						value={isBarOpen ? selectedTab : false}
						onChange={(e, newValue) => {
							setSelectedTab(newValue);
							setIsBarOpen(true);
						}}
						aria-label="vertical-widget-tab"
					>
						<Tab icon={<WarningIcon />} {...a11yProps(0)} />
						<Tab icon={<TableRowsIcon />} {...a11yProps(1)} />
						<Tab icon={<EmojiObjectsIcon />} {...a11yProps(2)} />
					</Tabs>
				</TabHeadArea>
				<TabContentArea show={isBarOpen}>
					<TabPanel value={selectedTab} index={0}>
						<WarningTab />
					</TabPanel>
					<TabPanel value={selectedTab} index={1}>
						<DataTab />
					</TabPanel>
					<TabPanel value={selectedTab} index={2}>
						sdfdsg
					</TabPanel>
				</TabContentArea>
			</Paper>
		</Root>
	);
};

export default WidgetBar;

const Root = styled("div")(({ theme }) => ({
	borderLeft: `1px solid ${theme.palette.divider}`,
	height: "99%",
	background: theme.palette.background.paper,
	"*::-webkit-scrollbar": {
		display: "none",
	},
}));

const Paper = styled("div")(() => ({
	height: "97vh",
	overflowY: "scroll",
	transition: "width ease-out 0.1s",
	paddingBottom: "80px",
	display: "flex",
	flexDirection: "row-reverse",
}));

const TabContentArea = styled("div", {
	shouldForwardProp: (prop) => prop !== "show",
})<{ show: boolean }>(({ theme, show }) => ({
	display: show ? "block" : "none",
	width: 300,
	borderRight: `1px solid ${theme.palette.divider}`,
}));

const TabHeadArea = styled("div")(() => ({}));

const ShrinkBtn = styled(IconButton)(({ isshrinked }: { isshrinked: string }) => ({
	"&:hover": {
		transform: isshrinked === "false" ? "translateX(+.3rem)" : "translateX(-.3rem)",
		transition: "all .2s ease-in-out",
	},
}));
