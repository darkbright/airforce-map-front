import { Box, Drawer, styled } from "@mui/material";
import { useState } from "react";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import BaseBlockTitleBox from "../../components/box/textBox/BaseBlockTitleBox";
import BaseButton from "../../components/button/BaseButton";
import { mapLayerList } from "../../data/constants/mapLayerList";
import { reorder } from "../../utils/reorder";
import MapListItemOnDrawer from "./MapListItemOnDrawer";
import SelectMapTypeModal from "./SelectMapTypeModal";

interface MapTypeDrawer {
	open: boolean;
	setOpen: (set: boolean) => void;
}

const MapTypeDrawer = ({ open, setOpen }: MapTypeDrawer) => {
	const [openSelectMap, setOpenSelectMap] = useState(false);

	const defaultMapList = mapLayerList.filter((m) => m.default === true);
	const [mapList, setMapList] = useState(defaultMapList);

	const onDragEnd = ({ destination, source }: DropResult) => {
		if (!destination) return;

		const reorderedList = reorder(mapList, source.index, destination.index);
		// 순서를 바꿀 때마다 전체 Map Layer들의 zIndex를 새로 정렬해줌.
		for (let i = reorderedList.length - 1; i >= 0; i--) {
			window.map.getLayers().forEach((element: any) => {
				const selected = reorderedList.length - i - 1;
				if (element.get("name") === reorderedList[selected].name) {
					element.setZIndex(i);
				}
			});
		}

		setMapList(reorderedList);
	};

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

					<DragDropContext onDragEnd={onDragEnd}>
						<Droppable droppableId="map-order-list">
							{(provided) => (
								<ItemWrapper ref={provided.innerRef} {...provided.droppableProps}>
									{mapList.map((m, index: number) => {
										return (
											<MapListItemOnDrawer
												index={index}
												key={m.name}
												title={m.title}
												layerName={m.name}
												isDefaultMap={m.default}
												handleRemoveLayer={() => {
													// map Layer list에서 해당 맵을 지움
													window.map.getLayers().forEach((element: any) => {
														if (element.get("name") === m.name) {
															window.map.removeLayer(element);
														}
													});
													// Drawer에 보이는 리스트에서 해당 맵을 지움
													setMapList(mapList.filter((map) => map.name !== m.name));
												}}
											/>
										);
									})}
									{provided.placeholder}
								</ItemWrapper>
							)}
						</Droppable>
					</DragDropContext>
				</Box>
			</Drawer>
			<SelectMapTypeModal
				open={openSelectMap}
				setOpen={() => setOpenSelectMap(false)}
				mapList={mapList}
				setMapList={setMapList}
			/>
		</>
	);
};

export default MapTypeDrawer;

const ItemWrapper = styled("div")({
	marginTop: 20,
});
