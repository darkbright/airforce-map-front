import { Box, Button, Drawer } from "@mui/material";
import { useEffect, useState } from "react";
import BaseBlockTitleBox from "../../components/box/textBox/BaseBlockTitleBox";
import D2MapModule from "../../libs/d2/D2MapModule";
import urlInfo from "../../libs/d2/mapSettings/urlInfo";
import useRightClickStore from "../../stores/useRightClickStore";

interface MapTopographyControlDrawerProps {
	open: boolean;
	setOpen: (set: boolean) => void;
}

const { MVTLayerUI } = D2MapModule;

const MapTopographyControlDrawer = ({ open, setOpen }: MapTopographyControlDrawerProps) => {
	const [isMVTOnScreen, setIsMVTOnScreen] = useState(false);
	const [selectedMVT, setSelectedMVT] = useState("");
	const [selectedLayer, setSelectedLayer] = useState({} as any);

	const { rightClickEnabled } = useRightClickStore();

	const MVTLayerTreeUI = new MVTLayerUI("d2map_mvtTree");

	useEffect(() => {
		// 현재 로딩되고 있는 지도에 MVT로 된 것이 있는지 확인
		// 지형요소는 당연하게도 벡터로 된 지도에 대해서만 켰다 껐다를 조정할 수 있음.
		if (window.map && rightClickEnabled) {
			window.map.getLayers().forEach((element: any) => {
				if (element.get("type") === "MVT") {
					setIsMVTOnScreen(true);
					setSelectedMVT(element.getProperties().name);
					const selected = window.mapLayerManager.getMVTLayer("COPMap");
					setSelectedLayer(selected);
					MVTLayerTreeUI.setMVTLayer(selected);
					MVTLayerTreeUI.importXMLFromUrl(urlInfo.fdbLayer.background);

					console.log("MVTLayerTreeUI", MVTLayerTreeUI);
					// const formattedXml = MVTLayerTreeUI.exportXML();
					// console.log("export: string type", formattedXml);

					// const json = MVTLayerTreeUI.layerDataToJson();
					// console.log("레이어,목록,source,visibility 반환:", json);

					// const layerOrderList = selectedLayer.getLayerOrderLiest();
					// console.log("layerOrderList", layerOrderList);

					// console.log(MVTLayerTreeUI.layerDataToJson());
				}
			});
		}
	}, [rightClickEnabled, setSelectedLayer, open]);

	console.log("selectedLayer", selectedLayer);

	return (
		<Drawer sx={{ opacity: 0.98 }} anchor="right" open={open} onClose={() => setOpen(false)}>
			<Box sx={{ width: 400, padding: "10% 5%" }} role="combobox">
				<BaseBlockTitleBox
					title={`${selectedMVT} 지형요소검색`}
					subtitle="벡터지도에 대한 지형요소검색 수행"
				/>
				{isMVTOnScreen ? selectedMVT : "없어요"}
				<div style={{ margin: "20px 0px" }}>
					<div id="d2map_tree-container-mvt" className="tree-container-mvt">
						<ul id="d2map_mvtTree" className="d2map_ztree"></ul>
					</div>
				</div>

				<Button
					onClick={() => {
						const formattedXml = MVTLayerTreeUI.exportXML();
						console.log("export: string type", formattedXml);
					}}
				>
					export
				</Button>
			</Box>
		</Drawer>
	);
};

export default MapTopographyControlDrawer;
