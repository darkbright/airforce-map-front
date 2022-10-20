import { Box, Divider, Drawer, styled, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import BaseBlockTitleBox from "../../../components/box/textBox/BaseBlockTitleBox";
import TabPanel from "../../../components/tab/TabPanel";
import { MilSymbolTreeListType } from "../../../data/constants/milSymbolTreeList";
import { addMilSymbolOnMap } from "../../../libs/d2/mapSettings/draw/addMilSymbolOnMap";
import MilitarySymbolFavoriteTab from "./MilitarySymbolFavoriteTab";
import MilitarySymbolSearchTab from "./MilitarySymbolSearchTab";

interface MilitarySymbolListTreeDrawerProps {
	open: boolean;
	setOpen: (set: boolean) => void;
}

export interface ModifiedMilSymboListType extends MilSymbolTreeListType {
	groupName: string;
	modifiedName: string;
	symbolImage: string;
}

const MilitarySymbolListTreeDrawer = ({ open, setOpen }: MilitarySymbolListTreeDrawerProps) => {
	const [selectedMilSymbol, setSelectedMilSymbol] = useState<ModifiedMilSymboListType | null>(null);
	const [tabValue, setTabValue] = useState(0);

	const handleSymbolToBeInMap = () => {
		setOpen(false);
		if (selectedMilSymbol) {
			addMilSymbolOnMap({ cd: selectedMilSymbol?.cd });
		}
	};

	return (
		<Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
			<Box role="milSymbolTree" sx={{ width: 500, padding: "10% 5%" }}>
				<BaseBlockTitleBox title="군대부호 찾기" subtitle="군대부호를 찾아주세요" />
				<Tabs
					value={tabValue}
					onChange={(e, v) => setTabValue(v)}
					aria-label="milSymbolExplorer-tabs"
					sx={{ borderBottom: 1, borderColor: "divider" }}
				>
					<Tab disableRipple label="군대부호 검색" />
					<Tab disableRipple label="군대부호트리" />
				</Tabs>
				<TabPanel value={tabValue} index={0}>
					<Root>
						<MilitarySymbolSearchTab
							selectedMilSymbol={selectedMilSymbol!}
							setSelectedMilSymbol={setSelectedMilSymbol}
							onClickSingleSymbolBox={handleSymbolToBeInMap}
						/>
						<Divider sx={{ mt: 3, mb: 3 }} />
						<MilitarySymbolFavoriteTab onClickSymbol={handleSymbolToBeInMap} />
					</Root>
				</TabPanel>
				<TabPanel value={tabValue} index={1}>
					<Root>
						{/* d2에서 만든거 - 현재 필요없음 */}
						{/* <div
					id="d2map_milsymbolTree"
					className="d2map_ztree"
					onClick={() => window.MilSymbol.loadMilsymbolTree()}
				>
					ddd
				</div> */}
					</Root>
				</TabPanel>
			</Box>
		</Drawer>
	);
};

export default MilitarySymbolListTreeDrawer;

const Root = styled("div")(() => ({
	marginTop: 20,
}));
