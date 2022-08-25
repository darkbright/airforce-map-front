import BaseBlockTitleBox from "../../components/box/textBox/BaseBlockTitleBox";
import BaseModal from "../../components/modal/BaseModal";
import MapTypeCard from "./MapTypeCard";
import { styled } from "@mui/material";
import { mapLayerList, MapLayerListType } from "../../data/constants/mapLayerList";
import { Dispatch, SetStateAction } from "react";
import { addMapLayer } from "../../libs/d2/mapSettings/addLayers/addMapLayer";

interface SelectMapTypeModalProps {
	open: boolean;
	setOpen: () => void;
	mapList: MapLayerListType[];
	setMapList: Dispatch<SetStateAction<MapLayerListType[]>>;
}

/**
 * 지도 Toolbar에서 배경지도를 선택했을 때 우측에 뜨는 Drawer 내 우측 상단에 위치한 "지도 추가" 버튼을 누르면 나오는 모달
 *
 * 지도의 종류를 선택할 수 있음. 유저가 지도를 선택하면 MapTypeDrawer에 배열로 추가되며, 그 지도가 실제 지도 stack의 맨 위에 나타나게 됨
 *
 * @param {SelectMapTypeModalProps} SelectMapTypeModalProps
 * @returns {JSX.Element} React Component(Modal)
 */

const SelectMapTypeModal = ({ open, setOpen, mapList, setMapList }: SelectMapTypeModalProps) => {
	// mapList에 있는 것을 제외하고 전체 가용한 지도 목록을 뿌려주기
	const unloadedMapList = mapLayerList.filter((m) => !mapList.includes(m));

	const addMapLayerToMap = (layer: MapLayerListType) => {
		addMapLayer({ addToMap: true, ...layer });
	};

	return (
		<BaseModal open={open} setOpen={setOpen}>
			<BaseBlockTitleBox title="지도 선택" subtitle="배경으로 표시할 지도를 선택해주세요" />
			<CardWrapper>
				{unloadedMapList.map((layer) => (
					<MapTypeCard
						key={layer.name}
						title={layer.title}
						category={layer.category}
						imgSrc={layer.thumbnail}
						onSelect={() => {
							setMapList((prev) => [layer, ...prev]);
							addMapLayerToMap(layer);
						}}
					/>
				))}
			</CardWrapper>
		</BaseModal>
	);
};

export default SelectMapTypeModal;

const CardWrapper = styled("div")(() => ({
	display: "flex",
	flexFlow: "row wrap",
	alignContent: "space-between",
	justifyContent: "space-between",
	width: 500,
}));
