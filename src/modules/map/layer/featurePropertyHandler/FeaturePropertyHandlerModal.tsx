import { Box, styled, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import BaseModal from "../../../../components/modal/BaseModal";
import TabPanel from "../../../../components/tab/TabPanel";
import { IGraphicObject } from "../../../../types/d2/Graphic";
import FeatureFillHandler from "./FeatureFillHandler";
import FeatureLineHandler from "./FeatureLineHandler";

interface FeaturePropertyHandlerModalProps {
	open: boolean;
	setOpen: () => void;
	feature: IGraphicObject;
}

/**
 * 개별 feature에서 마우스 오른쪽 버튼을 누르면 나오는 속성 변경을 누르면 나오는 모달로 해당 feature의 선, 채움, 텍슽, 기타 속성 등을 변경할 수 있음
 * 나중에 이거 drag 가능하게 해야 할 듯
 * TO_BE_CHECKED
 * @param FeaturePropertyHandlerModalProps FeaturePropertyHandlerModalProps
 * @returns {JSX.Element} Modal
 */
const FeaturePropertyHandlerModal = ({
	open,
	setOpen,
	feature,
}: FeaturePropertyHandlerModalProps) => {
	const [tabValue, setTabValue] = useState(0);
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
		<BaseModal open={open} setOpen={setOpen}>
			<Box sx={{ flexGrow: 1, bgColor: "background.paper", display: "flex", height: 260 }}>
				<Tabs
					orientation="vertical"
					variant="scrollable"
					value={tabValue}
					aria-label="feature-proertyHandler"
					onChange={(event, newValue: number) => setTabValue(newValue)}
					sx={{ borderRight: 1, borderColor: "divider" }}
				>
					<Tab label="선" {...a11yProps(0)} />
					<Tab label="채움" {...a11yProps(1)} />
					<Tab label="텍스트" {...a11yProps(2)} />
					<Tab label="속성" {...a11yProps(3)} />
				</Tabs>
				<TabPanel value={tabValue} index={0}>
					<TabPanelRoot>
						<FeatureLineHandler feature={feature} />
					</TabPanelRoot>
				</TabPanel>
				<TabPanel value={tabValue} index={1}>
					<TabPanelRoot>
						<FeatureFillHandler feature={feature} />
					</TabPanelRoot>
				</TabPanel>
				<TabPanel value={tabValue} index={2}>
					<TabPanelRoot></TabPanelRoot>
				</TabPanel>
				<TabPanel value={tabValue} index={3}>
					<TabPanelRoot></TabPanelRoot>
				</TabPanel>
			</Box>
		</BaseModal>
	);
};

export default FeaturePropertyHandlerModal;

const TabPanelRoot = styled("div")(() => ({
	padding: "0px 20px",
}));
