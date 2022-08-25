import BaseBlockTitleBox from "../../components/box/textBox/BaseBlockTitleBox";
import BaseModal from "../../components/modal/BaseModal";
import { mapGridLayerList } from "../../data/constants/mapGridLayerList";
import MapGridLayerItemBox from "./MapGridLayerItemBox";

interface MapGridControlModalProps {
	open: boolean;
	setOpen: () => void;
}

// 지도의 Grid(그리드)를 설정할 수 있도록 하는 모달임.
/**
 * 지도 Toolbar의 그리드(Grid)를 누르면 나오는 모달
 *
 * @param {MapGridControlModalProps} MapGridControlModalProps
 * @returns {JSX.Element} React Component
 */
const MapGridControlModal = ({ open, setOpen }: MapGridControlModalProps) => {
	return (
		<BaseModal open={open} setOpen={setOpen}>
			<BaseBlockTitleBox
				title="그리드 설정"
				subtitle="필요한 그리드를 설정하여 지도에 표시합니다"
			/>
			{mapGridLayerList.map((grid) => (
				<MapGridLayerItemBox key={grid.name} gridLayer={grid} />
			))}
		</BaseModal>
	);
};

export default MapGridControlModal;
