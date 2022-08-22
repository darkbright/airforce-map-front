import BaseBlockTitleBox from "../../components/box/textBox/BaseBlockTitleBox";
import BaseButton from "../../components/button/BaseButton";
import BaseModal from "../../components/modal/BaseModal";
import { mapGridLayerList } from "../../data/constants/mapGridLayerList";
import { gridGenerator } from "../../libs/d2/mapSettings/grid/gridGenerator";
import MapGridLayerItemBox from "./MapGridLayerItemBox";

interface MapGridControlModalProps {
	open: boolean;
	setOpen: () => void;
}

// 지도의 Grid(그리드)를 설정할 수 있도록 하는 모달임.

const MapGridControlModal = ({ open, setOpen }: MapGridControlModalProps) => {
	const handleOpenGrid = () => {
		gridGenerator(mapGridLayerList[0]);
	};

	return (
		<BaseModal open={open} setOpen={setOpen}>
			<BaseBlockTitleBox
				title="그리드 설정"
				subtitle="필요한 그리드를 설정하여 지도에 표시합니다"
			/>
			<MapGridLayerItemBox title="어쩌고" />
			<BaseButton title="눌러" onClick={handleOpenGrid} />
		</BaseModal>
	);
};

export default MapGridControlModal;
