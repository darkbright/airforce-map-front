import BaseBlockTitleBox from "../../components/box/textBox/BaseBlockTitleBox";
import BaseModal from "../../components/modal/BaseModal";
import MapTypeCard from "./MapTypeCard";
import { styled } from "@mui/material";
import { mapLayerList, MapLayerListType } from "../../data/constants/mapLayerList";
import { Dispatch, SetStateAction } from "react";

interface SelectMapTypeModalProps {
	open: boolean;
	setOpen: () => void;
	mapList: MapLayerListType[];
	setMapList: Dispatch<SetStateAction<MapLayerListType[]>>;
}

const SelectMapTypeModal = ({ open, setOpen, mapList, setMapList }: SelectMapTypeModalProps) => {
	// mapList에 있는 것을 제외하고 전체 가용한 지도 목록을 뿌려주기
	const unloadedMapList = mapLayerList.filter((m) => !mapList.includes(m));

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
						onSelect={() =>
							setMapList((prev) => {
								return [layer, ...prev];
							})
						}
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
