import { Box, Divider, Drawer, styled, Tab, Tabs } from "@mui/material";
import { useEffect, useRef, useState } from "react";
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

	// 군대부호 속성 변경 창의 언어를 변환하기 위하여 필요한 과정임
	const langCheckedRef = useRef<HTMLInputElement>(null);
	useEffect(() => {
		const lang = localStorage.getItem("lang");
		if (!lang) {
			localStorage.setItem("lang", "ko");
		}
		if (langCheckedRef.current) {
			langCheckedRef.current.checked = localStorage.getItem("lang") === "ko";
		}
	}, [langCheckedRef]);

	/**
	 * 군대부호 속성창 언어 변경
	 * @deprecated
	 * 아래 언어 변경 div의 display를 보여주고, 한영버튼을 활성화 시키고 싶을 떄 사용함.
	 * 단, localstorage의 lang이 ko 일지라도, 알 수 없는 원인에 의하여 군대부호 속성정보창의 최초 값은 항상 영문으로 뜨고 있음을 감안할 것
	 */
	// const handleMilSymbolLang = (event: ChangeEvent<HTMLInputElement>) => {
	// 	document.querySelector("#d2map_translate-container")!.addEventListener("click", function () {
	// 		console.log(event.target.checked);
	// 		if (langCheckedRef.current) {
	// 			langCheckedRef.current.checked = event.target.checked;
	// 		}

	// 		// setLangChecked(event?.target.checked);
	// 		localStorage.getItem("lang") === "ko"
	// 			? localStorage.setItem("lang", "en")
	// 			: localStorage.setItem("lang", "ko");

	// 		window.MilSymbol.translateMilsymbolProperties(); //*군대부호 속성창 다시 불러오기
	// 	});
	// };

	return (
		<Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
			<Box role="milSymbolTree" sx={{ width: 500, padding: "10% 5%" }}>
				<BaseBlockTitleBox title="군대부호 찾기" subtitle="군대부호를 찾아주세요" />
				{/* 아래 블록은 d2제작 html element로 군대부호속성정보를 한글화하기 위한 element로 없으면 돌아가질 않음.
				단 본 프로젝트에서 군대부호속성정보를 영문으로 바꿔줘야 할 이유가 없으므로,
				해당 블록의 존재는 반드시 있어야 하나, 해당 버튼의 토글을 보여줄 필요가 없는 것으로 하여 처리 하겠음. 
				한/영 전환 시 d2의 jquery element의 속성 변경이 react에서 제대로 일어나지 않기 때문 */}
				<div style={{ display: "flex", justifyContent: "flex-end" }}>
					<div id="popup-milsymbol">
						<div
							className="d2map_translate-btn"
							id="d2map_translate-container"
							style={{ display: "none" }}
						>
							<input
								type="checkbox"
								className="d2map_translate-chk"
								// onChange={(e) => handleMilSymbolLang(e)}
								// checked={langChecked}
								ref={langCheckedRef}
							/>
							<div className="d2map_translate-knobs"></div>
							<div className="d2map_translate-layer"></div>
						</div>
						{/* 아래부분은 d2map_popupGraphicMSProperty className이 없으면 loadMilsymbolTree에서 에러를 뱉어 작동하지 않아 넣어둔 것임.. */}
						<div style={{ display: "none" }}>
							{/* <div
								id="d2map_ms_prop_container"
								className="d2map_ms_prop_container d2map_ui-popup ui-draggable ui-draggable-handle"
							></div> */}
							<div id="d2map_tree-container" className="d2map_tree-container">
								<ul id="d2map_milsymbolTree" className="d2map_ztree"></ul>
							</div>
							<ul className="graphic-contextmenu">
								<li>
									<a href="#d2map_popup-graphic-msstyle" className="d2map_popupGraphicMSProperty">
										군대부호 속성
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				{/* 바로 위 주석친 부분부터 바로 여기 부분까지 절대 삭제하지 말 것 */}

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
