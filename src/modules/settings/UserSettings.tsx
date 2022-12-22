import { Box, Dialog, Slide, styled, Tab, Tabs } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import { forwardRef, ReactElement, Ref, SyntheticEvent, useState } from "react";
import BaseBlockTitleBox from "../../components/box/textBox/BaseBlockTitleBox";
import CloseButton from "../../components/button/CloseButton";
import TabPanel from "../../components/tab/TabPanel";
import MapSymbol from "./userSettingsDetail/MapSymbol";
import UserInfo from "./userSettingsDetail/UserInfo";

interface UserSettingsProps {
	open: boolean;
	setOpen: (open: boolean) => void;
}

const Transition = forwardRef(function Transition(
	props: TransitionProps & {
		children: ReactElement;
	},
	ref: Ref<unknown>,
) {
	return <Slide direction="down" ref={ref} {...props} />;
});

/**
 * 화면 상단의 유저 이름이 뜨는 부분에 유저를 클릭하면 나오는 세팅을 눌렀을 때 나오는 풀스크린 모달
 * @param UserSettingsProps UserSettingsProps
 * @returns {JSX.Element} Dialog
 */
const UserSettings = ({ open, setOpen }: UserSettingsProps) => {
	const [tabValue, setTabValue] = useState(0);
	const handleTabChange = (event: SyntheticEvent, newValue: number) => {
		setTabValue(newValue);
	};

	function a11yProps(index: number) {
		return {
			id: `tabpanel-${index}`,
			"aria-controls": `tab-${index}`,
			sx: {
				width: 100,
			},
		};
	}

	return (
		<Dialog
			sx={{ zIndex: 5000 }}
			fullScreen
			open={open}
			onClose={setOpen}
			TransitionComponent={Transition}
		>
			<Root>
				<Header>
					<CloseButton onClick={() => setOpen(false)} />
				</Header>
				<BaseBlockTitleBox
					title="유저 세팅"
					subtitle="각종 정보를 세팅하여 재접속 시에도 그 상태를 유지합니다."
				/>
				<Box
					sx={{
						flexGrow: 1,
						bgColor: "background.paper",
						display: "flex",
						height: 440,
						pt: 1,
					}}
				>
					<Tabs
						value={tabValue}
						onChange={handleTabChange}
						aria-label="user-settings-tab"
						orientation="vertical"
						variant="scrollable"
						sx={{ borderRight: 1, borderColor: "divider", width: 110 }}
					>
						<Tab label="유저 정보" {...a11yProps(0)} />
						<Tab label="심볼 세팅" {...a11yProps(1)} />
						<Tab label="투명도 세팅" {...a11yProps(2)} />
					</Tabs>
					<TabPanel value={tabValue} index={0}>
						<TabPanelRoot>
							<UserInfo />
						</TabPanelRoot>
					</TabPanel>
					<TabPanel value={tabValue} index={1}>
						<TabPanelRoot>
							<MapSymbol />
						</TabPanelRoot>
					</TabPanel>
					<TabPanel value={tabValue} index={2}>
						<TabPanelRoot>123</TabPanelRoot>
					</TabPanel>
				</Box>
			</Root>
		</Dialog>
	);
};

export default UserSettings;

const Root = styled("div")(() => ({
	padding: "1.5% 2%",
}));

const Header = styled("div")(() => ({
	display: "flex",
	justifyContent: "flex-end",
}));

const TabPanelRoot = styled("div")(() => ({
	padding: "0px 5%",
}));
