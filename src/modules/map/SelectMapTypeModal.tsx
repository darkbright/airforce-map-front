import BaseBlockTitleBox from "../../components/box/textBox/BaseBlockTitleBox";
import BaseModal from "../../components/modal/BaseModal";
import MapTypeCard from "./MapTypeCard";
import { styled } from "@mui/material";

import openStreetMapImage from "../../assets/images/mapSample/openStreetMap.png";
import basemapImage from "../../assets/images/mapSample/basemap.png";
import land100kImage from "../../assets/images/mapSample/land100k.png";
import worldBoundaryImage from "../../assets/images/mapSample/worldBoundary.png";
import satelliteVideoImage from "../../assets/images/mapSample/satelliteVideo.png";

interface SelectMapTypeModalProps {
	open: boolean;
	setOpen: () => void;
}

const SelectMapTypeModal = ({ open, setOpen }: SelectMapTypeModalProps) => {
	return (
		<BaseModal open={open} setOpen={setOpen}>
			<BaseBlockTitleBox title="지도 선택" subtitle="배경으로 표시할 지도를 선택해주세요" />
			<CardWrapper>
				<MapTypeCard
					title="오픈스트리트맵"
					subtitle="오픈소스 지도"
					imgSrc={openStreetMapImage}
					onSelect={() => console.log("selected")}
				/>
				<MapTypeCard
					title="기본 지도"
					subtitle="기본위성지도"
					imgSrc={basemapImage}
					onSelect={() => console.log("selected")}
				/>
				<MapTypeCard
					title="세계 경계"
					subtitle="각 지역의 경계면 표시"
					imgSrc={worldBoundaryImage}
					onSelect={() => console.log("selected")}
				/>
				<MapTypeCard
					title="위성영상"
					subtitle="위성 영상 표시(용량이 큼)"
					imgSrc={satelliteVideoImage}
					onSelect={() => console.log("selected")}
				/>
				<MapTypeCard
					title="육도 100만"
					subtitle="육도 100만 지도 "
					imgSrc={land100kImage}
					onSelect={() => console.log("selected")}
				/>
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
