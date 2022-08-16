import { Box, Drawer, styled } from "@mui/material";
import { useState } from "react";
import BaseBlockTitleBox from "../../components/box/textBox/BaseBlockTitleBox";
import BaseButton from "../../components/button/BaseButton";
import MapListItemOnDrawer from "./MapListItemOnDrawer";
import SelectMapTypeModal from "./SelectMapTypeModal";

interface MapTypeDrawer {
	open: boolean;
	setOpen: (set: boolean) => void;
}

const defaultMapList = [
	{
		name: "OpenStreetMap",
		layerName: "openStreet",
	},
	{
		name: "세계지도",
		layerName: "worldMap",
	},
];

const MapTypeDrawer = ({ open, setOpen }: MapTypeDrawer) => {
	const [openSelectMap, setOpenSelectMap] = useState(false);
	const [mapList, setMapList] = useState(defaultMapList);

	return (
		<>
			<Drawer sx={{ opacity: 0.98 }} anchor="right" open={open} onClose={() => setOpen(false)}>
				<Box sx={{ width: 280, padding: "20% 10%" }} role="combobox">
					<BaseBlockTitleBox
						title="지도 레이어 설정"
						subtitle="표시할 지도를 선택하고 배치해주세요"
					/>
					<div style={{ textAlign: "right" }}>
						<BaseButton title="지도 추가" type="button" onClick={() => setOpenSelectMap(true)} />
					</div>

					<ItemWrapper>
						{mapList.map((m) => (
							<MapListItemOnDrawer key={m.name} title={m.name} layerName={m.layerName} />
						))}
					</ItemWrapper>
				</Box>
			</Drawer>
			<SelectMapTypeModal open={openSelectMap} setOpen={() => setOpenSelectMap(false)} />
		</>
	);
};

export default MapTypeDrawer;

const ItemWrapper = styled("div")({
	marginTop: 20,
});
