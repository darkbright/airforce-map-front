import { Box, Divider, Drawer, styled, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import BaseBlockTitleBox from "../../../components/box/textBox/BaseBlockTitleBox";
import TabPanel from "../../../components/tab/TabPanel";
import { MilSymbolTreeListType } from "../../../data/constants/milSymbolTreeList";
import { addMilSymbolOnMap } from "../../../libs/d2/mapSettings/draw/addMilSymbolOnMap";
import MilitarySymbolFavoriteTab from "./MilitarySymbolFavoriteTab";
import MilitarySymbolSearchTab from "./MilitarySymbolSearchTab";
import MilitarySymbolTreeTab from "./MilitarySymbolTreeTab";

interface MilitarySymbolListTreeDrawerProps {
	open: boolean;
	setOpen: (set: boolean) => void;
}

export interface ModifiedMilSymboListType extends MilSymbolTreeListType {
	groupName: string;
	modifiedName: string;
	symbolImage: string;
}
/**
 * 툴바에서 그리기를 클릭하고 맨 오른쪽 군대부호를 클릭하게 되면 나오게 되는 Drawer로 군대부호를 찾는 행위를 함
 * @param  MilitarySymbolListTreeDrawerProps MilitarySymbolListTreeDrawerProps
 * @returns {JSX.Element} drawer
 */
const MilitarySymbolListTreeDrawer = ({ open, setOpen }: MilitarySymbolListTreeDrawerProps) => {
	const [selectedMilSymbol, setSelectedMilSymbol] = useState<ModifiedMilSymboListType | null>(null);
	const [tabValue, setTabValue] = useState(0);

	const handleSymbolToBeInMap = () => {
		setOpen(false);
		if (selectedMilSymbol) {
			addMilSymbolOnMap({ cd: selectedMilSymbol?.cd });
		}
	};

	/**
	 * 군대부호 속성창 언어 변경
	 */
	const handleMilSymbolLang = () => {
		document.querySelector("#d2map_translate-container")!.addEventListener("click", function () {
			localStorage.getItem("lang") === "ko"
				? localStorage.setItem("lang", "en")
				: localStorage.setItem("lang", "ko");
			// getlang(localStorage.getItem('lang'));

			// const milSymbolTree = TreeView.getTreeObject("d2map_tree-container");
			// milSymbolTree.setOptions("name", localStorage.getItem("lang") === "ko" ? "name" : "eName");
			// milSymbolTree.reload();

			// const iconMSTree = TreeView.getTreeObject("d2map_msSIDCTree");
			// iconMSTree.setOptions("name", localStorage.getItem("lang") === "ko" ? "name" : "eName");
			// iconMSTree.reload();

			// window.MilSymbol.loadMilsymbolTree();
			// window.MilSymbol.translateTree();
			window.MilSymbol.translateMilsymbolProperties(); //*군대부호 속성창 다시 불러오기
		});
	};

	return (
		<Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
			<Box role="milSymbolTree" sx={{ width: 500, padding: "10% 5%" }}>
				<BaseBlockTitleBox title="군대부호 찾기" subtitle="군대부호를 찾아주세요" />
				<div style={{ display: "flex", justifyContent: "flex-end" }}>
					<div
						className="d2map_translate-btn"
						id="d2map_translate-container"
						onClick={handleMilSymbolLang}
					>
						<input type="checkbox" className="d2map_translate-chk" style={{ width: "100%" }} />
						<div className="d2map_translate-knobs"></div>
						<div className="d2map_translate-layer"></div>
					</div>
				</div>

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
						<MilitarySymbolFavoriteTab onClickSymbol={() => setOpen(false)} />
					</Root>
				</TabPanel>
				<TabPanel value={tabValue} index={1}>
					<Root>
						<MilitarySymbolTreeTab onSelectSymbol={handleSymbolToBeInMap} />
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
